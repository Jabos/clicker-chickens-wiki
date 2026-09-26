import datetime
import os
import random
import requests

def enviar_recompensa_discord():
    # 1. Calcular la seed basada en la fecha actual (UTC o tu hora local)
    hoy = datetime.datetime.utcnow()
    year = hoy.year
    month = hoy.month
    day = hoy.day
    
    daily_seed = year * 10000 + month * 100 + day
    random.seed(daily_seed)
    
    # 2. Aquí leerías tus datos de la wiki (ej: un archivo json con tus pollos)
    # con open('tus_datos.json', 'r') as f:
    #     data = json.load(f)
    
    # Simulación de la selección (reemplaza esto según cómo tengas guardados los datos en tu wiki):
    # id_rival = ... 
    # es_shiny = random.random() < 0.08

    # 3. Obtener el Webhook desde los Secrets de GitHub (por seguridad)
    webhook_url = os.environ.get("DISCORD_WEBHOOK_URL")
    if not webhook_url:
        print("No se encontró el Webhook URL")
        return

    # 4. Enviar el mensaje a Discord
    mensaje = {
        "content": f"🐔 **¡Ya cambió el día en Clicker Chickens!** 🐔\nLa recompensa especial de hoy ({day}/{month}/{year}) ya está disponible en el juego. ¡Entra a reclamarla!"
    }
    
    response = requests.post(webhook_url, json=mensaje)
    if response.status_code == 204:
        print("¡Mensaje enviado con éxito a Discord!")
    else:
        print(f"Error al enviar: {response.text}")

if __name__ == "__main__":
    enviar_recompensa_discord()