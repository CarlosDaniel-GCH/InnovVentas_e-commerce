import google.generativeai as genai
import csv
from datetime import datetime
import os
# ----------------------------------------
# CONFIGURAR GEMINI
# ----------------------------------------

API_KEY = os.environ.get("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

# Verifica si la clave se cargó
if not API_KEY:
    raise ValueError("La variable de entorno GEMINI_API_KEY no está configurada.")

# ----------------------------------------------------------------------------------
# INSTRUCCIÓN PARA CONVERTIRLO EN ASISTENTE DE VENTAS
# ----------------------------------------------------------------------------------
system_instruction = (
    "Eres un asistente virtual de ventas para InnovVentas e-commerce. "
    "Tu objetivo es ayudar a los clientes a encontrar productos (cargadores, powerbanks, cables) "
    "responder preguntas sobre características, envíos o devoluciones, y siempre mantener un tono "
    "amigable, profesional y persuasivo. Si te preguntan algo fuera de productos o ventas, "
    "pide disculpas y reorienta la conversación hacia la venta de productos tecnológicos."
)

# model = genai.GenerativeModel("gemini-2.5-flash")
# Inicializa el modelo con el System Instruction
model = genai.GenerativeModel(
    "gemini-2.5-flash",
    system_instruction=system_instruction
)
# ----------------------------------------
# FUNCIÓN: Obtener respuesta de IA
# ----------------------------------------

def get_chatbot_response(user_message):
    try:
        # Enviar el mensaje a Gemini
        response = model.generate_content(user_message)
        bot_reply = response.text

        # Guardar métrica en CSV
        save_metrics(user_message, bot_reply)

        return bot_reply

    except Exception as e:
        print("ERROR en Gemini:", e)
        return "Hubo un error procesando tu mensaje."
        # raise e

# ----------------------------------------
# FUNCIÓN: Guardar métricas en metrics.csv
# ----------------------------------------

def save_metrics(user_message, bot_reply):
    file_path = os.path.join(os.path.dirname(__file__), "metrics.csv")

    with open(file_path, "a", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow([
            datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            user_message,
            bot_reply
        ])
