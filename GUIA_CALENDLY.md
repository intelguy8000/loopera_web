# 📅 Guía Paso a Paso: Integrar Calendly en Loopera Web

Esta guía te llevará paso a paso para integrar Calendly en tu sitio web de Loopera para permitir que los clientes agenden sesiones exploratorias directamente.

---

## 🎯 Objetivo

Permitir que los visitantes del sitio web agenden una "Sesión Exploratoria" de 30 minutos con Santiago Lopera directamente desde la página, sin necesidad de enviar WhatsApp.

---

## 📋 PASO 1: Crear cuenta en Calendly

### 1.1 Registro
1. Ve a https://calendly.com/
2. Click en "Sign Up" (Registrarse)
3. Opciones:
   - **Gratis**: Plan básico (suficiente para empezar)
   - **Profesional**: $12/mes (más funcionalidades)
4. Registrate con:
   - Email: `santiago.lopera@loopera.co`
   - Nombre: Santiago Lopera Mesa
   - Zona horaria: **America/Bogota (GMT-5)**

### 1.2 Completar perfil
1. Sube una foto profesional (la misma del sitio web)
2. Agrega biografía breve
3. Configura zona horaria correcta

**Resultado**: Tendrás tu cuenta de Calendly lista

---

## 📋 PASO 2: Crear el evento "Sesión Exploratoria"

### 2.1 Crear nuevo tipo de evento
1. En Calendly, click en "Create" → "Event Type"
2. Selecciona: **"One-on-One"** (reunión individual)
3. Configuración básica:

**Nombre del evento:**
```
Sesión Exploratoria - Loopera
```

**Duración:**
```
30 minutos
```

**Ubicación:**
- Opción recomendada: **Google Meet** (genera link automáticamente)
- Alternativa: **Zoom** o **Llamada telefónica**

**Descripción del evento:**
```
Hablemos sobre tu situación actual y cómo podemos trabajar juntos para llevar tu empresa al siguiente nivel.

En esta sesión de 30 minutos:
✓ Entenderemos tus retos actuales
✓ Identificaremos oportunidades de mejora
✓ Definiremos si Loopera es la mejor opción para ti
✓ Resolveremos tus dudas sobre nuestros servicios

¡Trae tus preguntas y hablemos sin compromiso!
```

### 2.2 Configurar disponibilidad

**Días disponibles:**
- Selecciona los días que Santiago puede atender (ej: Lunes a Viernes)

**Horario:**
- Ejemplo: 9:00 AM - 5:00 PM
- Ajusta según tu disponibilidad real

**Buffer time (tiempo entre reuniones):**
- Antes: 15 minutos
- Después: 15 minutos

**Tiempo mínimo para agendar:**
- 24 horas (evita agendas de último minuto)

### 2.3 Preguntas para el invitado

Agrega estas preguntas para conocer al cliente:

1. **Nombre de tu empresa** (obligatorio)
2. **¿En qué industria o sector opera tu empresa?** (obligatorio)
3. **¿Cuál es el principal reto que enfrentas actualmente?** (obligatorio, respuesta larga)
4. **¿Cómo te enteraste de Loopera?** (opcional)
   - Opciones: LinkedIn, WhatsApp, Recomendación, Búsqueda Google, Otro

### 2.4 Confirmación y recordatorios

**Email de confirmación:**
- ✅ Activado (se envía automáticamente)

**Recordatorios:**
- ✅ 1 día antes (email)
- ✅ 1 hora antes (email)

**Resultado**: Tienes tu evento configurado

---

## 📋 PASO 3: Obtener el link de Calendly

### 3.1 Copiar link público
1. En tu evento, click en "Copy Link"
2. El link se verá algo así:
   ```
   https://calendly.com/santiago-lopera/sesion-exploratoria
   ```
3. **Guarda este link**, lo necesitaremos para el código

### 3.2 Personalizar link (opcional)
1. Puedes personalizar tu URL en: Settings → My Link
2. Ejemplo: `calendly.com/loopera` o `calendly.com/santiago-lopera-loopera`

