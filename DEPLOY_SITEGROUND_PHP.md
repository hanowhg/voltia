# Guía de Deploy en SiteGround - Versión PHP (Simplificada)

## ✅ Archivos Listos para Subir

### 📦 Frontend (carpeta `dist/`)
Todo el contenido compilado del sitio web Vue.js

### 📧 Backend PHP (archivo individual)
- `send-email.php` - Script PHP para envío de emails

## 🚀 Pasos para Deploy en SiteGround

### Paso 1: Acceder a File Manager de SiteGround

1. Entra a **Site Tools** de SiteGround
2. Ve a **Site → File Manager**
3. Navega a la carpeta `public_html/`

### Paso 2: Subir el Frontend

1. **Sube TODO el contenido de la carpeta `dist/`** directamente a `public_html/`:
   - `index.html` → a `public_html/index.html`
   - Carpeta `assets/` → a `public_html/assets/`
   - Carpeta `images/` (si existe) → a `public_html/images/`

### Paso 3: Subir el Backend PHP

1. **Sube el archivo `send-email.php`** a `public_html/`:
   - `send-email.php` → a `public_html/send-email.php`

### Estructura Final en SiteGround

```
public_html/
├── index.html                    ← del dist/
├── send-email.php                ← script PHP de emails
├── assets/                       ← del dist/
│   ├── index-BkrTsPob.js
│   ├── index-kjgiNzvW.css
│   └── primeicons-* (varios archivos)
└── images/                       ← de tu carpeta public/ local
    └── instrumento.jpg, etc.
```

## ✅ Verificación

### 1. Verificar que el sitio carga:
```
https://voltiaelectricaldiagnostic.com
```
Deberías ver tu sitio web funcionando.

### 2. Probar el formulario de contacto:
1. Ve a la sección "Contacto" en tu sitio
2. Completa el formulario con tus datos
3. Click en "Enviar Mensaje"
4. Deberías ver el mensaje: "¡Mensaje enviado exitosamente!"
5. Verifica que llegó el email a `info@voltiaelectricaldiagnostic.com`

### 3. Probar el endpoint PHP directamente (opcional):
Puedes probar usando curl o Postman:

```bash
curl -X POST https://voltiaelectricaldiagnostic.com/send-email.php \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Prueba","email":"test@test.com","mensaje":"Mensaje de prueba"}'
```

Deberías recibir:
```json
{"success":true,"message":"Email enviado correctamente"}
```

## 🔧 Configuración de Email en SiteGround

El script PHP usa la función `mail()` de PHP que automáticamente se conecta al servidor SMTP de SiteGround. No necesitas configurar credenciales SMTP porque SiteGround lo maneja internamente.

**El email se enviará:**
- **Desde:** web@voltiaelectricaldiagnostic.com
- **Para:** info@voltiaelectricaldiagnostic.com

### ⚠️ IMPORTANTE: Configurar SPF/DKIM

Para que los emails no vayan a SPAM, asegúrate de tener configurado SPF y DKIM en SiteGround:

1. Ve a **Site Tools → Email → Authentication**
2. Activa **SPF** (Sender Policy Framework)
3. Activa **DKIM** (DomainKeys Identified Mail)

## 🐛 Troubleshooting

### El sitio no carga:
- Verifica que `index.html` esté en `public_html/`
- Verifica que la carpeta `assets/` esté completa
- Limpia el caché del navegador (Ctrl + F5)

### Formulario de contacto da error CORS:
- El script PHP ya tiene los headers CORS configurados
- Verifica que `send-email.php` esté en `public_html/`
- Verifica que el archivo no tenga errores de sintaxis

### Los emails no llegan:
1. **Revisa la carpeta de SPAM** de info@voltiaelectricaldiagnostic.com
2. **Verifica que el email exista:**
   - Ve a **Site Tools → Email → Accounts**
   - Verifica que exista `info@voltiaelectricaldiagnostic.com`
   - Verifica que exista `web@voltiaelectricaldiagnostic.com`
3. **Configura SPF/DKIM** (ver sección anterior)
4. **Revisa los logs de PHP:**
   - Site Tools → Site → Error Log
   - Busca errores relacionados con `mail()`

### Error 500 en send-email.php:
- Revisa **Site Tools → Site → Error Log**
- Verifica que el archivo tenga permisos correctos (644)
- Verifica que no tenga caracteres extraños o BOM al inicio

## 📋 Resumen de Archivos a Subir

| Archivo Local | Destino en SiteGround |
|---------------|----------------------|
| `dist/index.html` | `public_html/index.html` |
| `dist/assets/*` | `public_html/assets/*` |
| `public/images/*` | `public_html/images/*` |
| `send-email.php` | `public_html/send-email.php` |

## 🎉 ¡Listo!

Tu sitio web está ahora en producción con envío de emails funcionando mediante PHP.

**No necesitas:**
- ❌ Instalar Node.js
- ❌ Ejecutar npm install
- ❌ Configurar variables de entorno
- ❌ Usar servicios externos (Render, etc.)

**Todo funciona directamente en SiteGround con PHP.**

## 📞 Soporte

Si tienes problemas, contacta al soporte de SiteGround. Son muy eficientes y pueden ayudarte con cualquier configuración de emails o PHP.
