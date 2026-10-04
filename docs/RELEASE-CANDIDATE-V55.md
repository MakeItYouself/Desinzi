# DESINZI · ZERO HUMO — Release Candidate V55

Fecha: 04/10/2026

## Estado
- App: `0.55.0`.
- Conocimiento: `2026.10.04-016`. No se añade nueva evidencia sin verificación.
- V55 consolida la coherencia de release y la preparación para pruebas móviles/publicación.

## Se conserva
- Identidad visual: negro, dorado, rosa palo/rosa dorado, blanco roto y plateado.
- Logo aprobado de DESINZI · ZERO HUMO, sin lupa.
- Separación entre normativa vinculante, evidencia científica, datos de producto y preferencias.
- Correcciones OCR solo cuando son verificadas e inequívocas.
- Integridad de conocimiento mediante SHA-256, versión y esquema.
- Privacidad y minimización de datos.

## Comprobaciones reforzadas
- Coherencia de `APP_VERSION`, `DATA_VERSION`, PWA, manifiestos y documentación activa.
- Paleta corporativa y presencia del logotipo.
- Pantallas esenciales de privacidad, legalidad, propiedad intelectual, actualizaciones y diagnóstico.
- CSP sin `unsafe-inline`.
- Ausencia de secretos en archivos activos.
- Manifiesto PWA e iconos existentes.
- Service Worker con versión sincronizada.

## Límites que no se deben ocultar
La publicación comercial requiere todavía pruebas en dispositivos reales, firma de las aplicaciones, HTTPS de producción, configuración de secretos/entorno, pruebas de cámara/OCR y revisión jurídica final de textos y flujos de privacidad. V55 no convierte por sí sola la PWA en una aplicación nativa publicada.


## V55 — refuerzo de autenticidad de actualizaciones
- Se incorpora firma ECDSA P-256 sobre el payload exacto de conocimiento.
- SHA-256 se mantiene como comprobación de integridad y la firma como comprobación de autenticidad del contenido.
- El cliente no activa una actualización remota si falla la firma.
- Se incorpora AEMPS como fuente oficial española de contexto, manteniéndola diferenciada de la normativa vinculante del BOE/DOUE.
