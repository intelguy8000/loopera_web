# Changelog

Historial completo de cambios del proyecto Loopera Web.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

---

## [1.1.0] - 2025-10-25

### ✨ Agregado
- **Foto profesional de Santiago Lopera** en sección "Sobre Mí"
  - Imagen en blanco y negro de alta calidad
  - Optimizada con Next.js Image component
  - Ubicación: `/public/santiago-lopera.jpg`

- **8 logos de empresas en Casos de Éxito**
  - De Lolita (cafés)
  - Alitas Colombianas (alimentos)
  - Jotagro (productos veterinarios)
  - APS Supply (importadora)
  - Smatch (gimnasio)
  - Masa Excavaciones (excavaciones)
  - Fukutex (textil)
  - El Güey Taquería (restaurante)
  - Ubicación: `/public/logos/casos-exito/`

- **3 nuevos casos de éxito**
  - Masa Excavaciones
  - Fukutex
  - El Güey Taquería
  - Total: 9 casos (antes 6)

### 🔄 Cambiado
- **Hero Section - Estadísticas actualizadas**
  - "17+ años" → "+20 años de experiencia"
  - "6 países en Latinoamérica" → "🇨🇴 Enfoque en Colombia"
  - "+50 empresas transformadas" → "∞ Múltiples empresas"

- **"Modalidades" → "Metodología"**
  - Título de sección actualizado
  - Componente renombrado: `ModalidadesSection.tsx` → `MetodologiaSection.tsx`
  - ID de navegación actualizado: `#modalidades` → `#metodologia`
  - Actualizadas todas las referencias en el proyecto

- **Texto de sección LOOP**
  - Corrección de puntuación: `"qué" que` → `"qué": que`
  - Texto completo: "Diagnóstico inicial. Identificamos dolores, entendemos el contexto real de la empresa y definimos el 'qué': que debemos mejorar, qué procesos fortalecer, qué productos potenciar."

- **Sección Para Quién - Emprendimientos en Crecimiento**
  - Texto anterior: "Negocios que han nacido con mucho músculo..."
  - Texto actualizado: "Negocios que han nacido con mucho esfuerzo, pero necesitan ordenar sus finanzas, entender sus números y estructurar procesos que les permita escalar sin perder el control ni la esencia."

- **Todos los 9 casos de éxito reescritos**
  - Descripciones más detalladas y específicas
  - Enfoque en resultados concretos y transformaciones
  - Narrativa en primera persona de Santiago
  - Eliminado campo "sector"

- **Diseño de Casos de Éxito**
  - Reemplazados círculos rojos con iniciales por logos reales
  - Área de logo con altura fija (80px) y ancho variable
  - Hover effect mejorado (scale transform)
  - Fallback elegante para empresas sin logo (Felicia mantiene inicial)

### 🐛 Corregido
- Ortografía y puntuación en múltiples secciones
- Formato de textos largos en casos de éxito
- Optimización de imágenes para web

### 📝 Documentación
- Actualizado `ESTADO_DEL_PROYECTO.md` a versión 1.1.0
- Creado `CHANGELOG.md` (este archivo)
- Actualizada estructura del proyecto en documentación
- Agregadas instrucciones para gestión de logos

### 🚀 Deployments
- Deployment 1: Actualización de contenidos (commit a5f9c23)
- Deployment 2: Foto profesional de Santiago (commit f7c5f37)
- Deployment 3: Logos de empresas (commit 76f5bb0)

### 📊 Archivos modificados
- `components/HeroSection.tsx` - Estadísticas
- `components/ModalidadesSection.tsx` → `components/MetodologiaSection.tsx` - Renombrado y corregido
- `components/ParaQuienSection.tsx` - Texto Emprendimientos
- `components/CasosExitoSection.tsx` - 9 casos + logos
- `components/SobreMiSection.tsx` - Foto de Santiago
- `app/page.tsx` - Actualización de imports
- `public/santiago-lopera.jpg` - Nueva foto
- `public/logos/casos-exito/*.{jpg,png}` - 8 logos nuevos

---

## [1.0.0] - 2025-10-23

### ✨ Lanzamiento Inicial
- Sitio web completo desplegado en producción
- 8 secciones principales implementadas:
  1. Hero Section
  2. Sobre Mí
  3. Manifiesto
  4. Modalidades de Trabajo
  5. Servicios
  6. Casos de Éxito (6 casos)
  7. Para Quién
  8. Contacto

### 🎨 Diseño y Marca
- Configuración completa de colores Loopera
- Tipografía Lexend Deca integrada
- Diseño 100% responsive
- 8 variaciones de logos oficiales
- Paleta de 5 colores PANTONE

### ⚙️ Infraestructura
- Next.js 15.0.3 + React 19 + TypeScript 5
- Tailwind CSS 3.4.1 para estilos
- Deploy automático en Vercel
- Repositorio GitHub configurado
- HTTPS habilitado
- CDN global activo

### 📱 Funcionalidades
- Navegación smooth scroll
- Botón flotante de WhatsApp
- Menú móvil responsive
- Integración con redes sociales
- SEO básico implementado

### 📝 Documentación Inicial
- README.md
- PLAN_DE_TRABAJO.md
- ESTADO_DEL_PROYECTO.md
- INSTALL.md
- DEPLOYMENT.md
- DEPLOY_DESDE_GITHUB.md
- DESPLEGAR_AHORA.md
- INICIO_RAPIDO.md
- ARREGLAR_PERMISOS.md

### ✅ Build
- Primera build exitosa
- Todos los errores de ESLint corregidos
- Optimizaciones de Next.js aplicadas

---

## Leyenda

### Tipos de Cambios
- `✨ Agregado` - Nuevas funcionalidades o contenido
- `🔄 Cambiado` - Cambios en funcionalidades existentes
- `🗑️ Eliminado` - Funcionalidades o archivos eliminados
- `🐛 Corregido` - Corrección de bugs
- `📝 Documentación` - Cambios solo en documentación
- `🚀 Deployments` - Deployments a producción
- `⚙️ Infraestructura` - Cambios en configuración o herramientas
- `📊 Archivos modificados` - Lista de archivos cambiados

---

## Próximas Versiones

### [1.2.0] - Planeado
**Funcionalidades propuestas:**
- [ ] Conectar dominio personalizado de GoDaddy
- [ ] Agregar logo de Felicia
- [ ] Favicon personalizado de Loopera
- [ ] Open Graph image para redes sociales
- [ ] Integración de Calendly (opcional)
- [ ] Google Analytics 4 (opcional)

**Mejoras propuestas:**
- [ ] Testimonios de clientes
- [ ] Blog/noticias (opcional)
- [ ] Formulario de contacto con envío de email
- [ ] Animaciones adicionales en scroll

---

## Versionado

Este proyecto sigue [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Cambios incompatibles con versiones anteriores
- **MINOR** (1.X.0): Nueva funcionalidad compatible con versiones anteriores
- **PATCH** (1.1.X): Correcciones de bugs compatibles

---

## Mantenimiento

**Actualizado por**: Claude Code + Juan Andrés García
**Última revisión**: 25 de Octubre, 2025
**Contacto**: Para dudas sobre cambios, revisar commits en GitHub
