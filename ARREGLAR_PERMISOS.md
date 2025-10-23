# 🔧 Arreglar Permisos de NPM

## ⚠️ Problema
Tu carpeta de caché de npm tiene archivos con permisos de root, lo que impide instalar paquetes.

## ✅ Solución (Ejecuta estos comandos)

### Opción 1: Arreglar permisos (RECOMENDADO)

Abre tu Terminal y ejecuta:

\`\`\`bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /Users/juanus/Desktop/loopera
\`\`\`

Te pedirá tu contraseña de macOS. Escríbela (no se verá mientras escribes, es normal).

Luego:

\`\`\`bash
cd /Users/juanus/Desktop/loopera
npm install
\`\`\`

---

### Opción 2: Usar un caché temporal (ALTERNATIVA)

Si la Opción 1 no funciona:

\`\`\`bash
cd /Users/juanus/Desktop/loopera
npm install --cache /tmp/npm-cache
\`\`\`

---

### Opción 3: Limpiar caché y reinstalar (SI LAS ANTERIORES FALLAN)

\`\`\`bash
sudo rm -rf ~/.npm
cd /Users/juanus/Desktop/loopera
npm install
\`\`\`

---

## 🎯 Después de Arreglar los Permisos

Una vez que `npm install` funcione, ejecuta:

\`\`\`bash
npm run dev
\`\`\`

Y abre: **http://localhost:3000**

---

## 📝 Notas

- Este es un problema común de npm en Mac
- Solo necesitas arreglarlo una vez
- Después de esto, todo funcionará normalmente