**Resultado**: Tienes el link que usaremos en el sitio web

---

## 📋 PASO 4: Integrar Calendly en el sitio web

Hay **2 opciones** para integrar Calendly:

### OPCIÓN A: Widget Popup (Recomendado)

El botón abre una ventana emergente con Calendly sin salir de tu sitio.

#### A.1 Código para agregar

Edita el archivo: `/Users/juanus/loopera_web/components/ContactoSection.tsx`

**Línea 1-2**, agregar import:
```tsx
'use client';

import { useEffect } from 'react';
```

**Después de la línea 3**, agregar el hook:
```tsx
export default function ContactoSection() {
  // Cargar script de Calendly
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    // ... resto del código
```

**Líneas 64-72** (botón CTA principal), reemplazar con:
```tsx
          {/* CTA Principal */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                // @ts-ignore
                if (window.Calendly) {
                  // @ts-ignore
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/TU-USUARIO/sesion-exploratoria'
                  });
                }
              }}
              className="inline-block bg-primary-red text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
            >
              Agenda tu Sesión Gratis
            </button>
          </div>
```

**IMPORTANTE**: Reemplaza `TU-USUARIO` con tu link real de Calendly.

#### A.2 Ventajas del Popup:
- ✅ Usuario no sale de tu sitio
- ✅ Experiencia más fluida
- ✅ Convierte mejor

---

### OPCIÓN B: Link Directo (Más simple)

El botón redirige directamente a Calendly en nueva pestaña.

#### B.1 Código para agregar

Edita el archivo: `/Users/juanus/loopera_web/components/ContactoSection.tsx`

**Líneas 64-72** (botón CTA principal), reemplazar con:
```tsx
          {/* CTA Principal */}
          <div className="mt-12 text-center">
            <a
              href="https://calendly.com/TU-USUARIO/sesion-exploratoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-red text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Agenda tu Sesión Gratis
            </a>
          </div>
```

**IMPORTANTE**: Reemplaza `TU-USUARIO` con tu link real de Calendly.

#### B.2 Ventajas del link directo:
- ✅ Más simple de implementar
- ✅ No requiere JavaScript adicional
- ✅ Funciona siempre

---

## 📋 PASO 5: Probar la integración

### 5.1 Build local
```bash
cd /Users/juanus/loopera_web
npm run dev
```

### 5.2 Abrir en navegador
```
http://localhost:3000
```

### 5.3 Pruebas
1. Ir a la sección de Contacto
2. Click en "Agenda tu Sesión Gratis"
3. **Opción A**: Debe abrir popup de Calendly
4. **Opción B**: Debe abrir nueva pestaña con Calendly
5. Intentar agendar una cita de prueba
6. Verificar que recibes el email de confirmación

### 5.4 Cancelar cita de prueba
- Ve a Calendly → Events
- Cancela la cita de prueba

**Resultado**: Calendly funcionando en tu sitio web

---

## 📋 PASO 6: Deploy a producción

### 6.1 Commit y push
```bash
git add .
git commit -m "Integrar Calendly para agendar sesiones exploratorias"
git push
```

### 6.2 Verificar en producción
1. Esperar 1-2 minutos para deploy de Vercel
2. Ir a: https://loopera-consultoria.vercel.app/
3. Probar botón de Calendly
4. ✅ Listo!

---

## 🎨 PERSONALIZACIONES ADICIONALES (Opcional)

### Personalizar colores de Calendly

En Calendly:
1. Settings → Appearance
2. **Primary Color**: `#EA2839` (rojo Loopera)
3. **Text Color**: `#2A2623` (negro Loopera)

### Agregar botón adicional en Hero Section

Edita `/Users/juanus/loopera_web/components/HeroSection.tsx`

Línea 29, cambiar el href:
```tsx
            <a
              onClick={() => {
                // @ts-ignore
                if (window.Calendly) {
                  // @ts-ignore
                  window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/TU-USUARIO/sesion-exploratoria'
                  });
                }
              }}
              className="bg-primary-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
            >
              Agendar Sesión Exploratoria
            </a>
```

