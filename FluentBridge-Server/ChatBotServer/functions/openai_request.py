import openai
from decouple import config

from functions.database import get_recent_message

# import get recent message
# from functions.database import get_recent_message

# Environment variable
openai.organization = config("OPEN_AI_ORG")
openai.api_key = config("OPEN_AI_KEY")


# Open ai -Whisper
# Convert audio to text
def convert_audio_to_text(audio_file):
    try:
        transcription = openai.audio.transcriptions.create(
            model="whisper-1",
            file=audio_file
        )

        # Extract text from the response using dot notation
        message_text = transcription.text
        return message_text
    except Exception as e:
        print(e)
        return

    # Open_ai - chat gpt
    # get responses to our Message


def get_chat_response(message_input):

    messages = get_recent_message()
    user_message = {"role": "user", "content": message_input + " Only say two or 3 words in sinhala if speaking in spinhala. The remaining words should be in English"}
    messages.append(user_message)
    # print(messages)

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages
        )
        # print(response)
        message_text = response.choices[0].message.content
        print(message_text)
        return message_text
    except Exception as e:
        print(e)
        return
