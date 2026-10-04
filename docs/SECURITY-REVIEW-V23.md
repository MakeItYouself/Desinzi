# DESINZI · ZERO HUMO — Revisión de seguridad frontend V23

## Hallazgos corregidos
- Corregida la doble lectura JSON del endpoint de código de barras.
- Añadida CSP del frontend con orígenes explícitos para scripts/CDN y API de productos.
- Añadida política `Referrer-Policy: no-referrer` para el contexto estático.
- Fijada la carga de Tesseract.js a `6.0.1` y evitada la inyección duplicada del script.
- Añadido aviso explícito de privacidad para las consultas a la base externa de productos.
- Icono PWA normalizado a 512×512.

## Riesgo residual
La interfaz actual usa handlers y JavaScript inline; por eso la CSP aún necesita `unsafe-inline`. Antes de producción debe migrarse a `addEventListener` y archivos JS externos, eliminando `unsafe-inline`.

Open Beauty Facts se consulta desde el dispositivo. Antes de producción deben documentarse proveedor, finalidad, condiciones de uso/licencia y tratamiento de las consultas.

Estas pruebas no sustituyen pruebas en dispositivos físicos, pentesting ni revisión jurídica/RGPD.
