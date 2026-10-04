# Preparación móvil — V55

## Estado real a 04/10/2026

DESINZI · ZERO HUMO sigue teniendo una PWA funcional y ahora incorpora una **configuración de empaquetado móvil reproducible** para preparar una aplicación nativa sin duplicar el código de la interfaz.

- Identificador previsto: `com.desinzi.zerohumo`.
- Nombre: `DESINZI · ZERO HUMO`.
- Fuente web nativa: `www/`, generado exclusivamente desde la V55 mediante `npm run mobile:prepare`.
- Configuración: `capacitor.config.json`.
- El backend **no** se copia al paquete móvil.
- No se incluyen secretos ni tokens administrativos en el paquete móvil.

## Capacidades actuales de la interfaz

- Cámara mediante `navigator.mediaDevices.getUserMedia` cuando el WebView la permite.
- Detección automática de código mediante `BarcodeDetector` cuando está disponible.
- Entrada manual siempre disponible como respaldo.
- Foto de etiqueta mediante selector/captura `capture="environment"`.
- OCR con Tesseract.js cargado bajo demanda.

## Punto crítico antes de declarar la app móvil terminada

Los WebView de Android/iOS no deben darse por equivalentes a un navegador de escritorio. En un dispositivo donde `BarcodeDetector` no esté disponible, el escaneo automático no debe anunciarse como operativo: hay que integrar y probar un escáner nativo o conservar la entrada manual/foto como alternativa.

Asimismo, Tesseract.js se carga actualmente desde CDN. Antes de publicar hay que decidir y verificar si se mantiene esta dependencia de red o si los recursos necesarios se distribuyen localmente, incluyendo licencias, tamaño, rendimiento y funcionamiento sin conexión.

## Pasos externos obligatorios

1. Crear las plataformas Android/iOS con Capacitor en un entorno con las herramientas oficiales instaladas.
2. Configurar permisos de cámara.
3. Integrar/probar escáner nativo si `BarcodeDetector` no está disponible.
4. Probar OCR y decidir estrategia de recursos locales.
5. Probar cámara, OCR, códigos, navegación, historial y actualización en dispositivos físicos.
6. Configurar backend HTTPS real, dominio, secretos gestionados, CORS y monitorización.
7. Ejecutar revisión de privacidad, accesibilidad, seguridad y licencias.
8. Compilar y firmar las aplicaciones.
9. Revisar los metadatos y requisitos de Google Play y App Store.

## No se debe marcar como completado

- Publicación en App Store.
- Publicación en Google Play.
- Firma de aplicación.
- Pruebas de dispositivo físico.
- Backend de producción.
- Escaneo nativo operativo si no existe una prueba real en el WebView objetivo.
- OCR completamente offline.

Mantener esta separación evita presentar como hecho algo que todavía requiere verificación externa.
