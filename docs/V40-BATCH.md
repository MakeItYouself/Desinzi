# V40 — auditoría de conocimiento y separación APP/DATOS

## Objetivo
Reforzar la trazabilidad entre la versión de la aplicación y la base de conocimiento activa, sin presentar como "actualización de app" una actualización que solo modifica datos.

## Cambios
- La interfaz de Actualizaciones incorpora una auditoría visible de la base activa.
- Se muestran versión de conocimiento, esquema, número de ingredientes, número de reglas, fuentes registradas y fecha publicada/verificada.
- Se registra internamente si la base activa procede del paquete incluido o de una actualización verificada desde backend.
- La activación remota conserva las comprobaciones previas: versión, esquema, SHA-256 y validación del payload.
- Si la base no puede cargarse, la interfaz informa de ello y no inventa conclusiones.
- La versión de la aplicación se mantiene separada de la versión de conocimiento.

## Límite
Esta funcionalidad no convierte la PWA en una aplicación móvil publicada ni garantiza por sí sola cumplimiento RGPD, seguridad de infraestructura o revisión jurídica/científica completa.
