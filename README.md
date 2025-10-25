# Loopera - Consultoría Estratégica

Sitio web profesional para Loopera, consultoría estratégica en finanzas, gestión y crecimiento empresarial.

**🌐 Sitio en producción**: https://loopera-consultoria.vercel.app/

**📊 Versión actual**: 1.1.0

---

## 🚀 Tecnologías

- **Next.js 15.0.3** - Framework React para producción
- **React 19.0.0** - Biblioteca UI
- **TypeScript 5** - Tipado estático para JavaScript
- **Tailwind CSS 3.4.1** - Framework de CSS utility-first
- **Lexend Deca** - Tipografía oficial de la marca

---

## 📋 Características

- ✅ Diseño 100% responsive (mobile, tablet, desktop)
- ✅ Optimizado para SEO con meta tags y Open Graph
- ✅ Botón flotante de WhatsApp con mensaje pre-cargado
- ✅ Navegación suave entre secciones (smooth scroll)
- ✅ Paleta de colores oficial de marca Loopera (5 colores PANTONE)
- ✅ Componentes modulares y reutilizables
- ✅ **Foto profesional de Santiago Lopera**
- ✅ **9 casos de éxito con logos reales de empresas**
- ✅ Deploy automático desde GitHub a Vercel
- ✅ Build sin errores (ESLint + TypeScript)

---

## 🎯 Secciones del Sitio

1. **Hero Section** - "Transformar caos en claridad"
2. **Sobre Mí** - Biografía y experiencia de Santiago
3. **Manifiesto** - Filosofía y 4 valores fundamentales
4. **Metodología** - LOOP (diagnóstico) + ERA (implementación)
5. **Servicios** - 4 áreas de consultoría
6. **Casos de Éxito** - 9 proyectos con logos reales
7. **¿Para Quién?** - 3 tipos de clientes objetivo
8. **Contacto** - Email, WhatsApp, LinkedIn

---

## 🎨 Branding

### Colores Principales
- **Rojo Loopera**: `#EA2839` (PANTONE 1788 C)
- **Negro**: `#2A2623` (PANTONE BLACK C)
- **Gris**: `#D5D2CA` (PANTONE WARM GRAY 2 C)
- **Azul**: `#0065BD` (PANTONE 300 C)
- **Crema**: `#E1D8B7` (PANTONE 7500 C)

### Tipografía
- **Principal**: Lexend Deca (Medium)
- **Secundaria**: Lexend Deca (Light)

### Uso en Tailwind
```tsx
className="bg-primary-red"       // Rojo Loopera
className="text-secondary-black" // Negro
className="bg-secondary-gray"    // Gris
className="font-lexend"          // Lexend Deca
```

---

## 🛠️ Instalación y Desarrollo

### Prerequisites
- **Node.js 18+** (requerido)
- npm o yarn
- Git

### 1. Clonar el repositorio

```bash
git clone https://github.com/intelguy8000/loopera_web.git
cd loopera_web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Build para producción

```bash
npm run build
npm start
```

### 5. Linting

```bash
npm run lint
```

---

## 📁 Estructura del Proyecto

```
loopera_web/
├── app/
│   ├── globals.css          # Estilos globales + Tailwind
│   ├── layout.tsx           # Layout raíz + SEO meta tags
│   └── page.tsx             # Página principal
├── components/
│   ├── Header.tsx           # Navegación fija
│   ├── Footer.tsx           # Pie de página
│   ├── WhatsAppButton.tsx   # Botón flotante WhatsApp
│   ├── HeroSection.tsx      # Hero + estadísticas
│   ├── SobreMiSection.tsx   # Sobre mí + foto
│   ├── ManifiestoSection.tsx # Filosofía y valores
│   ├── MetodologiaSection.tsx # LOOP + ERA
│   ├── ServiciosSection.tsx  # Lista de servicios
│   ├── CasosExitoSection.tsx # 9 casos + logos
│   ├── ParaQuienSection.tsx  # Target audience
│   └── ContactoSection.tsx   # Información contacto
├── public/
│   ├── fonts/               # Lexend Deca .ttf/.otf
│   ├── logos/
│   │   ├── LOOPERA_LOGOTIPO_*.png  # Logos de marca
│   │   └── casos-exito/     # 8 logos de empresas
│   └── santiago-lopera.jpg  # Foto de Santiago
├── tailwind.config.ts       # Configuración Tailwind + colores
├── tsconfig.json            # Configuración TypeScript
├── next.config.ts           # Configuración Next.js
├── package.json             # Dependencias y scripts
└── README.md                # Este archivo
```

---

## 🌐 Deployment

### Vercel (Actual)

El proyecto está configurado para deploy automático en Vercel:

1. **Push a GitHub** → Deploy automático en Vercel
2. **Build time**: ~1.5 segundos
3. **Deploy time**: 1-2 minutos
4. **URL**: https://loopera-consultoria.vercel.app/

#### Deploy manual desde Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Variables de entorno

Este proyecto **NO requiere** variables de entorno. Es 100% estático.

---

## 🔄 Flujo de Trabajo

### Para hacer cambios:

```bash
# 1. Editar archivos (componentes, textos, etc.)
# 2. Probar localmente
npm run dev

