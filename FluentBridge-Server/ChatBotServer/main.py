# uvicon main:app
# uvicorn main:app --reload
# Get-ExecutionPolicy
# Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# .\venv\Scripts\Activate
#

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import openai

# Custome function imports
from functions.openai_request import convert_audio_to_text, get_chat_response
from functions.database import store_mesages, recet_messages
from functions.text_to_speech import convvert_text_to_speech

app = FastAPI()

# CORS - Origins
# CORS - Origins
Origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:4173",
    "http://localhost:4174",
    "http://localhost:3000"
]
# CORS - Origins

# CORS - middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=Origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def check_health():
    return {"message": "healthy"}


# reset messages
@app.get("/reset_conversation")
async def reset_conversation():
    recet_messages()
    return {"message": "conversation reset"}


# get audio
@app.post("/post-audio/")
async def post_audio(file: UploadFile = File(...)):
    """ # get saved audio
    audio_input = open("audio.mp3", "rb") """

    # save file from front end
    with open(file.filename, "wb") as buffer:
        buffer.write(file.file.read())
    audio_input = open(file.filename, "rb")

    # decode audio
    message_decoded = convert_audio_to_text(audio_input)

    print(message_decoded)

    # to ensure message decode
    if not message_decoded:
        return HTTPException(status_code=400, detail="failed to decode the audio")

    # get chat gpt response
    chat_response = get_chat_response(message_decoded)
    print(chat_response)

    if not chat_response:
        return HTTPException(status_code=400, detail="failed to get chat response")

    # store messages
    store_mesages(message_decoded, chat_response)

    # Convert chat response to audio
    audio_output = convvert_text_to_speech(chat_response)

    # to ensure elven api convert to voice
    if not audio_output:
        return HTTPException(status_code=400, detail="failed to get elven labs audio output")

    # genaratore that yields chunk of data
    def iterfile():
        yield audio_output

    # return audio file
    return StreamingResponse(iterfile(), media_type="application/octet-stream")

# post chatbot responses
# ** not playing in browser when post request

# @app.post("/post-audio/")
# async def post_audio( file: UploadFile = File(...)):
#   print("hello")
