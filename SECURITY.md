# Seguridad — DESINZI · ZERO HUMO

## No subir secretos

Nunca subir al repositorio:

- tokens de administración;
- claves privadas ECDSA;
- certificados o keystores de firma;
- credenciales de servicios externos;
- contraseñas;
- archivos `.env` reales.

El archivo `.env.example` contiene únicamente valores de ejemplo.

## Actualizaciones firmadas

La clave privada utilizada para firmar actualizaciones debe almacenarse fuera de GitHub o en un sistema de secretos apropiado. La clave pública puede formar parte de la aplicación cuando corresponda.

## Reporte

Para una incidencia de seguridad real, no publicar credenciales ni detalles explotables en una issue pública. Utilizar un canal privado del mantenedor antes de divulgarla.
