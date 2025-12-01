# Voltia Backend - API de Envío de Emails

Backend para el formulario de contacto de Voltia Electrical Diagnostic.

## Tecnologías

- Node.js
- Express
- Nodemailer
- CORS

## Variables de Entorno

No se requieren variables de entorno. La configuración SMTP está en el código.

## Despliegue en Render

1. Subir este repositorio a GitHub
2. Conectar con Render.com
3. Desplegar como Web Service

## Endpoints

- `GET /api/test` - Verificar que el servidor funciona
- `POST /api/send-email` - Enviar email desde el formulario

## Puerto

El servidor escucha en el puerto definido por la variable de entorno `PORT` o 3000 por defecto.
