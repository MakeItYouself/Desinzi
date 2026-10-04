# DESINZI · ZERO HUMO — Lista final de preparación V55

## Hecho en el prototipo
- [x] Identidad visual aprobada preservada.
- [x] Logo DESINZI · ZERO HUMO preservado y sin lupa.
- [x] Barcode con alternativa manual.
- [x] Foto/OCR con revisión humana.
- [x] Autocorrección OCR conservadora.
- [x] Base de conocimiento separada del código.
- [x] Integridad SHA-256 y validación de esquema.
- [x] Seguimiento científico separado del estado legal.
- [x] Historial, criterios, comparación y exportación local.
- [x] Privacidad, legalidad, propiedad intelectual y actualizaciones visibles.
- [x] CSP y ausencia de eventos inline.
- [x] QA automatizada de release.

## Requiere entorno real antes de publicar
- [ ] HTTPS y dominio/backend de producción.
- [ ] Secretos de producción fuera del repositorio.
- [ ] Pruebas de cámara y OCR en iOS y Android reales.
- [ ] Pruebas de accesibilidad en dispositivos reales.
- [ ] Firma de builds y configuración de App Store / Google Play.
- [ ] Revisión jurídica final de privacidad, términos, cookies/trackers si se añaden y textos comerciales.
- [ ] Verificación final de licencias y avisos de terceros en el build distribuido.
- [ ] Pruebas de recuperación ante actualización fallida y pérdida de red.

**Regla de cierre:** ningún punto externo debe marcarse como completado solo porque exista código para ello. Debe existir una prueba verificable en el entorno correspondiente.

## Actualización 2026-10-04 — endurecimiento móvil

- [x] Contrato de cámara con permisos y limpieza de `MediaStream`.
- [x] Fallback de código de barras: adaptador nativo opcional → `BarcodeDetector` → entrada manual.
- [x] Validación de archivos OCR y límite de tamaño.
- [x] Intento de recursos OCR locales antes del fallback CDN.
- [x] QA móvil ampliado.
- [ ] Integración de plugin/capa nativa concreta de escaneo.
- [ ] Pruebas físicas de cámara/OCR/escáner en Android y iOS.
- [ ] Empaquetado local completo de Tesseract y datos `spa`/`eng` para declarar OCR offline.
- [ ] Builds nativos firmados de iOS/Android.
