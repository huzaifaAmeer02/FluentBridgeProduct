87from flask import Flask, render_template, request
import os
import numpy as np
import librosa
import uuid  # Import uuid module to generate unique identifiers
from tensorflow.keras.models import load_model
import base64

app = Flask(__name__)



UPLOAD_FOLDER = 'static'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Function for feature extraction
def feature_extraction(file_name):
    print("*/n*/n came inside feature extraction")
    X, sample_rate = librosa.load(file_name, sr=None)
    if X.ndim > 1:
        X = X[:, 0]
    X = X.T
    stft = np.abs(librosa.stft(X))
    mfccs = np.mean(librosa.feature.mfcc(y=X, sr=sample_rate, n_mfcc=20).T, axis=0)
    rmse = np.mean(librosa.feature.rms(y=X).T, axis=0)
    spectral_flux = np.mean(librosa.onset.onset_strength(y=X, sr=sample_rate).T, axis=0)
    zcr = np.mean(librosa.feature.zero_crossing_rate(y=X).T, axis=0)
    return np.hstack([mfccs, rmse, spectral_flux, zcr])



# Function to predict class for a single audio file
def predict_single_audio_file(model, file_name):
    print("*/n*/n came inside single audio ")
    class_mapping = {0: 'Intermediate', 1: 'High', 2: 'Low'}
    try:
        # Extract features for the single audio file
        features = feature_extraction(file_name)
        # Reshape the features to match the input shape expected by the model
        features = features.reshape(1, -1)
        # Perform prediction
        prediction = model.predict(features)
        # Get the predicted class
        predicted_class = np.argmax(prediction)
        predicted_label = class_mapping.get(predicted_class, 'Unknown')
        return predicted_label
    except Exception as e:
        print(f"Error predicting audio: {e}")
        return 'Error predicting audio'


# Route to handle audio file upload and prediction
@app.route('/', methods=['POST', 'GET'])
def index():
    pred = ''
    if request.method == 'POST':
        # try:
            # Check if the audio data is present in the request
            # if 'audioFile' in request.files:
            #     audio_file = request.files['audioFile']


#     # Generate a unique filename for the audio file
            #     unique_filename = str(uuid.uuid4()) + '.wav'
            #     audio_file_path = os.path.join(app.config['UPLOAD_FOLDER'], unique_filename)
            #     audio_file.save(audio_file_path)

# Load the model
                model = load_model('model/classifier.h5')
                # Predict using the model
                pred = predict_single_audio_file(model,'Cake.waptt.wav')
        #     else:
        #         pred = 'No audio data received'
            
        # except Exception as e:
        #     print(f"Error handling audio: {e}")
        #     pred = 'Error'