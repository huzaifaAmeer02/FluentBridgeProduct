from flask import Flask, render_template, request
import os
import numpy as np
import librosa
import uuid  # Import uuid module to generate unique identifiers
from tensorflow.keras.models import load_model
import base64

app = Flask(__name__)