from flask import Flask, render_template, request
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