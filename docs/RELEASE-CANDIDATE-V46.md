# DESINZI · ZERO HUMO — V46

Fecha: 04/10/2026

## Objetivo
Endurecer la distribución como PWA instalable sin confundir la actualización del programa con la actualización del conocimiento científico/regulatorio.

## Cambios
- Versión de aplicación: `0.46.0`.
- Service worker propio (`sw.js`) para cachear el app shell y facilitar actualización automática de recursos de la PWA.
- `updateViaCache: none` y llamada a `registration.update()` al iniciar.
- El service worker **no decide ni modifica reglas regulatorias**.
- La base de conocimiento continúa actualizándose por separado mediante manifiesto, versión, esquema y SHA-256.
- Manifest de conocimiento exige `minAppVersion: 0.46.0`.
- Backend: `1.0.0`.
- Base de conocimiento mantenida en `2026.10.04-014`: no se declara una nueva versión de datos sin evidencia nueva verificada.

## Límites
La actualización automática de la PWA no equivale a publicación nativa en App Store/Google Play. Para iOS/Android nativos todavía será necesario el empaquetado y proceso de distribución correspondiente.
