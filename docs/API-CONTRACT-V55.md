# Contrato de API — DESINZI · ZERO HUMO V55

## Objetivo
Este documento fija las rutas reales utilizadas por la aplicación y el backend. La ruta canónica es `/v1/`. No se deben introducir rutas `/api/` en el contrato de producción.

## Endpoints públicos
| Método | Ruta | Función |
|---|---|---|
| GET | `/v1/health` | Estado del servicio |
| GET | `/v1/knowledge/manifest` | Manifiesto firmado de conocimiento |
| GET | `/v1/knowledge/payload.json` | Payload de conocimiento |
| GET | `/v1/knowledge/status` | Integridad y esquema del payload |
| GET | `/v1/sources` | Registro de fuentes |

## Endpoints administrativos
Requieren `Authorization: Bearer <ADMIN_TOKEN>`:

- `GET /v1/admin/pending`
- `POST /v1/admin/change`
- `POST /v1/admin/change/{id}/review`

## Actualización segura
La aplicación debe seguir este orden:

1. Obtener `/v1/knowledge/manifest`.
2. Comprobar versión y `minAppVersion`.
3. Descargar `payloadUrl`.
4. Calcular SHA-256.
5. Verificar firma ECDSA-P256-SHA256 con la clave pública de confianza integrada en la aplicación.
6. Validar versión y esquema del payload.
7. Activar únicamente si todas las comprobaciones son correctas.
8. Si falla cualquier paso, conservar la base anterior.

## CORS
Solo los orígenes definidos en `CORS_ORIGINS` reciben `Access-Control-Allow-Origin`. El backend no permite CORS abierto por defecto.

## Estado
Contrato verificado contra `backend/server.mjs`, `backend/qa.mjs` y la lógica de actualización de `app.js` el 04/10/2026.
