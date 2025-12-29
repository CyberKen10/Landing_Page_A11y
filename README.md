# Landing Page - A11i Detector

Una landing page moderna y accesible para "A11i Detector", una herramienta de accesibilidad web que ayuda a empresas y desarrolladores a cumplir con la Ley Europea de Accesibilidad y las pautas WCAG 2.1.

## 🎯 Respuestas a las Preguntas Principales

### ¿Qué es A11i Detector?
A11i Detector es una herramienta inteligente que actúa como un experto en accesibilidad web para:
- **Descubrir automáticamente** problemas de accesibilidad en sitios web
- **Reportar detalladamente** las violaciones encontradas
- **Cumplir con normativas** como la Ley Europea de Accesibilidad (EAA) y WCAG 2.1
- **Generar reportes completos** con recomendaciones específicas para corrección

### ¿Para quién es?
A11i Detector está diseñado para:
- **Empresas y organizaciones** que necesitan cumplir con la Ley Europea de Accesibilidad
- **Desarrolladores web** que integran la accesibilidad desde las primeras etapas del desarrollo
- **Agencias y consultoras** que ofrecen servicios de accesibilidad web
- **Instituciones públicas** que deben cumplir con normativas obligatorias de accesibilidad

### Social Proof
- ✅ **500+ sitios auditados** con resultados comprobables
- ✅ **95% de precisión** en la detección de problemas
- ✅ **24 horas promedio** para completar análisis completos
- ✅ **100% cumplimiento WCAG** garantizado en correcciones implementadas

## 🚀 Características Principales

### Análisis Automatizado
- Escaneo completo del sitio web
- Detección automática de problemas según WCAG 2.1 nivel AA
- Cumplimiento con la norma técnica EN 301 549

### Reportes Detallados
- Informes completos con severidad y prioridad
- Recomendaciones específicas para corrección
- Guías paso a paso para implementar soluciones

### Corrección Guiada
- Soluciones prácticas y técnicas
- Integración en flujos de desarrollo continuo
- Soporte para corrección automática donde es posible

### Beneficios Empresariales
- Cumplimiento legal con la Ley Europea de Accesibilidad
- Mejora de la experiencia de usuario para todos
- Ampliación del alcance de mercado
- Reducción de riesgos legales

## 🎨 Diseño y Estética

