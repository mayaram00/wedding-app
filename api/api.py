import time
from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}