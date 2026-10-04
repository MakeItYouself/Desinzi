# DESINZI · ZERO HUMO — revisión de seguridad V24

## Objetivo

Endurecer el frontend eliminando los manejadores JavaScript inline y permitir retirar `unsafe-inline` de `script-src`.

## Cambios

- Eliminados todos los atributos HTML `onclick`, `onchange`, `oninput`, `onsubmit`, `onerror` y `onload` de `index.html`.
- Los eventos se gestionan mediante delegación en `app.js` y listeners explícitos.
- La navegación, OCR, escáner, búsquedas, historial, favoritos, criterios y acciones de modal usan `data-action` y un mapa de funciones cerrado; no se utiliza `eval` ni `new Function`.
- Los valores dinámicos (ingrediente, índice de producto e ID de historial) se transportan mediante `data-*` y se sanitizan antes de insertarlos en HTML.
- La CSP pasa de `script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net` a `script-src 'self' https://cdn.jsdelivr.net`.
- Se mantiene `style-src 'unsafe-inline'` temporalmente porque los estilos están embebidos en la versión prototipo; esto queda como deuda técnica separada de la ejecución JavaScript.
- Se fija Tesseract.js a `6.0.1`.
- Se mantienen timeouts y comprobación HTTP en consultas externas.

## Verificaciones

- `onclick/onchange/oninput/onsubmit/onerror/onload` en HTML: 0.
- `node --check app.js`: OK.
- No se utiliza `eval` ni `new Function` en el frontend.
- La CSP no permite JavaScript inline.
- La estructura PWA y el backend de la versión anterior se conservan.

## Pendiente antes de producción

- CSP aún contiene `style-src 'unsafe-inline'`; migrar CSS a fichero externo.
- Evaluar Subresource Integrity (SRI) o empaquetado local de dependencias externas.
- Ejecutar pruebas automatizadas en navegadores reales y dispositivos Android/iOS.
- Auditoría de dependencias y vulnerabilidades.
- Auditoría RGPD, seguridad del backend y revisión jurídica/copyright antes de publicación.
