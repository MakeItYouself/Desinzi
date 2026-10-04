# DESINZI · ZERO HUMO — V38

## Cambios

1. Ampliación de **Mis criterios** con:
   - Forma nano.
   - Datos incompletos.
2. La función de coincidencia de criterios acepta también el texto INCI original.
3. Un ingrediente sin ficha local verificada puede destacarse mediante el criterio de datos incompletos.
4. La detección de `nano` solo sirve para destacar y no sustituye la comprobación regulatoria específica.
5. Se conserva la separación entre preferencia personal, información científica, producto y normativa.

## Integridad

- Base de conocimiento: `2026.10.04-010`.
- No se ha inventado ninguna actualización normativa.
- `node --check app.js`: OK.
- `node --check backend/server.mjs`: OK.
- QA backend: OK.
