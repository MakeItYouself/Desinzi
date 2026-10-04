# Auditoría técnica V20 — DESINZI · ZERO HUMO

## Errores detectados y corregidos

1. **Error de sintaxis JavaScript en `renderHistory()`**: una cadena mal construida podía romper todo el script. Se reescribió con template literals y `JSON.stringify()` para el identificador.
2. **Dos elementos con `id="updates"`**: podía provocar navegación/selección incorrecta. Se eliminó el bloque antiguo duplicado.
3. **Botón de actualización sin implementación**: `checkKnowledgeUpdate()` se referenciaba pero no existía. Se añadió una comprobación controlada y no simulada.
4. **Placeholders `${DATA_VERSION}` y `${SOURCES...}` escritos como HTML estático**: se sustituyeron por elementos que se inicializan desde JavaScript.
5. **Comparación de versiones como texto**: podía interpretar mal versiones como `0.20.0` y `0.3.0`. Se añadió comparación semver básica.
6. **`minAppVersion` incoherente**: se alineó con la versión real de la app (`0.20.0`).
7. **`manifest.webmanifest` referenciado pero ausente**: se añadió el manifiesto PWA y se corrigió el tamaño real del icono (256×256).
8. **QA contaminaba los datos del proyecto**: el backend usaba siempre su carpeta de datos y las pruebas escribían `audit.log`/cambios en ella. Se añadió `DATA_DIR` y QA utiliza un directorio temporal.
9. **Auditoría con identificador derivado de IP**: se eliminó incluso el hash de IP; la auditoría no necesita conservar un identificador de red.
10. **CORS no preparado para despliegue controlado**: se añadió lista explícita `CORS_ORIGINS`; no se utiliza `*`.
11. **Icono PWA declarado como 512×512 cuando el archivo es 256×256**: corregido.
12. **Copia `app_index.html` potencialmente divergente**: se sincronizó con `index.html`; `index.html` queda documentado como entrada canónica.
13. **Versión de Tesseract fijada**: se pasó de `@6` a `@6.0.1` para evitar actualizaciones silenciosas del CDN.
14. **Carga de imágenes OCR sin límites**: se añadió validación de tipo y límite de 12 MB y liberación del `ObjectURL` anterior.
15. **Consultas externas sin comprobar HTTP**: se añadieron comprobaciones `response.ok` en las consultas de productos.

## Pruebas realizadas

- JavaScript embebido: `node --check` → OK.
- Backend `server.mjs`: `node --check` → OK.
- QA del backend: OK.
- IDs HTML duplicados: ninguno.
- Hash SHA-256 del payload coincide con el manifiesto: OK.
- Datos de prueba no quedan en el paquete final.

## Limitaciones que siguen siendo intencionadas

Esto sigue siendo un prototipo técnico. Antes de producción se requieren HTTPS/TLS, gestión profesional de secretos, base de datos transaccional, almacenamiento de auditoría adecuado, roles granulares, monitorización, copias de seguridad, pruebas de penetración, revisión de dependencias/licencias y revisión jurídica/RGPD.
