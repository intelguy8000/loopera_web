# Instrucciones de Instalación - Loopera

## 🔧 Pasos para Instalar y Ejecutar

### 1. Arreglar permisos de npm (si hay error de permisos)

Si tienes problemas con permisos de npm, ejecuta:

\`\`\`bash
sudo chown -R $(whoami) ~/.npm
\`\`\`

### 2. Navegar al proyecto

\`\`\`bash
cd /Users/juanus/Desktop/loopera
\`\`\`

### 3. Instalar dependencias

\`\`\`bash
npm install
\`\`\`

### 4. Ejecutar en modo desarrollo

\`\`\`bash
npm run dev
\`\`\`

El sitio estará disponible en: **http://localhost:3000**

### 5. Build para producción

\`\`\`bash
npm run build
npm start
\`\`\`

---

## 🚀 Desplegar en Vercel (Recomendado)

### Opción 1: Desde la interfaz web de Vercel

1. Ve a [https://vercel.com](https://vercel.com)
2. Crea una cuenta (puedes usar GitHub)
3. Click en "Add New" > "Project"
4. Sube la carpeta del proyecto o conéctala a GitHub
5. Vercel detectará automáticamente que es Next.js
6. Click en "Deploy"

### Opción 2: Desde la línea de comandos

\`\`\`bash
# Instalar Vercel CLI
npm install -g vercel

# Iniciar sesión
vercel login

# Desplegar
cd /Users/juanus/Desktop/loopera
vercel
\`\`\`

---

## 📝 Conectar a GoDaddy

Después de desplegar en Vercel:

1. En Vercel, ve a tu proyecto > Settings > Domains
2. Agrega tu dominio de GoDaddy
3. Vercel te dará instrucciones de DNS
4. En GoDaddy, ve a DNS Management
5. Agrega los registros que Vercel te indique:
   - Tipo: A o CNAME
   - Host: @ o www
   - Value: el que te proporcione Vercel

---

## ✅ Verificación

Después de instalar, verifica que:
- [ ] El sitio carga en localhost:3000
- [ ] Todas las secciones se ven correctamente
- [ ] El botón de WhatsApp funciona
- [ ] La navegación entre secciones es suave
- [ ] El diseño es responsive (prueba en móvil)

---

## 🐛 Solución de Problemas

### Error: "Cannot find module"
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Error de permisos
\`\`\`bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /Users/juanus/Desktop/loopera
\`\`\`

### Puerto 3000 ocupado
\`\`\`bash
# Ejecutar en otro puerto
PORT=3001 npm run dev
\`\`\`

---

## 📞 Soporte

Si tienes problemas, contacta a tu partner técnico Juan.
