import os
from bson.json_util import dumps
import json
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/decisiontree")
def decisiontree():
    return render_template("decisiontree.html")

@app.route("/kelly")
def kelly():
    return render_template("kelly.html")

@app.route("/mamta")
def mamta():
    return render_template("mamta.html")

@app.route("/models")
def models():
    return render_template("models.html")

@app.route("/predictive")
def predictive():
    return render_template("predictive.html")

@app.route("/zoe")
def zoe():
    return render_template("zoe.html")

if __name__ == "__main__":
    app.run(debug=True)