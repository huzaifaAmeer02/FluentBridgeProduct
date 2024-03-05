
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