# Preparación móvil — V55

## Estado real

DESINZI · ZERO HUMO continúa siendo una PWA/prototipo web instalable. Este paquete **no incluye todavía una compilación nativa firmada** para App Store o Google Play.

## Antes de empaquetar como aplicación nativa
1. Probar cámara y permisos en versiones soportadas de iOS y Android.
2. Probar OCR con fotografías reales de etiquetas, incluyendo texto pequeño, curvado y baja iluminación.
3. Confirmar comportamiento offline/online y actualización del Service Worker.
4. Configurar backend HTTPS de producción y secretos fuera del repositorio.
5. Ejecutar pruebas de privacidad, seguridad, rendimiento y accesibilidad en dispositivos reales.
6. Revisar licencias de Tesseract.js, CDN y cualquier fuente de datos antes de distribución.
7. Preparar firma, iconos, capturas, ficha de privacidad y metadatos de las tiendas.

## No se debe marcar como completado
- Publicación en App Store.
- Publicación en Google Play.
- Firma de aplicación.
- Pruebas de dispositivo físico.
- Backend de producción.

Mantener esta separación evita presentar como hecho algo que todavía requiere verificación externa.
