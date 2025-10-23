# 🚀 Desplegar Loopera desde GitHub a Vercel

## ✅ El código ya está en GitHub
**Repositorio**: https://github.com/intelguy8000/loopera_web

---

## 📋 Pasos para Desplegar (5 minutos)

### 1️⃣ Ir a Vercel
Ve a: **https://vercel.com/new**

### 2️⃣ Conectar con GitHub
- Click en "Continue with GitHub"
- Autoriza a Vercel para acceder a tus repositorios

### 3️⃣ Importar el Repositorio
- Busca: `intelguy8000/loopera_web`
- Click en "Import"

### 4️⃣ Configurar el Proyecto
Vercel detectará automáticamente que es Next.js. Deja todo como está:
- **Framework Preset**: Next.js
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: (dejar en blanco)

### 5️⃣ Deploy
- Click en "Deploy"
- Espera 1-2 minutos
- ¡Listo! Tendrás una URL como: `https://loopera-web.vercel.app`

---

## 🌐 Conectar Dominio de GoDaddy

### En Vercel:
1. Ve a tu proyecto desplegado
2. Settings → Domains
3. Agrega tu dominio (ej: `loopera.co`)
4. Vercel te mostrará los DNS que necesitas configurar

### En GoDaddy:
1. Inicia sesión en GoDaddy
2. My Products → tu dominio → DNS
3. Agrega estos registros:

**Tipo A:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

**Tipo CNAME (para www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

4. Guarda y espera 5-30 minutos

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
cd /Users/juanus/Desktop/loopera
# Haz tus cambios
git add .
git commit -m "Descripción de tus cambios"
git push
```

Vercel desplegará automáticamente los cambios.

---

## ✅ Checklist Post-Deployment

- [ ] El sitio carga en la URL de Vercel
- [ ] Todas las secciones se ven bien
- [ ] El botón de WhatsApp funciona
- [ ] El sitio es responsive (prueba en móvil)
- [ ] El dominio personalizado funciona
- [ ] HTTPS está activo (candado verde)

---

## 🎯 URLs Importantes

- **Repositorio**: https://github.com/intelguy8000/loopera_web
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Documentación Vercel**: https://vercel.com/docs

---

¡Listo para desplegar! 🚀
