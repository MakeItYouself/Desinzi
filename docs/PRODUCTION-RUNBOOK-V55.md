# DESINZI · ZERO HUMO — Runbook de producción V55

Este documento convierte el prototipo técnico en una lista ejecutable de despliegue. No marca como hecho ningún paso que requiera una cuenta, dominio, certificado, dispositivo físico o revisión profesional.

## 1. Backend

Variables mínimas:

- `PORT`: puerto interno del servicio.
- `ADMIN_TOKEN`: secreto largo, aleatorio y almacenado fuera del repositorio.
- `CORS_ORIGINS`: lista exacta de orígenes HTTPS que pueden consumir la API.
- `TRUST_PROXY=1`: solo si el servicio está detrás de un proxy inverso que sanea correctamente `X-Forwarded-For`.

El contenedor incluido usa Node 24 Alpine, ejecuta como usuario no root y no copia `.env`.

## 2. HTTPS

La API no debe exponerse directamente a Internet mediante HTTP. Debe existir un proxy/gateway HTTPS delante del backend, con certificado válido y redirección HTTP→HTTPS.

## 3. Datos

Antes de sustituir `payload.json`:

1. generar el payload desde una fuente verificable;
2. validar esquema;
3. calcular SHA-256;
4. actualizar el manifiesto con la misma versión y hash;
5. revisar fuentes y fecha;
6. ejecutar QA;
7. conservar una copia de la versión anterior para rollback.

Nunca se debe modificar manualmente el estado legal de un ingrediente para “hacer pasar” una actualización.

## 4. Frontend

El frontend debe servirse también por HTTPS. La app usa cámara y por tanto necesita un contexto seguro en los dispositivos compatibles.

Antes de publicar:

- probar instalación PWA;
- probar actualización del Service Worker;
- probar pérdida de red;
- probar recuperación tras una actualización inválida;
- probar OCR con fotografías reales y texto pequeño;
- probar código de barras con varios dispositivos.

## 5. Móvil nativo

El proyecto actual no incluye todavía certificados de Apple/Google ni builds firmados. No deben generarse afirmaciones de publicación hasta comprobar una compilación y una instalación real en cada plataforma.

## 6. Seguridad

Obligatorio antes de exposición pública:

- secreto de administración fuera del repositorio;
- HTTPS;
- CORS restringido a orígenes reales;
- backups y recuperación probados;
- monitorización y alertas;
- revisión de dependencias;
- pruebas de penetración apropiadas al alcance;
- revisión RGPD y textos legales finales.

## 7. Criterio de cierre

Una casilla solo se marca como completada cuando existe una evidencia verificable: log de despliegue, prueba automatizada, captura/prueba de dispositivo, configuración de tienda o revisión documentada.
