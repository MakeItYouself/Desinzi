# DESINZI · ZERO HUMO — V16 seguridad y revisión

## Objetivo
Una modificación del conocimiento no debe pasar directamente de "dato recibido" a "regla activa". El backend separa propuesta, revisión y activación.

## Controles incorporados
- Endpoints de administración protegidos por `ADMIN_TOKEN` (Bearer).
- Si no existe `ADMIN_TOKEN`, las rutas de administración permanecen cerradas.
- Comparación de token en tiempo constante.
- Límite básico de peticiones por IP para el prototipo.
- Límite de tamaño de JSON recibido.
- Cabeceras HTTP defensivas: nosniff, DENY, no-referrer y CSP mínima para la API.
- Registro de auditoría sin almacenar contenido de INCI ni datos personales de usuarios.
- Cambios con estado `pending_review`, `approved` o `rejected`.
- Revisión identificada con fecha, responsable y nota.

## Auditoría V20
- Se corrigió una ruta de actualización que podía intentar comparar versiones como texto en lugar de semver.
- Se eliminó un bloque duplicado de la pantalla de actualizaciones.
- Se eliminó la persistencia de IP/hash de IP en la auditoría.
- Se añadió CORS con lista explícita de orígenes; no se permite `*`.
- Se añadió comprobación de sintaxis del JavaScript embebido y pruebas del backend.

## Antes de producción
Este control no sustituye una auditoría de seguridad. Antes del despliegue público habrá que añadir, según la infraestructura elegida: HTTPS/TLS, gestión segura de secretos, almacenamiento de auditoría externo/inmutable, control de roles más granular, protección frente a abuso distribuido, monitorización, copias de seguridad, pruebas de penetración y revisión de dependencias.

## Privacidad
El backend no debe recibir fotografías de etiquetas ni perfiles de preferencias salvo que exista una finalidad, base jurídica y documentación específica para ello. El prototipo mantiene el análisis local siempre que sea posible.

La AEPD señala que la privacidad desde el diseño debe integrarse durante todo el ciclo de vida del tratamiento y que la privacidad por defecto debe minimizar cantidad, extensión, conservación y accesibilidad de los datos. 
