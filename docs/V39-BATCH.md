# V39 — privacidad local y trazabilidad

## Cambios
- Exportación JSON de todos los datos `localStorage` con prefijo `desinzero_`.
- Borrado explícito de esos datos desde Privacidad, con confirmación.
- El informe de análisis incorpora los criterios de presentación activos.
- Los criterios siguen siendo una capa de presentación: no modifican hechos, evidencia ni situación legal.

## Límites
- Esto no constituye por sí solo cumplimiento RGPD de una versión de producción.
- No se exportan datos fuera de `localStorage` ni se inventan datos de cuenta inexistentes.
