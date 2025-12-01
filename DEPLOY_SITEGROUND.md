# Guía de Deploy en SiteGround

## 📋 Requisitos Previos

- Acceso al panel de control de SiteGround (cPanel o Site Tools)
- Acceso FTP o File Manager
- Node.js habilitado en tu hosting (verificar con soporte de SiteGround)
- Dominio: voltiaelectricaldiagnostic.com configurado

## 🎯 Estructura del Deploy

Tu sitio tiene dos partes:
1. **Frontend (Vue.js)** - Archivos estáticos compilados
2. **Backend (Node.js)** - Servidor API para envío de emails

## 📦 Parte 1: Deploy del Frontend

### Paso 1: Los archivos ya están compilados en la carpeta `dist/`

```
dist/
├── index.html
├── assets/
│   ├── index-BoBZa5T0.js
│   ├── index-kjgiNzvW.css
│   ├── primeicons-* (varios archivos de fuentes)
```

### Paso 2: Subir archivos del Frontend a SiteGround

1. **Accede al File Manager de SiteGround:**
   - Entra a Site Tools → File Manager
   - Navega a `public_html/` (o la carpeta raíz de tu dominio)

2. **Sube TODO el contenido de la carpeta `dist/`:**
   - Sube `index.html` directamente a `public_html/`
   - Sube la carpeta `assets/` completa a `public_html/assets/`
   - Sube la carpeta `images/` (si existe en `public/`) a `public_html/images/`

3. **Estructura final en el servidor:**
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── *.js
   │   ├── *.css
   │   └── primeicons-*
   └── images/
       └── *.jpg, *.png
   ```

## 🚀 Parte 2: Deploy del Backend (Node.js API)

SiteGround soporta Node.js, pero debes habilitarlo primero.

### Opción A: Usar Node.js en SiteGround

1. **Verificar soporte Node.js:**
   - Contacta soporte de SiteGround para confirmar si tu plan incluye Node.js
   - Si está disponible, pide que te habiliten Node.js App en Site Tools

2. **Crear carpeta para el backend:**
   ```
   public_html/
   └── api/              ← Nueva carpeta para backend
       ├── server.js
       ├── package.json
       ├── .env
       └── node_modules/
   ```

3. **Subir archivos del backend:**
   - `server.js`
   - `package.json`
   - `.env`

4. **Instalar dependencias vía SSH:**
   ```bash
   cd public_html/api
   npm install
   ```

5. **Configurar Node.js App en Site Tools:**
   - Application Root: `/home/tu-usuario/public_html/api`
   - Application URL: `voltiaelectricaldiagnostic.com/api`
   - Application Startup File: `server.js`

### Opción B: Usar servicio externo para Backend (RECOMENDADO)

Si SiteGround no soporta Node.js en tu plan, usa un servicio gratuito:

**1. Deploy en Render.com (Gratis):**

```bash
# 1. Crear carpeta voltia-backend
mkdir voltia-backend
cd voltia-backend

# 2. Copiar archivos
- server.js
- package.json (renombrado de package-backend.json)
- .env
```

**2. Subir a GitHub:**
```bash
git init
git add .
git commit -m "Backend Voltia"
git push origin main
```

**3. Deploy en Render.com:**
- Ir a https://render.com
- New → Web Service
- Conectar repositorio GitHub
- Configurar:
  - Name: voltia-backend
  - Environment: Node
  - Build Command: `npm install`
  - Start Command: `node server.js`
  - Plan: Free

**4. Configurar variables de entorno en Render:**
```
SMTP_HOST=mail.voltiaelectricaldiagnostic.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=web@voltiaelectricaldiagnostic.com
SMTP_PASS=Voltia2025
EMAIL_TO=info@voltiaelectricaldiagnostic.com
EMAIL_FROM=web@voltiaelectricaldiagnostic.com
```

**5. Obtendrás una URL como:**
```
https://voltia-backend.onrender.com
```

## 🔧 Configuración Final

### Si usaste Render.com para el backend:

Necesitas actualizar el frontend para apuntar a la URL de Render:

**Archivo: `src/views/HomeView.vue` línea 360:**

```javascript
const apiUrl = import.meta.env.DEV
  ? 'http://localhost:3000/api/send-email'
  : 'https://voltia-backend.onrender.com/api/send-email'  // ← Cambiar aquí
```

Luego recompilar:
```bash
npm run build
```

Y volver a subir el contenido de `dist/` a SiteGround.

## ✅ Verificación

1. **Frontend:** Visita `https://voltiaelectricaldiagnostic.com` - Debería cargar el sitio
2. **Backend:** Prueba el formulario de contacto
3. **Email:** Verifica que lleguen emails a `info@voltiaelectricaldiagnostic.com`

## 🐛 Troubleshooting

### Frontend no carga:
- Verifica que `index.html` esté en `public_html/`
- Verifica que la carpeta `assets/` esté completa

### Formulario de contacto da error CORS:
- Verifica que el backend tenga configurado CORS correctamente
- Verifica que la URL del backend en `HomeView.vue` sea correcta

### Emails no llegan:
- Verifica las credenciales SMTP en `.env`
- Verifica que `web@voltiaelectricaldiagnostic.com` tenga permisos de envío
- Revisa la carpeta de spam

## 📝 Resumen de Archivos a Subir

**A SiteGround (Frontend):**
- Todo el contenido de `dist/` → `public_html/`

**A Render.com o SiteGround (Backend):**
- `server.js`
- `package.json`
- `.env`

## 🔐 Seguridad

**IMPORTANTE:** No subas el archivo `.env` a GitHub. Solo súbelo directamente al servidor o configúralo como variables de entorno en Render.com.

## 📞 Soporte

Si SiteGround no soporta Node.js, la opción de Render.com es 100% gratuita y funcional. El backend en Render seguirá usando el SMTP de SiteGround para enviar emails.
