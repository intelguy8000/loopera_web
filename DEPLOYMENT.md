# Guía de Deployment - Loopera

## 🚀 Desplegar en Vercel (Recomendado - GRATIS)

Vercel es la plataforma oficial para Next.js y ofrece hosting gratuito.

### Paso 1: Crear cuenta en Vercel

1. Ve a [https://vercel.com/signup](https://vercel.com/signup)
2. Regístrate con GitHub, GitLab o email
3. Verifica tu email

### Paso 2: Preparar el proyecto

Asegúrate de que el proyecto esté listo:

\`\`\`bash
cd /Users/juanus/Desktop/loopera
npm install
npm run build
\`\`\`

Si todo funciona sin errores, estás listo para desplegar.

### Paso 3: Desplegar

#### Opción A: Desde la Web (MÁS FÁCIL)

1. Ve a [https://vercel.com/new](https://vercel.com/new)
2. Click en "Browse" o arrastra la carpeta \`loopera\`
3. Vercel automáticamente detectará Next.js
4. Click en "Deploy"
5. ¡Listo! En 1-2 minutos tendrás una URL como: \`https://loopera-xxx.vercel.app\`

#### Opción B: Desde GitHub (RECOMENDADO para actualizaciones futuras)

1. Crea un repositorio en GitHub
2. Sube el código:
   \`\`\`bash
   cd /Users/juanus/Desktop/loopera
   git init
   git add .
   git commit -m "Initial commit - Loopera website"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/loopera.git
   git push -u origin main
   \`\`\`
3. En Vercel, click en "Import Project"
4. Selecciona tu repositorio de GitHub
5. Vercel desplegará automáticamente
6. **Ventaja**: Cada vez que hagas \`git push\`, se actualizará automáticamente

#### Opción C: Desde CLI

\`\`\`bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Desplegar
cd /Users/juanus/Desktop/loopera
vercel --prod
\`\`\`

---

## 🌐 Conectar tu Dominio de GoDaddy

### En Vercel:

1. Ve a tu proyecto en Vercel
2. Click en "Settings" > "Domains"
3. Agrega tu dominio (ejemplo: \`loopera.co\`)
4. Vercel te mostrará los registros DNS necesarios

### En GoDaddy:

1. Inicia sesión en [GoDaddy](https://www.godaddy.com)
2. Ve a "My Products" > tu dominio > "DNS"
3. Agrega/edita estos registros:

   **Para dominio principal (loopera.co):**
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 600 seconds
   \`\`\`

   **Para www (www.loopera.co):**
   \`\`\`
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 600 seconds
   \`\`\`

4. Guarda los cambios
5. Espera 5-30 minutos para que se propaguen los DNS
6. En Vercel, verifica el dominio

---

## ⚡ Variables de Entorno (si las necesitas)

Si necesitas agregar variables de entorno:

1. En Vercel: Settings > Environment Variables
2. Agrega las variables necesarias
3. Redespliega el proyecto

---

## 🔄 Actualizar el Sitio

### Si usaste GitHub:
\`\`\`bash
# Haz cambios en tu código
# Luego:
git add .
git commit -m "Descripción de cambios"
git push
\`\`\`
Vercel desplegará automáticamente.

### Si usaste upload manual:
1. Haz tus cambios
2. Sube de nuevo la carpeta a Vercel
3. O usa \`vercel --prod\` desde CLI

---

## 📊 Monitoreo

Vercel te proporciona:
- ✅ Analytics (tráfico, visitantes)
- ✅ Logs en tiempo real
- ✅ Notificaciones de deployment
- ✅ HTTPS automático
- ✅ CDN global

---

## 🎯 Checklist Post-Deployment

- [ ] El sitio carga correctamente en la URL de Vercel
- [ ] Todas las imágenes se ven
- [ ] El botón de WhatsApp funciona
- [ ] Los links de navegación funcionan
- [ ] El sitio es responsive (móvil/tablet/desktop)
- [ ] El dominio personalizado está conectado
- [ ] El HTTPS está activo (candado verde)

---

## 🆘 Problemas Comunes

### "Build failed"
- Revisa los logs en Vercel
- Asegúrate de que \`npm run build\` funciona localmente

### "Domain not working"
- Espera más tiempo (DNS puede tardar hasta 48h)
- Verifica que los registros DNS estén correctos
- Usa [https://dnschecker.org](https://dnschecker.org) para verificar

### "Images not loading"
- Verifica que las imágenes estén en \`/public\`
- Verifica las rutas en el código

---

## 📞 Soporte

- Documentación Vercel: [https://vercel.com/docs](https://vercel.com/docs)
- Soporte Vercel: [https://vercel.com/support](https://vercel.com/support)

¡Tu sitio estará en línea en minutos! 🚀
