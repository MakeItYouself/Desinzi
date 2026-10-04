# DESINZI · ZERO HUMO — Cierre técnico V55

Fecha de cierre: 2026-10-04

## Estado

Esta versión se considera **release candidate técnico final V55** del proyecto actual. La interfaz, la base de conocimiento, el contrato de API, la verificación criptográfica y los controles de QA están alineados.

## Comprobaciones realizadas

- App `0.55.0` y conocimiento `2026.10.04-016` coherentes.
- Identidad visual: negro, dorado, rosa palo/rosa dorado, plateado y blanco roto.
- Logo oficial del proyecto presente y sin lupa.
- API interna canónica `/v1/`, sin rutas locales `/api/`.
- Contrato API y backend comprobados automáticamente.
- SHA-256 y firma ECDSA P-256 verificados.
- Payload manipulado rechazado en QA.
- Esquema y versión del conocimiento comprobados antes de activar una actualización.
- Si una actualización no supera las verificaciones, se conserva la base anterior.
- Fuentes regulatorias, informativas y científicas permanecen diferenciadas.
- Open Beauty Facts se mantiene como fuente de datos de producto, no como autoridad regulatoria.
- OCR conservador: no inventar ingredientes y mantener revisión humana.
- Privacidad, propiedad intelectual y licencias están integradas en la aplicación y documentación.
- QA automatizada ejecutada correctamente.

## Lo que deliberadamente NO se marca como terminado

- Backend público de producción.
- Dominio y HTTPS de producción.
- Builds nativos firmados de iOS/Android.
- Pruebas en dispositivos físicos.
- Publicación en App Store o Google Play.
- Revisión jurídica profesional final de la versión comercial.

Estas tareas necesitan recursos o verificaciones externas y no se deben presentar como hechas sin evidencia.

## Criterio de cierre

No se incrementa la versión de aplicación solo para aparentar progreso. Las futuras modificaciones de conocimiento pueden incrementar la versión de datos independientemente de la app; una modificación funcional relevante de la aplicación requerirá una nueva versión de app.

## Endurecimiento móvil V55 — 2026-10-04

Se ha añadido una capa verificable de endurecimiento móvil sin declarar capacidades nativas no probadas:

- permisos de cámara y fallback seguro;
- liberación de cámara al ocultar/salir de la pantalla;
- adaptador opcional para futuro escáner nativo;
- `BarcodeDetector` con comprobación de formatos soportados;
- entrada manual siempre disponible;
- validación de imágenes OCR y límite de 12 MB;
- intento de recursos OCR locales antes del fallback CDN fijado;
- documentación explícita de que el OCR offline completo aún requiere empaquetado y prueba de los recursos locales;
- QA móvil ampliado para evitar regresiones.

El estado de compilación/firma física de Android e iOS sigue siendo pendiente hasta disponer de los toolchains y dispositivos reales.
