# 🚀 Guía para Desplegar Backend en Render.com

## Paso 1: Crear Repositorio en GitHub (Opción A - Recomendada)

### 1.1 Crear nuevo repositorio SOLO para el backend

1. Ve a https://github.com/new
2. Nombre del repositorio: `voltia-backend`
3. Descripción: "Backend para formulario de contacto - Voltia"
4. Selecciona **Público** o **Privado**
5. **NO** marques "Add a README file"
6. Click en **Create repository**

### 1.2 Subir los archivos del backend

Abre una terminal en tu proyecto y ejecuta:

```bash
# Crear carpeta separada para el backend
mkdir voltia-backend
cd voltia-backend

# Copiar archivos necesarios
copy ..\server.js server.js
copy ..\package-backend.json package.json
copy ..\README-BACKEND.md README.md
copy ..\gitignore-backend .gitignore

# Inicializar git
git init
git add .
git commit -m "Initial commit - Voltia Backend"

# Conectar con GitHub (reemplaza TU_USUARIO por tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/voltia-backend.git
git branch -M main
git push -u origin main
```

---

## Paso 2: Desplegar en Render.com

### 2.1 Crear cuenta en Render

1. Ve a https://render.com
2. Click en **Get Started** o **Sign Up**
3. Regístrate con tu cuenta de GitHub (recomendado)
4. Autoriza a Render para acceder a tus repositorios

### 2.2 Crear nuevo Web Service

1. En el dashboard de Render, click en **New +** → **Web Service**
2. Conecta tu repositorio `voltia-backend`
   - Si no aparece, click en **Configure account** y da acceso al repositorio
3. Click en **Connect** junto a `voltia-backend`

### 2.3 Configurar el servicio

Completa los siguientes campos:

- **Name:** `voltia-backend` (o el nombre que prefieras)
- **Region:** Selecciona la más cercana (US East es buena opción)
- **Branch:** `main`
- **Root Directory:** (déjalo vacío)
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** Selecciona **Free** (gratis)

### 2.4 Variables de Entorno (Opcional)

No son necesarias porque la configuración está en el código, pero si quieres usar variables de entorno:

Click en **Advanced** → **Add Environment Variable**

```
PORT=3000
```

### 2.5 Desplegar

1. Click en **Create Web Service**
2. Render empezará a desplegar automáticamente
3. Espera 3-5 minutos mientras se despliega
4. Verás logs en tiempo real

### 2.6 Obtener la URL

Una vez desplegado, verás tu URL en la parte superior:

```
https://voltia-backend-XXXX.onrender.com
```

**¡Copia esta URL!** La necesitarás para configurar el frontend.

---

## Paso 3: Probar el Backend

Abre tu navegador y ve a:

```
https://voltia-backend-XXXX.onrender.com/api/test
```

Deberías ver:
```json
{"message":"Servidor backend funcionando correctamente"}
```

---

## Paso 4: Actualizar el Frontend

Edita el archivo `src/views/HomeView.vue` línea 319:

```javascript
const apiUrl = import.meta.env.DEV
  ? 'http://localhost:3000/api/send-email'
  : 'https://voltia-backend-XXXX.onrender.com/api/send-email'  // 👈 PEGA TU URL AQUÍ
```

---

## ⚠️ Importante sobre el Plan Gratuito de Render

El plan gratuito tiene una limitación:
- **El servidor se "duerme" después de 15 minutos de inactividad**
- La primera petición después de que se duerma tomará 30-60 segundos (mientras "despierta")
- Las siguientes peticiones serán rápidas

**Solución para producción:** Actualizar a un plan de pago ($7/mes) para que nunca se duerma.

Para el desarrollo y pruebas, el plan gratuito es suficiente.

---

## 🔄 Actualizar el Backend

Si haces cambios en `server.js`:

```bash
cd voltia-backend
# Hacer tus cambios en server.js
git add .
git commit -m "Actualización del backend"
git push
```

Render detectará el push y redesplegará automáticamente.

---

## 🆘 Solución de Problemas

### Error: "Build failed"
- Verifica que `package.json` tenga las dependencias correctas
- Revisa los logs de Render para ver el error específico

### Error: "Application failed to respond"
- Verifica que el puerto sea `process.env.PORT || 3000`
- Revisa los logs del servidor en Render

### El email no se envía
- Verifica que la contraseña SMTP sea correcta en `server.js`
- Revisa los logs del servidor para ver errores SMTP

---

## ✅ Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Archivos subidos al repositorio
- [ ] Cuenta creada en Render.com
- [ ] Web Service creado y desplegado
- [ ] URL de Render obtenida
- [ ] Endpoint `/api/test` funciona
- [ ] Frontend actualizado con la URL de producción
- [ ] Formulario probado y funcionando

---

**¿Necesitas ayuda?** Revisa los logs en Render para ver qué está pasando.
