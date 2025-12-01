# Voltia Backend - Para Deploy en SiteGround

Este backend maneja el envío de emails desde el formulario de contacto usando el SMTP de SiteGround.

## 📋 Archivos Incluidos

- `server.js` - Servidor Express con endpoint para envío de emails
- `package.json` - Dependencias del proyecto
- `.env` - Configuración SMTP (NO SUBIR A GITHUB)

## 🚀 Instalación en SiteGround

### Opción 1: Si SiteGround soporta Node.js

1. **Subir archivos vía FTP/File Manager:**
   - Crear carpeta `api/` en `public_html/`
   - Subir `server.js`, `package.json`, `.env` a `public_html/api/`

2. **Conectar por SSH e instalar dependencias:**
   ```bash
   cd public_html/api
   npm install
   ```

3. **Configurar Node.js App en Site Tools:**
   - Application Root: `/home/tu-usuario/public_html/api`
   - Application URL: `voltiaelectricaldiagnostic.com/api`
   - Application Startup File: `server.js`
   - Variables de entorno: Copiar desde `.env`

### Opción 2: Deploy en Render.com (Recomendado si SiteGround no soporta Node.js)

1. **Crear repositorio Git:**
   ```bash
   git init
   git add server.js package.json
   # NO agregar .env al repositorio
   echo ".env" >> .gitignore
   echo "node_modules/" >> .gitignore
   git commit -m "Initial commit"
   ```

2. **Subir a GitHub:**
   - Crear nuevo repositorio en GitHub
   - Hacer push del código

3. **Deploy en Render.com:**
   - Ir a https://render.com
   - New → Web Service
   - Conectar repositorio GitHub
   - Configurar:
     - Name: voltia-backend
     - Environment: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Plan: Free

4. **Agregar variables de entorno en Render:**
   ```
   SMTP_HOST=mail.voltiaelectricaldiagnostic.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=web@voltiaelectricaldiagnostic.com
   SMTP_PASS=Voltia2025
   EMAIL_TO=info@voltiaelectricaldiagnostic.com
   EMAIL_FROM=web@voltiaelectricaldiagnostic.com
   ```

5. **Actualizar frontend:**
   - Modificar `src/views/HomeView.vue` línea 360
   - Cambiar la URL de producción por la de Render
   - Recompilar con `npm run build`
   - Subir nuevo `dist/` a SiteGround

## 🔧 Configuración SMTP

El backend usa el servidor SMTP de SiteGround:
- Host: mail.voltiaelectricaldiagnostic.com
- Port: 465 (SSL)
- User: web@voltiaelectricaldiagnostic.com
- Pass: Voltia2025

## ✅ Verificación

**Probar endpoint:**
```bash
curl -X POST https://tu-dominio.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","email":"test@test.com","mensaje":"Prueba"}'
```

## 🐛 Troubleshooting

- **Error 502/503:** Verificar que Node.js esté iniciado
- **Error CORS:** Verificar configuración de orígenes permitidos en server.js
- **Emails no llegan:** Verificar credenciales SMTP en variables de entorno

## 📞 Contacto

Para soporte técnico de SiteGround, contactar su servicio de atención al cliente.
