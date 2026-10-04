# DESINZI · ZERO HUMO — Release Candidate V52

V52 corrige la coherencia del identificador de datos de la aplicación y refuerza las comprobaciones de release. No incorpora nueva evidencia científica ni modifica la base de conocimiento: permanece `2026.10.04-014`.

## Cambios verificables

- App: `0.52.0`.
- Identificador visible de datos/release: `V52`; la base científica sigue siendo `2026.10.04-014`.
- PWA: caché `desinzi-zero-humo-app-v51`.
- QA: además de la coherencia de versiones, comprueba que el identificador de datos corresponde a la versión actual.
- QA: comprueba que la paleta de marca sigue declarando negro, rosa palo, dorado, plateado y blanco roto mediante variables CSS.
- Cámara: se bloquea explícitamente en contextos de producción no seguros (sin HTTPS), ofreciendo foto o código como alternativa.
- No se modifica el contenido científico/regulatorio por motivos de versionado.

## Identidad visual preservada

Se mantienen las variables de marca existentes: negro, dorado, rosa palo, plateado y blanco roto. No se sustituye la paleta por colores genéricos.

## Límites

La QA estática no sustituye una prueba real en dispositivos iOS/Android, cámara, permisos, OCR, tiendas de aplicaciones, HTTPS de producción ni revisión jurídica final.
