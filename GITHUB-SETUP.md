# DESINZI · ZERO HUMO — Preparación para GitHub

## Estado

Este paquete está preparado para subir a un repositorio **privado** de GitHub.

- App: `0.55.0`
- Knowledge: `2026.10.04-016`
- No contiene claves privadas ni secretos de producción.
- Las claves de firma de actualizaciones deben permanecer fuera del repositorio.
- Los artefactos nativos Android/iOS no forman parte de este paquete porque todavía no han sido compilados y probados en sus toolchains reales.

## Subida recomendada

1. Crear un repositorio privado llamado `desinzi-zero-humo`.
2. Descomprimir este paquete.
3. Subir el **contenido de esta carpeta**, no la carpeta contenedora adicional.
4. Comprobar que GitHub detecta `.github/workflows/qa.yml`.
5. Ejecutar el workflow `DESINZI QA`.
6. No introducir secretos en archivos versionados.

## Antes de publicar

No hacer público el repositorio hasta revisar licencias, marca, documentación jurídica y contenido de terceros. La configuración de este paquete no constituye por sí sola una autorización para redistribuir todos los datos o imágenes de terceros.

## Qué hace el workflow

El workflow comprueba sintaxis, ejecuta el QA de release y ejecuta el QA móvil. No pretende afirmar que exista todavía una compilación Android/iOS nativa.
