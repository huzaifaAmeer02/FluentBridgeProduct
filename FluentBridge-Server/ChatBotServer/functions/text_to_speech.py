import requests
from decouple import config

ELEVEN_LABS_API_KEY = config("ELEVEN_LABS_API_KEY")


def convvert_text_to_speech(message):
    # body of data
    body = {
        "text": message,
        "voice_settings": {
            "stability": 0,
            "similarity_boost": 0
        }
    }
    # define voice
    voice_reachel = "21m00Tcm4TlvDq8ikWAM"

    # constructing endpoints and headers

    # headers
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVEN_LABS_API_KEY
    }

    # endpoins
    endpoints = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_reachel}"
