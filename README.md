# InnovVentas: Chatbot de E-commerce con Google Gemini

> Proyecto que implementa un asistente virtual de ventas para un e-commerce utilizando la tecnología de inteligencia artificial de Google Gemini y orquestado mediante Docker Compose.

---

## 🛠️ Requisitos del Sistema

* **Docker Desktop** (Debe estar abierto y en ejecución).
* **Node.js y npm** (Para el Frontend React/Vite).
* **Python 3.x** (Para el Backend Flask).
* **Clave API de Gemini** (Obtenida de Google AI Studio).

---

## Configuración del Entorno (Variables y Archivos)

Para que el proyecto funcione, debes configurar dos elementos críticos:

### 1. Clave API de Gemini

* Crea un archivo llamado **`.env`** dentro de la carpeta **`backend/`**.
* Añade la siguiente línea con tu clave:

    ```env
    GEMINI_API_KEY=TU_CLAVE_AQUI
    ```

### 2. Archivo de Métricas

* Crea un archivo vacío llamado **`metrics.csv`** dentro de la carpeta **`backend/`**. El sistema de Flask escribirá el historial de conversaciones aquí.

---

## 📦 Inicialización (Primera Vez)

Si no tienes las dependencias de los contenedores instaladas en tu máquina local:

1.  **Frontend (React/Vite):**
    ```bash
    npm install
    ```
2.  **Backend (Flask):**
    ```bash
    pip install flask flask-cors
    ```
3.  **Configuración de Tailwind CSS:**
    ```bash
    npm install -D tailwindcss@3.4.18 postcss autoprefixer
    npx tailwindcss init -p
    ```

---

## 🚀 Comandos de Ejecución

Utiliza los siguientes comandos en la raíz del proyecto para gestionar los contenedores:

### 1. Inicio y Reconstrucción Forzada
Este comando se usa la **primera vez** o cuando has hecho **cambios en un `Dockerfile`** o en `docker-compose.yml`.

```bash
docker-compose up --build
```

### 2. Inicio Rápido
Usa este comando para iniciar los contenedores rápidamente después de que ya han sido construidos.

```bash
docker-compose up
```

### 3. Apagado y Limpieza
Detiene y elimina los contenedores y la red para liberar recursos.

```bash
docker-compose down
```

## 🌐 Acceso a la Aplicación

Una vez que `docker-compose up` esté ejecutándose, accede a la aplicación en tu navegador.

### 🔗 Dirección del Frontend
**[http://localhost:5173/](http://localhost:5173/)**