# DESINZI · ZERO HUMO — V41 Release Candidate

Fecha de revisión: 04/10/2026.

## Estado
Release candidate técnico del prototipo PWA. No se presenta como aplicación publicada ni como servicio de producción.

## Conocimiento
- Versión: `2026.10.04-011`
- Esquema: 4
- Payload incluido y payload del backend sincronizados byte a byte en esta versión.
- El manifiesto contiene el SHA-256 del payload real.
- Las fuentes vinculantes se basan en EUR-Lex/Diario Oficial. CosIng es informativa. SCCS se usa como contexto científico; mandatos y opiniones preliminares no se convierten automáticamente en conclusiones finales.

## Revisión oficial 04/10/2026
EUR-Lex muestra como versión consolidada actual del Reglamento (CE) 1223/2009 la de 18/05/2026. Se mantienen registradas las modificaciones de 2026 verificadas: Reglamento (UE) 2026/78 y Reglamento (UE) 2026/909, con sus correcciones correspondientes.

## QA
- Sintaxis frontend: obligatoria antes de empaquetar.
- Backend: `npm test`.
- Integridad ZIP y SHA-256 del paquete final.
- Coherencia APP/DATOS.
- No se activa conocimiento remoto si falla versión, esquema o SHA-256.

## Pendiente para producción real
HTTPS/TLS, secretos gestionados, backend desplegado, dominio, monitorización, base de datos transaccional, revisión jurídica final, política de privacidad definitiva, términos, consentimiento y configuración de APIs/licencias, pruebas reales en iOS/Android y publicación/revisión de las tiendas.