# 3. Build de prueba (opcional)
npm run build

# 4. Commit y push
git add .
git commit -m "Descripción de cambios"
git push

# 5. Vercel despliega automáticamente
```

### Para agregar un nuevo caso de éxito:

1. Guardar logo en `/public/logos/casos-exito/empresa.png`
2. Editar `components/CasosExitoSection.tsx`
3. Agregar objeto con empresa, logo y descripción
4. Commit y push

---

## 📚 Documentación Adicional

| Archivo | Descripción |
|---------|-------------|
| `ESTADO_DEL_PROYECTO.md` | Estado completo del proyecto |
| `CHANGELOG.md` | Historial de cambios |
| `PLAN_DE_TRABAJO.md` | Plan de trabajo y roadmap |
| `INSTALL.md` | Guía de instalación detallada |
| `DEPLOYMENT.md` | Guía de deployment |
| `INICIO_RAPIDO.md` | Quick start de 3 pasos |

---

## 📊 Casos de Éxito Incluidos

1. **De Lolita** - Cadena de cafés
2. **Alitas Colombianas** - Industria alimenticia
3. **Jotagro** - Productos veterinarios
4. **APS Supply** - Importadora
5. **Felicia** - Veterinarios a domicilio
6. **Smatch** - Gimnasio de alto rendimiento
7. **Masa Excavaciones** - Excavaciones
8. **Fukutex** - Industria textil
9. **El Güey Taquería** - Restaurante

*8 de 9 casos incluyen logos reales*

---

## 🐛 Reportar Issues

Si encuentras algún problema:

1. Verificar la documentación en `ESTADO_DEL_PROYECTO.md`
2. Revisar `CHANGELOG.md` para cambios recientes
3. Abrir issue en GitHub: https://github.com/intelguy8000/loopera_web/issues

---

## 📞 Contacto

**Santiago Lopera Mesa**
- **Email**: santiago.lopera@loopera.co
- **WhatsApp**: +57 (316) 288-8832
- **LinkedIn**: [Santiago Lopera Mesa](https://co.linkedin.com/in/santiagoloperamesa)

**Desarrollo Técnico**
- **Partner**: Juan Andrés García
- **GitHub**: https://github.com/intelguy8000/loopera_web

---

## 📈 Estado del Proyecto

**✅ Producción**: https://loopera-consultoria.vercel.app/

**✅ Build**: Pasando sin errores

**✅ Deploy**: Automático desde GitHub

**⏳ Pendientes**:
- Conectar dominio de GoDaddy
- Logo de Felicia (actualmente usa inicial)
- Favicon personalizado
- Open Graph image

---

## 🔄 Historial de Versiones

### v1.1.0 - 25 Oct 2025 (ACTUAL)
- Actualización de contenidos completa
- Foto profesional de Santiago
- 8 logos de empresas integrados
- 9 casos de éxito (3 nuevos)
- Cambio "Modalidades" → "Metodología"

### v1.0.0 - 23 Oct 2025
- Lanzamiento inicial
- Sitio completo con 8 secciones
- Deploy en Vercel

---

## 💰 Costos

| Servicio | Costo |
|----------|-------|
| Vercel Hosting | $0/mes (plan Hobby) |
| GitHub | $0 (repo público) |
| **TOTAL** | **$0/mes** |

---

## 📄 Licencia

© 2025 Loopera - Consultoría Estratégica. Todos los derechos reservados.

**Cliente**: Santiago Lopera Mesa
**Desarrollo**: Juan Andrés García + Claude Code
**Última actualización**: 25 de Octubre, 2025
