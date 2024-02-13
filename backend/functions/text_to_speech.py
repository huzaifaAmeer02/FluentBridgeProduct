import requests
from decouple import config

ELEVEN_LABS_API_KEY = config("ELEVEN_LABS_API_KEY")

#conver text ot speech

def convvert_text_to_speech(message):

    # body of data
    body = {
        "text":message,
        "voice_settings":{
            "stability": 0,
            "similarity_boost":0
        }
    }

    #define voice
    voice_reachel = "21m00Tcm4TlvDq8ikWAM"

    # constructing endpointsa and headers

    #headers
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVEN_LABS_API_KEY
    }

    #endpoins
    endpoints = "https://api.elevenlabs.io/v1/text-to-speech/{voice_reachel}"

    #send request

    try:
        response = requests.post(endpoints, json=body, headers=headers)
        """  with open('output.mp3', 'wb') as f:
                for chunk in response.iter_content(chunk_size=CHUNK_SIZE):
                    if chunk:
                        f.write(chunk) """

    except Exception as e:
        return


    # handle respnse

    if response.status_code == 200:
        return response.content
    else:
        return