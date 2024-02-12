import openai
from decouple import config

# import get recent message
from functions.database import get_recent_message

# Environment variable
openai.organization = config("OPEN_Ai_ORG")
openai.api_key = config("OPEN_Ai_KEY")

# Open ai -Whisper
# Convert audio to text
def convert_audio_to_text(audio_file):
    try:
        transcript = openai.audio.transcriptions.create(
            model="whisper-1",
            file=audio_file,
            response_format="text"  # Set additional options if needed
        )

        # Extract text from the response
        message_text = transcript["text"]
        return message_text
    except Exception as e:
        print(e)
        return
    

    # Open_ai - chat gpt
    # get responses to our Message

def get_chat_response(message_input):
    messages = get_recent_message()
    user_message = {"role":"user","context":message_input}
    messages.append(user_message)
    print(messages)

    try:
        response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
        )
        print(response)
        message_text = response["choices"][0]["message"]["content"]
        return message_text
    except Exception as e:
        print(e)
        return