import os
import json
import re
import datetime
import requests

def cargar_datos_wiki():
    """Lee data.js y extrae el diccionario de datos."""
    ruta_script = os.path.dirname(os.path.abspath(__file__))
    ruta_data = os.path.join(ruta_script, "..", "data.js")
    
    if not os.path.exists(ruta_data):
        raise FileNotFoundError(f"No se encontró data.js en: {ruta_data}")
        
    with open(ruta_data, "r", encoding="utf-8") as f:
        contenido = f.read().strip()
        
    # Eliminamos 'window.WIKI_DATA =' del inicio y ';' del final
    json_texto = re.sub(r'^\s*window\.WIKI_DATA\s*=\s*', '', contenido)
    json_texto = json_texto.rstrip(';')
    
    return json.loads(json_texto)

def obtener_pollo_del_dia(chickens):
    """
    Filtra los pollos disponibles y elige uno de forma determinista
    según la fecha actual.
    """
    # Excluimos evoluciones que no salen salvajes (ej. evolution_only: True)
    candidatos = [
        c for c in chickens 
        if not (c.get("evolution") and c["evolution"].get("evolution_only", False))
    ]
    
    # Fecha UTC actual (puedes ajustar timezone si prefieres la hora de tu país)
    hoy = datetime.datetime.utcnow()
    daily_seed = hoy.year * 10000 + hoy.month * 100 + hoy.day
    
    # Generador pseudoaleatorio simple (LCG) para consistencia
    # Semilla -> Número
    rng_val = (daily_seed * 1103515245 + 12345) & 0x7FFFFFFF
    indice = rng_val % len(candidatos)
    pollo = candidatos[indice]
    
    # Comprobar Shiny (8% de probabilidad)
    rng_shiny = ((rng_val * 1103515245 + 12345) & 0x7FFFFFFF) / 0x7FFFFFFF
    es_shiny = rng_shiny < 0.08
    
    return pollo, es_shiny, hoy

def enviar_a_discord():
    webhook_url = os.environ.get("DISCORD_WEBHOOK_URL")
    if not webhook_url:
        print("Error: No se encontró la variable de entorno DISCORD_WEBHOOK_URL.")
        return

    data = cargar_datos_wiki()
    chickens = data.get("chickens", [])
    if not chickens:
        print("No se encontraron pollos en data.js")
        return

    pollo, es_shiny, fecha = obtener_pollo_del_dia(chickens)
    
    id_pollo = pollo["id"]
    nombre = pollo["name"]["es"]
    stats = pollo.get("stats", {})
    habitats = pollo.get("habitats", {}).get("wild", [])
    habitats_texto = ", ".join(habitats) if habitats else "Especial / Desconocido"
    
    # URLs de la wiki en GitHub Pages
    wiki_url = f"https://jabos.github.io/clicker-chickens-wiki/#chicken-{id_pollo}"
    imagen_url = f"https://jabos.github.io/clicker-chickens-wiki/{pollo.get('sprite', f'images/chickens/{id_pollo}.png')}"

    # Color del Embed: Dorado si es shiny, azul/verde si es normal
    color_embed = 0xFFD700 if es_shiny else 0x3498DB

    # Armado del Embed de Discord
    embed = {
        "title": f"🐔 Pollo Diario: {nombre} (#{id_pollo})" + (" ✨ [SHINY]" if es_shiny else ""),
        "url": wiki_url,
        "description": (
            f"¡La horda diaria ya está disponible!\n"
            f"{'✨ **¡ATENCIÓN: EL POLLO DE HOY ES SHINY!** ✨' if es_shiny else 'Derrota a la horda para reclamar tu recompensa.'}\n\n"
            f"🔗 [Ver ficha completa en la Wiki]({wiki_url})"
        ),
        "color": color_embed,
        "thumbnail": {
            "url": imagen_url
        },
        "fields": [
            {
                "name": "📊 Estadísticas Base",
                "value": (
                    f"❤️ **Vida:** {stats.get('life', 0)} | ⚔️ **Daño:** {stats.get('damage', 0)}\n"
                    f"🛡️ **Armadura:** {stats.get('armor', 0)} | ⚡ **Velocidad:** {stats.get('speed', 0)}"
                ),
                "inline": False
            },
            {
                "name": "🌍 Hábitat Salvaje",
                "value": habitats_texto,
                "inline": True
            }
        ],
        "footer": {
            "text": f"Clicker Chickens • Fecha: {fecha.day:02d}/{fecha.month:02d}/{fecha.year}"
        }
    }

    payload = {
        "content": "📢 **¡Ha cambiado el Pollo Diario en Clicker Chickens!**",
        "embeds": [embed]
    }

    res = requests.post(webhook_url, json=payload)
    if res.status_code in [200, 204]:
        print(f"¡Publicado exitosamente en Discord: {nombre} (#{id_pollo})!")
    else:
        print(f"Error {res.status_code} al enviar a Discord: {res.text}")

if __name__ == "__main__":
    enviar_a_discord()
