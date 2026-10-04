# DESINZI · ZERO HUMO — Auditoría integral V55

Fecha de auditoría: 04/10/2026.

## Estado

V55 es un release candidate técnico verificable. No se presenta como publicación nativa ni como servicio de producción.

## Identidad visual
- DESINZI · ZERO HUMO.
- Paleta activa: negro `#0d0d0f`, dorado `#c9a15b`, rosa `#d7a09a`, plateado `#bfc3c7`, blanco roto `#f5efe8`.
- Logo PNG/SVG presente; contiene el wordmark DESINZI y no incorpora una lupa.

## Fiabilidad y no invención
- Identificación incierta: se muestra como no verificada.
- OCR: confianza visible, revisión humana y reversión disponible.
- Autocorrección: solo coincidencias verificadas; las ambiguas se dejan sin corregir.
- `(nano)`: no hereda automáticamente reglas de la forma convencional.
- Hazard/risk, normativa/ciencia/preferencias y datos de producto permanecen separados.
- No se usa una puntuación 0–100 para aparentar precisión.

## Verificación y actualización
- Payload validado por esquema y versión.
- SHA-256 comprobado antes de activar una actualización remota.
- Una versión anterior no se sustituye por una versión remota anterior.
- Si falla la integridad, el esquema o la versión, se conserva la base anterior.
- La versión de aplicación y la versión de conocimiento son independientes.
- El registro de fuentes está sincronizado con las fuentes del conocimiento.

## Legalidad y copyright
- Reglamento (CE) 1223/2009 como fuente jurídica principal.
- CosIng solo como fuente informativa.
- SCCS como fuente científica; la vigilancia científica no se convierte automáticamente en situación jurídica.
- Reivindicaciones cosméticas separadas de conclusiones de seguridad.
- RGPD/privacidad desde el diseño documentados; la documentación jurídica definitiva sigue pendiente antes de publicación.
- Terceros: Tesseract.js y Open Beauty Facts/Open Facts tienen inventario y condiciones de licencia documentadas; la distribución final requiere revisión de avisos, atribución y condiciones aplicables.

## QA ejecutada
- `node --check app.js`
- `node --check backend/server.mjs`
- `npm test`
- sincronización `data/knowledge.json` / `backend/data/payload.json`
- integridad ZIP
- coherencia de versiones, PWA, CSP, logo y paleta
- prueba de manipulación SHA-256 del payload
- autenticación y flujo de revisión backend

## Pendiente real antes de publicación
- pruebas físicas en iOS/Android;
- HTTPS y backend de producción;
- secretos y observabilidad de producción;
- builds y firma de App Store/Google Play;
- revisión jurídica final de privacidad, marca, derechos, licencias, proveedores y APIs.

## Refuerzo posterior de V55

- [x] AEMPS incorporada como fuente oficial española de contexto.
- [x] 18 fuentes sincronizadas entre conocimiento, registro, backend y manifiesto.
- [x] SHA-256 del payload verificado.
- [x] Firma ECDSA P-256 del payload verificada.
- [x] Prueba negativa: payload manipulado falla la verificación de firma.
- [x] La clave privada de firma no se incluye en el paquete.
- [x] Procedimiento documentado para firmar futuras actualizaciones sin introducir secretos en el repositorio.
