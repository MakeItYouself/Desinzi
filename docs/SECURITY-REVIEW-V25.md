# Revisión de seguridad V25

## Cambios

- CSS extraído a `styles.css`; `index.html` ya no contiene bloques `<style>`.
- Eliminados los atributos `style="..."` del HTML.
- CSP: `style-src 'self'` sin `unsafe-inline`.
- CSP: `script-src-attr 'none'` y `style-src-attr 'none'`.
- Se mantienen los eventos mediante `data-action` + delegación en `app.js`; no se usan manejadores inline.
- Se añadieron etiquetas ARIA a los principales campos de entrada.
- Se añadió `:focus-visible` y soporte de `prefers-reduced-motion`.
- Se documentó el inventario de dependencias/licencias y la dependencia CDN de Tesseract.js.

## Verificaciones realizadas

- `node --check app.js`: OK.
- 0 atributos `style` en HTML.
- 0 `onclick`, `onchange`, `oninput`, `onsubmit`, `onerror` y `onload` en HTML.
- 0 `script-src 'unsafe-inline'`.
- 0 `style-src 'unsafe-inline'`.
- `script-src-attr 'none'` presente.
- `style-src-attr 'none'` presente.
- Hoja externa `styles.css` enlazada.

## Pendiente antes de producción

1. Pruebas reales en Chrome/Android y Safari/iOS.
2. Empaquetado controlado de Tesseract.js o integridad/SRI verificable.
3. Auditoría de dependencias y vulnerabilidades.
4. Revisión de licencia/atribuciones de todas las dependencias transitivas.
5. Política de privacidad, términos y documentación RGPD definitiva.
6. Backend real con actualización firmada/verificable y control de versiones.
7. Pruebas de accesibilidad con lector de pantalla, teclado y contraste.