Esta landing page sigue el mismo estilo y estética que la página de referencia (https://accesibilidadweb.a11ysolutions.com/), caracterizada por:

- **Colores corporativos**: Azul profesional (#0066cc) como color principal
- **Tipografía moderna**: Inter font para una apariencia limpia y profesional
- **Diseño responsive**: Optimizado para desktop, tablet y móvil
- **Accesibilidad integrada**: Cumple con WCAG 2.1 en su propio diseño
- **Componentes consistentes**: Cards, botones y formularios uniformes

## 📁 Estructura del Proyecto

```
landing-page-eldetector/
├── index.html                    # Página principal
├── package.json                  # Configuración del proyecto
├── .gitignore                    # Archivos a ignorar en Git
├── assets/                       # Recursos estáticos
│   ├── images/                   # Imágenes (logos, fotos)
│   ├── icons/                    # Iconos SVG
│   └── fonts/                    # Fuentes personalizadas
├── src/                          # Código fuente
│   ├── css/                      # Estilos CSS modulares
│   │   ├── main.css             # Archivo principal que importa todos los estilos
│   │   ├── base/                # Estilos base y utilidades
│   │   │   ├── variables.css    # Variables CSS y paleta de colores
│   │   │   ├── base.css         # Reset y estilos base
│   │   │   └── responsive.css   # Estilos responsivos
│   │   ├── components/          # Estilos de componentes reutilizables
│   │   │   ├── header.css       # Estilos del header
│   │   │   ├── buttons.css      # Estilos de botones
│   │   │   ├── forms.css        # Estilos de formularios
│   │   │   └── cards.css        # Estilos de tarjetas
│   │   └── sections/            # Estilos de secciones específicas
│   │       ├── hero.css         # Estilos de la sección hero
│   │       ├── features.css     # Estilos de características
│   │       ├── contact.css      # Estilos de contacto
│   │       └── footer.css       # Estilos del footer
│   └── js/                      # JavaScript modular
│       ├── main.js              # Archivo principal que inicializa la aplicación
│       ├── modules/             # Módulos de funcionalidad
│       │   ├── form.js          # Manejo de formularios
│       │   └── language.js      # Selector de idioma
│       └── utils/               # Utilidades
│           └── helpers.js       # Funciones de utilidad
├── components/                   # Componentes HTML reutilizables (futuro)
└── README.md                     # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Arquitectura modular con CSS Grid y Flexbox
- **JavaScript (ES6+ Modules)** - Arquitectura modular con clases y módulos
- **SVG** - Gráficos vectoriales escalables
- **Google Fonts** - Tipografía Inter
- **Node.js/npm** - Gestión de dependencias y scripts

## 🏗️ Arquitectura Modular

Esta landing page utiliza una arquitectura modular moderna que facilita el mantenimiento y escalabilidad:

### CSS Modular
- **Variables centralizadas** en `src/css/base/variables.css`
- **Componentes reutilizables** organizados por funcionalidad
- **Estilos por sección** para mejor mantenibilidad
- **Responsive design** centralizado

### JavaScript Modular (ES6 Modules)
- **Clases organizadas** por funcionalidad específica
- **Separación de responsabilidades** (formulario, idioma, utilidades)
- **Inicialización centralizada** en `main.js`
- **Fácil de extender** con nuevos módulos

### Assets Organizados
- **Imágenes** en `assets/images/`
- **Iconos** en `assets/icons/`
- **Fuentes** en `assets/fonts/` (para futuras ampliaciones)

## 🌟 Funcionalidades Implementadas

### Navegación y Accesibilidad
- Skip links para navegación por teclado
- Selector de idioma (preparado para internacionalización)
- Diseño completamente responsive

### Formulario de Contacto
- Validación en tiempo real
- Campos obligatorios marcados
- Mensajes de éxito/error
- Prevención de envío con datos inválidos

### Interactividad
- Hover effects en cards
- Transiciones suaves
- Validación de formulario dinámica

## 🚀 Cómo Usar

### Desarrollo Local

1. **Instala dependencias** (opcional, para desarrollo):
   ```bash
   npm install
   ```

2. **Inicia servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **O simplemente abre `index.html`** en tu navegador web

### Personalización

**Archivos principales a modificar:**
- `index.html` - Contenido y estructura
- `src/css/base/variables.css` - Colores y variables
- `src/css/components/` - Estilos de componentes específicos
- `src/js/modules/` - Funcionalidad JavaScript

**Assets:**
- Imágenes: `assets/images/`
- Iconos: `assets/icons/`
- Fuentes: `assets/fonts/`

## 📝 Personalización

### Cambiar Colores
Edita las variables CSS en `src/css/base/variables.css`:

```css
:root {
    --primary-color: #tu-color;
    --primary-dark: #tu-color-oscuro;
    --accent-color: #tu-color-destacado;
}
```

### Actualizar Contenido
- **Logo**: Reemplaza archivos en `assets/images/`
- **Iconos**: Actualiza archivos en `assets/icons/`
- **Textos**: Edita el contenido en `index.html`
- **Formulario**: Modifica en `src/js/modules/form.js`
- **Social proof**: Actualiza estadísticas y testimonios en `index.html`

### Agregar Funcionalidades
- **Analytics**: Integra Google Analytics en `script.js`
- **Backend**: Conecta el formulario a tu sistema de gestión
- **Internacionalización**: Implementa múltiples idiomas
- **CMS**: Integra con un sistema de gestión de contenido

## 📱 Responsive Design

La landing page está optimizada para:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Móvil**: < 768px

Utiliza CSS Grid y Flexbox para layouts adaptativos.

## ♿ Accesibilidad Web

El diseño cumple con WCAG 2.1 nivel AA:
- Contraste de color adecuado
- Navegación por teclado completa
- Texto alternativo en imágenes
- Estructura semántica HTML5
- Formularios accesibles
- Skip links para navegación

## 🔧 Desarrollo y Mantenimiento

### Requisitos
- Navegador web moderno con soporte ES6 Modules
- Node.js y npm (opcional, para desarrollo)
- Editor de código (recomendado: VS Code, Cursor)
- Conocimientos de HTML, CSS y JavaScript moderno

### Ventajas de la Arquitectura Modular

- **Mantenibilidad**: Código organizado por funcionalidad
- **Escalabilidad**: Fácil agregar nuevas características
- **Reutilización**: Componentes modulares reutilizables
- **Colaboración**: Múltiples desarrolladores pueden trabajar en paralelo
- **Rendimiento**: Carga optimizada con módulos ES6

### Próximos Pasos Recomendados
1. **Integración con backend** para el formulario de contacto
2. **Sistema de build** (Webpack/Vite) para optimización
3. **Sistema de analytics** para seguimiento de conversiones
4. **SEO optimization** con meta tags y structured data
5. **Internacionalización completa** aprovechando la estructura modular
6. **A/B testing** para optimización de conversiones
7. **Integración con CMS** para gestión de contenido

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.

## 🤝 Contribución

Si encuentras errores o tienes sugerencias de mejora:
1. Crea un issue en el repositorio
2. Envía un pull request con tus cambios
3. Asegúrate de que el código siga las mejores prácticas de accesibilidad

## 📞 Contacto

Para más información sobre A11i Detector o esta landing page:
- Email: contact@eldetector.com
- Web: https://eldetector.com

---

## 🚀 Despliegue en GitHub Pages

Esta landing page está **100% compatible** con GitHub Pages. Sigue estos pasos para publicarla:

### 📋 Pasos para Desplegar:

1. **Crear repositorio en GitHub**
   - Ve a [github.com](https://github.com) y crea un nuevo repositorio
   - Nombre sugerido: `landing-page-a11y` o `a11i-detector-landing`

2. **Subir el código**
   ```bash
   # En tu terminal, dentro de la carpeta del proyecto:
   git init
   git add .
   git commit -m "Initial commit - A11i Detector Landing Page"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
   git push -u origin main
   ```

3. **Activar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** (engranaje)
   - Baja hasta **Pages** en el menú lateral
   - En **Source** selecciona **Deploy from a branch**
   - En **Branch** selecciona **main** y carpeta **/(root)**
   - Click **Save**

4. **¡Listo!** Tu sitio estará disponible en:
   ```
   https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/
   ```

### ✅ Compatibilidad con GitHub Pages

- ✅ **Archivos estáticos** (HTML, CSS, JS)
- ✅ **Paths relativos** funcionando
- ✅ **Google Fonts** integrado
- ✅ **Imágenes locales** incluidas
- ✅ **JavaScript moderno** compatible
- ✅ **Sin dependencias de servidor**

### 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables, Flexbox, CSS Grid, responsive design
- **JavaScript (ES6+)**: DOM manipulation, event listeners, class-based modules
- **Accesibilidad**: Skip links, ARIA attributes, screen reader compatibility, keyboard navigation, focus states, contrast

---

*Esta landing page fue creada siguiendo las mejores prácticas de desarrollo web moderno y accesibilidad, inspirada en el diseño de a11y Solutions.*
