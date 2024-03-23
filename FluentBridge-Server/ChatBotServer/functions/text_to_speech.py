import requests
from decouple import config

ELEVEN_LABS_API_KEY = config("ELEVEN_LABS_API_KEY")

# define voice
voice_reachel = "29vD33N1CtxCmqQRPOHJ"

endpoints = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_reachel}"

# headers
headers = {
    "xi-api-key": ELEVEN_LABS_API_KEY,
    "Content-Type": "application/json",
    "Accept": "audio/mpeg"

}


# convert text ot speech

def convvert_text_to_speech(message):
    # body of data
    body = {
        "text": message,
        "voice_settings": {
            "stability": 0,
            "similarity_boost": 0
        }
    }

    # constructing endpoints and headers

    try:
        response = requests.post(endpoints, json=body, headers=headers)

    except Exception as e:
        print(e)
        return

    if response.status_code == 200:
        return response.content
    else:
        return
