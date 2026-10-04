# DESINZI · ZERO HUMO — V47

## Objetivo
Corrección de coherencia entre aplicación, base de conocimiento, backend y actualización PWA.

## Cambios verificados
- Versión de aplicación: `0.47.0`.
- Backend: `1.0.0`.
- Base de conocimiento: `2026.10.04-014`.
- `data/knowledge.json` y `backend/data/payload.json` sincronizados exactamente.
- `backend/data/manifest.json` exige `minAppVersion: 0.47.0`.
- Service worker pasa a caché `v47`.
- Diagnóstico de aplicación corregido para validar `0.47.0`.
- QA comprueba versión del paquete/backend y coherencia de la base local.

## Regla de conocimiento
No se incrementa la versión de conocimiento por el mero hecho de publicar una nueva versión de la app. La base `2026.10.04-014` se conserva hasta disponer de evidencia verificable que justifique un cambio.

## Estado
Release candidate técnico. No equivale todavía a publicación en App Store o Google Play.
