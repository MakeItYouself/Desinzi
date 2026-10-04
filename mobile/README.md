# DESINZI · ZERO HUMO — empaquetado móvil V55

Este directorio documenta la preparación nativa. La aplicación web se prepara en `www/` y el identificador nativo previsto es `com.desinzi.zerohumo`.

## Flujo verificable

1. Ejecutar `npm run mobile:prepare` para generar `www/` desde la misma V55 verificada.
2. Instalar Capacitor en un entorno con acceso al registro npm, respetando las versiones soportadas en ese momento.
3. Inicializar/copiar las plataformas Android e iOS con `capacitor.config.json`.
4. Configurar permisos de cámara en Android/iOS y probarlos en dispositivos físicos.
5. Probar escaneo: el código web usa `BarcodeDetector` cuando está disponible y conserva entrada manual como respaldo. En un WebView donde `BarcodeDetector` no exista, la integración de un escáner nativo debe hacerse antes de declarar el escaneo automático como operativo.
6. Probar OCR. Tesseract.js se carga desde CDN en el prototipo; para una distribución móvil robusta debe decidirse y verificarse una estrategia de recursos locales/offline antes de publicar.
7. Configurar backend HTTPS de producción y el valor de `desinzero_backend` mediante una configuración segura de producción; no se debe incrustar ningún secreto.
8. Compilar y firmar Android/iOS en sus toolchains oficiales y ejecutar pruebas físicas.

## Lo que NO se declara todavía

No se declara compilación nativa, firma, publicación en Google Play/App Store, escaneo nativo por plugin, OCR offline completo ni backend de producción hasta que exista una prueba real de cada elemento.
