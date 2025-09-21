from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # enable cross-origin

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    return jsonify({"message": f"Data received: {name}, {email}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