---

## 📊 ANALÍTICAS DE CALENDLY

Una vez configurado, podrás ver en Calendly:

### Métricas disponibles:
- 📈 Número de sesiones agendadas
- 📅 Tasa de asistencia (cuántos realmente asisten)
- ⏰ Horarios más populares
- 📧 Datos de contacto de leads
- 💬 Respuestas a tus preguntas

### Dashboard:
- Ve a: Calendly → Analytics
- Exporta datos a Excel/CSV

---

## 🔄 FLUJO COMPLETO DEL USUARIO

1. **Usuario** visita loopera-consultoria.vercel.app
2. **Usuario** lee sobre los servicios
3. **Usuario** click en "Agenda tu Sesión Gratis"
4. **Calendly** abre (popup o nueva pestaña)
5. **Usuario** selecciona fecha y hora disponible
6. **Usuario** completa formulario:
   - Nombre
   - Email
   - Teléfono
   - Nombre de empresa
   - Sector
   - Reto principal
7. **Usuario** confirma la cita
8. **Calendly** envía emails de confirmación:
   - Al usuario
   - A santiago.lopera@loopera.co
9. **Calendly** crea evento en tu Google Calendar
10. **Calendly** envía recordatorios automáticos
11. **Día de la reunión**: Link de Google Meet en el email

---

## 💰 COSTOS DE CALENDLY

### Plan Gratis:
- ✅ 1 tipo de evento activo
- ✅ Integraciones básicas (Google Calendar, Zoom)
- ✅ Notificaciones por email
- ✅ **Suficiente para empezar**

### Plan Essentials ($12/mes):
- ✅ Eventos ilimitados
- ✅ Enviar recordatorios por SMS
- ✅ Quitar branding de Calendly
- ✅ Más integraciones

### Recomendación:
**Empieza con plan GRATIS**. Si recibes muchas sesiones, actualiza después.

---

## 🆘 TROUBLESHOOTING

### Problema: El popup no abre
**Solución**: Verifica que agregaste el script de Calendly en useEffect

### Problema: Me redirige a la página principal de Calendly
**Solución**: Verifica que la URL tenga tu usuario correcto

### Problema: No recibo emails de confirmación
**Solución**:
1. Verifica carpeta de spam
2. En Calendly → Settings → Notifications, verifica que estén activados

### Problema: Las citas se agendan en hora incorrecta
**Solución**:
1. En Calendly → Settings → My Link
2. Verifica "Time Zone" = America/Bogota (GMT-5)

---

## 📝 CHECKLIST FINAL

Antes de lanzar Calendly:

- [ ] Cuenta de Calendly creada
- [ ] Evento "Sesión Exploratoria" configurado
- [ ] Duración: 30 minutos
- [ ] Zona horaria: America/Bogota
- [ ] Disponibilidad configurada
- [ ] Preguntas agregadas
- [ ] Recordatorios activados
- [ ] Google Meet/Zoom configurado
- [ ] Link de Calendly copiado
- [ ] Código integrado en ContactoSection.tsx
- [ ] Probado localmente (npm run dev)
- [ ] Commit y push a GitHub
- [ ] Verificado en producción
- [ ] Cita de prueba exitosa
- [ ] Colores personalizados (opcional)

---

## 🎉 RESULTADO FINAL

Una vez completados todos los pasos:

✅ **Botón "Agenda tu Sesión Gratis"** funcionando
✅ **Clientes pueden agendar** sin salir de tu sitio (si usas popup)
✅ **Recibes notificaciones** automáticas
✅ **Calendario sincronizado** con Google Calendar
✅ **Recordatorios automáticos** enviados
✅ **Link de reunión** generado automáticamente
✅ **Datos de leads** capturados

---

## 📞 CONTACTO PARA DUDAS

Si tienes problemas técnicos con la integración:
- Revisar esta guía paso a paso
- Documentación oficial: https://help.calendly.com/
- Soporte de Calendly: dentro de tu cuenta

**Última actualización**: 25 de Octubre, 2025
**Autor**: Claude Code + Juan Andrés García
