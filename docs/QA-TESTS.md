# DESINZI · ZERO HUMO — V17 control de calidad

## Objetivo
V17 añade una primera batería automatizada para comprobar que el backend se comporta de forma segura ante errores y entradas no autorizadas.

## Pruebas automatizadas
- Health endpoint disponible.
- Manifiesto de conocimiento accesible.
- Rutas administrativas sin credenciales: `401`.
- Credencial incorrecta: `401`.
- Credencial con longitud distinta: `401` sin provocar excepción del comparador criptográfico.
- Creación de cambio: `201` y estado `pending_review`.
- Revisión: `approved`/`rejected` controlado.
- El registro de auditoría no conserva la IP en claro; se usa un identificador hash truncado para minimizar datos personales.

## Pruebas manuales pendientes antes de producción
- OCR en varios Android y iPhone, con etiquetas inclinadas, reflejos, baja luz y texto pequeño.
- Permisos de cámara aceptados/denegados/revocados.
- Código de barras sin conexión y con producto inexistente.
- INCI incompleto, duplicado, con errores de OCR y mezclado con texto comercial.
- Actualización interrumpida, hash incorrecto y rollback.
- Revisión de CSP, CORS, TLS, secretos y dependencias en el proveedor de producción.
- Pruebas de accesibilidad y navegación con lector de pantalla.
- Pruebas de privacidad y revisión jurídica antes de publicación.

## Criterio
Una prueba automatizada correcta no equivale a una auditoría de seguridad. V17 documenta controles técnicos iniciales; el lanzamiento requerirá pruebas reales en dispositivos, revisión legal y seguridad independiente/profesional cuando proceda.


## V21 — auditoría de cliente
- `node --check` sobre el JavaScript embebido: OK.
- IDs HTML duplicados: OK.
- Entradas duplicadas de la aplicación eliminadas: OK.
- Consultas Open Beauty Facts: timeout y comprobación HTTP implementados.
- OCR: límite de tamaño, normalización de imagen y bloqueo de ejecuciones simultáneas.
- Datos introducidos por OCR/historial: interpolación mediante atributos escapados.
