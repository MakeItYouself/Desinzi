# DESINZI · ZERO HUMO — Release Candidate V53

## Estado

- App: `0.53.0`.
V53 es el cierre técnico del prototipo actual. No incorpora nueva evidencia científica o jurídica; la base de conocimiento permanece en `2026.10.04-014`.

## Comprobaciones
- Coherencia de versión de aplicación, PWA, manifiestos y documentación.
- App Shell del Service Worker con recursos existentes.
- Registro del Service Worker con `updateViaCache: none`.
- CSP sin `unsafe-inline` ni manejadores inline.
- Cámara condicionada a contexto seguro y con alternativa manual/fotográfica.
- OCR con límite de tamaño, bloqueo contra ejecuciones simultáneas y política de corrección conservadora.
- Integridad SHA-256 antes de activar una base remota.
- Separación entre estado jurídico, vigilancia científica y datos de producto.
- Paleta corporativa preservada.
- Inventario de dependencias y licencias documentado.

## Lo que aún requiere entorno real antes de publicar
1. Probar cámara y OCR en dispositivos iOS y Android reales.
2. Configurar dominio HTTPS y backend de producción.
3. Gestionar secretos fuera del código y configurar almacenamiento/backup/monitorización.
4. Completar documentación jurídica real: responsable, bases jurídicas, conservación, derechos, proveedores y transferencias.
5. Revisar licencias y recursos de terceros para la distribución final, incluido OCR/CDN.
6. Preparar firma, iconos, capturas, privacidad y metadatos para las tiendas.
7. Ejecutar pruebas de seguridad y rendimiento antes de exposición pública.

Estas tareas no se marcan como realizadas porque no pueden verificarse honestamente desde este paquete de prototipo.
