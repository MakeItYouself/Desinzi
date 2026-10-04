# Revisión de seguridad V26

## Cambios de esta versión

- Se mantiene CSP sin `unsafe-inline` para scripts ni estilos.
- Se mantiene la hoja CSS externa.
- Se actualiza el identificador de conocimiento del motor a V26.
- Se añade enlace de salto al contenido principal para teclado y tecnologías de asistencia.
- Se añade gestión de foco al cambiar de pantalla.
- Se añade gestión accesible del diálogo de ingrediente: foco inicial, retorno al elemento que lo abrió, tecla Escape y trampa de foco mediante Tab.
- Se utiliza `aria-hidden` para reflejar el estado abierto/cerrado del diálogo.
- Se corrigen atributos `class` duplicados detectados en HTML generado dinámicamente.
- Se mantiene OCR bajo demanda; la imagen de etiqueta no se envía a Open Beauty Facts.

## Verificaciones

- `node --check app.js`: OK.
- 0 manejadores inline (`onclick`, `onchange`, `oninput`, `onsubmit`, `onerror`, `onload`) en HTML.
- 0 `style="..."` en HTML.
- CSP sin `script-src 'unsafe-inline'`.
- CSP sin `style-src 'unsafe-inline'`.
- `script-src-attr 'none'` y `style-src-attr 'none'` presentes.
- `styles.css` cargada externamente.
- No se usa `eval()` ni `new Function()` en el frontend.
- ZIP íntegro y SHA-256 registrado en la entrega.

## Dependencias y licencias

Tesseract.js 6.0.1 declara Apache-2.0. El propio proyecto y su núcleo advierten que el código/artefactos distribuidos pueden incorporar componentes de terceros con licencias distintas; por ello la versión de producción deberá incluir un inventario de avisos y licencias completo. La documentación oficial del proyecto permite usarlo mediante copia local o CDN. citeturn0search0turn0search2turn0search4

## Pendiente antes de producción

1. Empaquetar Tesseract.js de forma controlada o establecer una estrategia de integridad verificable.
2. Generar SBOM y revisar vulnerabilidades de dependencias y CDN.
3. Completar avisos de licencias/atribuciones de terceros.
4. Pruebas reales con Android/Chrome y iOS/Safari, incluidos permisos de cámara.
5. Pruebas con lector de pantalla y contraste WCAG.
6. Política de privacidad, términos, consentimiento y documentación RGPD definitivos.
7. Backend de conocimiento real con firma/integridad, rollback y control de revisión.
8. Auditoría de seguridad y pruebas de penetración antes de exposición pública.
