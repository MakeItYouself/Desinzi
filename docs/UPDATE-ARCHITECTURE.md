# DESINZI · ZERO HUMO — arquitectura de actualización V16

Flujo: propuesta → revisión humana → aprobación/rechazo → generación de payload → validación de esquema → SHA-256 → activación atómica → registro → rollback.

Una propuesta aprobada no implica por sí sola que deba convertirse en una regla automática: los cambios regulatorios deben conservar su fuente jurídica y fecha de verificación.

El backend incluido es ejecutable localmente y no está desplegado públicamente desde este ZIP.

## Administración
Configurar `ADMIN_TOKEN` como secreto del entorno. Nunca introducir el token en `index.html`, repositorio público, ZIP distribuible ni código cliente.

## Principios
- Una fuente informativa no se convierte en fuente jurídica.
- No activar datos con integridad fallida.
- No borrar la versión anterior antes de validar la nueva.
- Registrar quién, qué, cuándo, fuente y resultado.
- Mantener rollback.
- No almacenar datos personales de usuarios en el registro de cambios.
