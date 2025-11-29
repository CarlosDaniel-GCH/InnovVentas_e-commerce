from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot_service import get_chatbot_response
import csv
import os
from datetime import datetime

app = Flask(__name__)
# CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})

# Ruta simple para prueba
@app.route('/')
def home():
    return jsonify({"message": "Flask funcionando correctamente"})

# Ruta para el chatbot
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    # Obtener respuesta de Gemini
    bot_response = get_chatbot_response(user_message)

    # Guardar métricas
    guardar_metricas(user_message, bot_response)

    return jsonify({"response": bot_response})

def guardar_metricas(user_msg, bot_msg):
    file_path = os.path.join(os.path.dirname(__file__), "metrics.csv")

    with open(file_path, "a", newline='', encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow([
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            user_msg,
            bot_msg
        ])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
