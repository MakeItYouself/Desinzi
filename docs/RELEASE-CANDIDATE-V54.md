# DESINZI · ZERO HUMO — Release Candidate V54

## Estado

- App: `0.54.0`.
- Conocimiento: `2026.10.04-014`. No se incrementa la versión de conocimiento porque este bloque no incorpora una actualización científica/jurídica verificada.

## Cambios verificables
- Service Worker V54 con estrategia **network-first para navegación HTML** y caché como respaldo offline.
- Recursos estáticos mantienen caché local y se actualizan cuando existe una respuesta de red válida.
- La aplicación fuerza una comprobación de actualización del Service Worker y recarga una sola vez cuando cambia el controlador.
- El escáner informa cuando el navegador no dispone de `BarcodeDetector`; la entrada manual permanece disponible.
- Versión, manifiestos y documentación sincronizados.
- Paleta corporativa preservada: negro, dorado, rosa palo/rosa dorado, blanco roto y plateado.

## Límites honestos
- No se afirma compatibilidad nativa completa con iOS/Android sin pruebas en dispositivos reales.
- No se afirma backend de producción hasta disponer de dominio HTTPS, secretos y monitorización reales.
- No se activa ninguna conclusión científica o jurídica por una simple actualización técnica.
