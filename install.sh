#!/bin/bash

echo "🚀 Instalando Loopera Website..."
echo ""

# Colores para el output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encontró package.json${NC}"
    echo "Por favor ejecuta este script desde la carpeta del proyecto"
    exit 1
fi

echo -e "${YELLOW}📦 Instalando dependencias de Node.js...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error al instalar dependencias${NC}"
    echo -e "${YELLOW}Intentando arreglar permisos...${NC}"
    sudo chown -R $(whoami) ~/.npm
    npm install
fi

echo ""
echo -e "${GREEN}✅ Dependencias instaladas correctamente${NC}"
echo ""

echo -e "${YELLOW}🔨 Compilando el proyecto...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error al compilar el proyecto${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Proyecto compilado exitosamente${NC}"
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}     ¡Instalación completada! 🎉${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}Para ejecutar el proyecto en modo desarrollo:${NC}"
echo "  npm run dev"
echo ""
echo -e "${YELLOW}El sitio estará disponible en:${NC}"
echo "  http://localhost:3000"
echo ""
echo -e "${YELLOW}Para crear una versión de producción:${NC}"
echo "  npm run build"
echo "  npm start"
echo ""
echo -e "${YELLOW}Para desplegar en Vercel:${NC}"
echo "  Lee el archivo DEPLOYMENT.md"
echo ""
