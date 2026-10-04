# DESINZI · ZERO HUMO — endurecimiento móvil V55

## Objetivo

Preparar la V55 para su posterior integración con Android/iOS sin afirmar capacidades nativas que todavía no han sido compiladas ni probadas en dispositivos físicos.

## Cámara

- La cámara solo se solicita cuando la persona inicia el escáner.
- Se comprueba el contexto seguro antes de abrirla.
- Si el permiso está denegado, se ofrece foto o introducción manual.
- El flujo intenta respetar un adaptador nativo opcional `window.DESINZI_NATIVE.requestCameraPermission()` si una futura capa nativa lo proporciona.
- La pista de cámara se detiene al ocultar la aplicación o abandonar la página.
- Las pistas de `MediaStream` se detienen explícitamente y el elemento `<video>` pierde su `srcObject`.
- No se guardan las imágenes de cámara por este flujo.

## Código de barras

Hay tres niveles, en este orden:

1. Adaptador nativo opcional `window.DESINZI_NATIVE.scanBarcode(...)`.
2. `BarcodeDetector` del entorno cuando esté disponible y soporte los formatos requeridos.
3. Introducción manual del código.

La integración nativa **no se considera operativa** hasta que exista un plugin/capa nativa real, compilación y prueba física.

## OCR

- Se valida el tipo y tamaño del archivo antes de procesarlo.
- Se conserva la revisión manual del texto y la política estricta de autocorrección.
- El cargador intenta primero un paquete local en `assets/vendor/tesseract/`.
- Si esos recursos locales no están presentes, utiliza el recurso CDN fijado a Tesseract.js 6.0.1.
- La V55 actual **no declara OCR offline completo**, porque los recursos locales de Tesseract y los datos de idioma aún no están incluidos/verificados en este entorno.
- Para producción se debe distribuir y verificar localmente el motor, worker, WASM y `spa`/`eng` antes de eliminar el fallback CDN.

## Privacidad

La interfaz comunica que el OCR del prototipo se ejecuta en el dispositivo cuando el motor está disponible. Las consultas de producto a Open Beauty Facts sí requieren conexión y están separadas del procesamiento OCR.

## Contrato para la futura capa nativa

La web no depende de una librería nativa concreta. Si la capa nativa se implementa, puede exponer:

```text
window.DESINZI_NATIVE.requestCameraPermission()
window.DESINZI_NATIVE.scanBarcode({ formats, appId })
```

El retorno de `scanBarcode` debe incluir `rawValue`, `content` o `value`. La aplicación solo acepta como código automático un valor numérico de 8 a 14 dígitos.

Esto evita acoplar la lógica científica a un proveedor de plugin y permite revisar licencia, permisos y mantenimiento antes de elegir la implementación nativa definitiva.

## Estado verificable

- Preparación móvil: realizada.
- Endurecimiento web/móvil: realizado y comprobado por QA local.
- Compilación Android: pendiente.
- Compilación iOS: pendiente.
- Escáner nativo: pendiente de integración y prueba física.
- OCR offline completo: pendiente de empaquetado y prueba de recursos locales.
- Firma de aplicaciones: pendiente de toolchains/certificados reales.
