import requests
from decouple import config

ELEVEN_LABS_API_KEY = config("ELEVEN_LABS_API_KEY")


# define voice


# convert text ot speech

def convvert_text_to_speech(message):
    # define voice
    voice_reachel = "29vD33N1CtxCmqQRPOHJ"
    # body of data
    body = {
        "text": message,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "similarity_boost": 123,
            "stability": 123,
            "style": 123,
            "use_speaker_boost": True
        }
    }

    # constructing endpoints and headers
    endpoints = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_reachel}"

    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVEN_LABS_API_KEY
    }

    try:
        # response = requests.post(endpoints, json=body, headers=headers)
        response = requests.request("POST",endpoints, json=body, headers=headers)
    except Exception as e:
        print(e)
        return

    if response.status_code == 200:
        return response.content
    else:
        return
