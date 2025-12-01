# Instrucciones de Uso - Proyecto ENEL

## Estado del Proyecto

✅ Proyecto creado y configurado exitosamente en: `C:\Users\hanowh\Documents\Voltia\enel`

✅ Servidor de desarrollo ejecutándose en: **http://localhost:5175**

✅ Diseño adaptado al estilo de enser.cl con colores profesionales de ingeniería eléctrica

## Tecnologías Implementadas

### Lenguajes
- ✅ JavaScript/ES6+ - Lenguaje principal del frontend
- ✅ HTML5 - Estructura de templates
- ✅ CSS3/SCSS - Estilos y preprocesador
- ✅ JSON - Configuración y datos

### Framework y Build Tools
- ✅ Vue 3 (v3.5.24) - Framework frontend con Composition API
- ✅ Vite (v7.2.4) - Build tool y dev server con HMR

### UI y Estilos
- ✅ PrimeVue (v4.3.4) - Biblioteca de componentes UI con tema Aura
- ✅ Tailwind CSS (v3.4.6) - Framework CSS utility-first
- ✅ PrimeIcons - Sistema de iconos integrado
- ✅ Sass (v1.94.2) - Preprocesador CSS

## Diseño Implementado (Estilo enser.cl)

El proyecto implementa un diseño profesional inspirado en enser.cl con las siguientes características:

### Componentes Principales

#### 1. **Header (HeaderComponent.vue)**
- Navegación sticky (fija al hacer scroll)
- Logo de empresa
- Menú de navegación desktop/mobile responsive
- Botón CTA "Contactar"
- Menú hamburguesa para móviles

#### 2. **Footer (FooterComponent.vue)**
- Información de la empresa
- Enlaces rápidos
- Datos de contacto (dirección, teléfono, email)
- Copyright dinámico

#### 3. **Home View (HomeView.vue)**

**Sección Hero:**
- Banner con gradiente azul
- Título principal destacado
- Subtítulo descriptivo
- Botón de llamada a la acción

**Sección Empresa:**
- Grid de 2 columnas (texto + imagen placeholder)
- Estadísticas destacadas (años, proyectos, satisfacción)
- Descripción de la empresa

**Sección Valores:**
- Grid de 3 columnas
- Tarjetas con iconos para Visión, Misión y Valores
- Hover effects

**Sección Servicios:**
- Grid responsive (1/2/3 columnas según pantalla)
- 6 servicios predefinidos:
  - Ingeniería Eléctrica
  - Consultoría Técnica
  - Mantenimiento
  - Certificaciones
  - Automatización
  - Eficiencia Energética
- Tarjetas con hover effects

**Sección Contacto:**
- 2 columnas (información + formulario)
- Información de contacto con iconos
- Formulario de contacto funcional

### Estilos y Tema

**Colores:**
- Primario: Tonos de azul (#0284c7 - #0c4a6e)
- Fondo: Blanco y gris claro
- Textos: Grises oscuros para contraste

**Tipografía:**
- Fuente: Inter (sistema sans-serif como fallback)
- Jerarquía clara de títulos

**Responsive:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Menú hamburguesa en móviles

## Comandos Disponibles

```bash
# Desarrollo (ya está corriendo)
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview
```

## Próximos Pasos Sugeridos

### 1. Personalización de Contenido
- Editar textos en `src/views/HomeView.vue`
- Actualizar información de contacto en `HeaderComponent.vue` y `FooterComponent.vue`
- Añadir logo de la empresa

### 2. Imágenes y Assets
- Reemplazar placeholders de imágenes
- Añadir imágenes en `public/` o `src/assets/`
- Optimizar imágenes para web

### 3. Funcionalidad del Formulario
- Implementar backend para envío de emails
- Añadir validación de formularios con bibliotecas como Vuelidate
- Integrar con servicios como EmailJS o SendGrid

### 4. Routing (Opcional)
Si necesitas múltiples páginas:
```bash
npm install vue-router@4
```

### 5. Animaciones
Para mejorar la experiencia visual:
```bash
npm install @vueuse/motion
```

### 6. SEO
- Añadir meta tags en `index.html`
- Implementar vue-meta o useHead para gestión de SEO
- Generar sitemap

### 7. Analytics
- Integrar Google Analytics o similar
- Añadir tracking de eventos

## Estructura de Archivos Clave

```
src/
├── assets/
│   └── main.scss          # Estilos globales + Tailwind + PrimeVue
├── components/
│   ├── HeaderComponent.vue # Navegación superior
│   └── FooterComponent.vue # Pie de página
├── layouts/
│   └── MainLayout.vue      # Layout principal (Header + Content + Footer)
├── views/
│   └── HomeView.vue        # Página principal
├── App.vue                 # Componente raíz
└── main.js                 # Configuración de Vue y PrimeVue
```

## Personalizar Colores

Editar `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Modificar estos valores para cambiar el tema
        500: '#TU_COLOR',
        600: '#TU_COLOR_OSCURO',
        // etc...
      }
    }
  }
}
```

## Soporte y Ayuda

- [Documentación Vue 3](https://vuejs.org/)
- [Documentación Vite](https://vitejs.dev/)
- [Documentación PrimeVue](https://primevue.org/)
- [Documentación Tailwind CSS](https://tailwindcss.com/)

## Notas Importantes

- El servidor de desarrollo está corriendo en el puerto 5174 (el 5173 estaba ocupado)
- Todos los cambios en archivos `.vue`, `.js`, `.scss` se actualizan automáticamente (HMR)
- Para producción, ejecutar `npm run build` genera archivos optimizados en `/dist`
