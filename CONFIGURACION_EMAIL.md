# Configuración del Sistema de Envío de Emails

## 📧 Configuración Completada

Se ha configurado el sistema de envío de emails utilizando tu servidor SMTP propio.

## 🔧 Pasos para Activar el Sistema

### 1. Configurar las Credenciales

Edita el archivo `.env` en la raíz del proyecto y **reemplaza** `TU_CONTRASEÑA_AQUI` con la contraseña real del email `info@voltiaelectricaldiagnostic.com`:

```env
SMTP_USER=info@voltiaelectricaldiagnostic.com
SMTP_PASS=TU_CONTRASEÑA_AQUI  👈 CAMBIAR ESTO
```

### 2. Iniciar el Servidor Backend

Abre una terminal y ejecuta:

```bash
npm run server
```

Deberías ver:
```
🚀 Servidor backend corriendo en http://localhost:3000
📧 SMTP configurado: mail.voltiaelectricaldiagnostic.com:465
✅ Servidor SMTP listo para enviar emails
```

### 3. Iniciar la Aplicación Vue (en otra terminal)

Abre una **segunda terminal** y ejecuta:

```bash
npm run dev
```

### 4. Probar el Formulario

1. Abre tu navegador en `http://localhost:5173` (o el puerto que indique Vite)
2. Ve a la sección de **Contacto** al final de la página
3. Completa el formulario con tus datos de prueba
4. Haz clic en "Enviar Mensaje"

Si todo está configurado correctamente:
- Verás un mensaje verde: "¡Mensaje enviado exitosamente!"
- Recibirás un email en `info@voltiaelectricaldiagnostic.com`

## 📁 Archivos Creados/Modificados

- ✅ `.env` - Variables de entorno con credenciales SMTP
- ✅ `server.js` - Servidor backend para enviar emails
- ✅ `src/views/HomeView.vue` - Formulario actualizado con funcionalidad
- ✅ `package.json` - Dependencias instaladas (express, nodemailer, cors, dotenv)

## 🔒 Configuración SMTP Actual

```
Host: mail.voltiaelectricaldiagnostic.com
Puerto: 465 (SSL/TLS)
Usuario: info@voltiaelectricaldiagnostic.com
Seguridad: SSL activado
```

## ⚠️ Importante para Producción

Cuando subas tu aplicación a producción:

1. **Nunca subas el archivo `.env` a GitHub** (ya está en .gitignore)
2. Cambia la URL del backend en `HomeView.vue` línea 316:
   ```javascript
   // Desarrollo
   const response = await fetch('http://localhost:3000/api/send-email', {...})

   // Producción
   const response = await fetch('https://tu-dominio.com/api/send-email', {...})
   ```
3. Despliega el servidor backend en tu hosting
4. Configura las variables de entorno en tu servidor de producción

## 🐛 Solución de Problemas

### Error: "SMTP connection failed"
- Verifica que la contraseña en `.env` sea correcta
- Verifica que el servidor SMTP esté funcionando
- Verifica que el puerto 465 no esté bloqueado por firewall

### Error: "CORS policy"
- Asegúrate de que ambos servidores estén corriendo (frontend y backend)
- El backend ya tiene CORS configurado

### El email no llega
- Revisa la consola del servidor backend para ver logs
- Verifica la carpeta de spam
- Asegúrate de que el dominio del email esté correctamente configurado

## 📞 Contacto

Si necesitas ayuda adicional, revisa los logs del servidor backend que mostrarán información detallada sobre cualquier error.
