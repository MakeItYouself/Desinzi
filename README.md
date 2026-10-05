## V55 — Release Candidate técnico (04/10/2026)
- Preparación de despliegue documentada en `docs/PRODUCTION-RUNBOOK-V55.md`; se incluye `backend/Dockerfile` ejecutable como usuario no root.

- App: `0.55.0`.
- Base de conocimiento: `2026.10.04-016` (incluye la incorporación verificada de AEMPS como fuente oficial española de contexto).
- Se mantiene la identidad visual aprobada: negro, dorado, rosa palo/rosa dorado, blanco roto y plateado; logo DESINZI · ZERO HUMO sin lupa.
- Se refuerzan las comprobaciones de coherencia de release, PWA, manifiestos, interfaz, privacidad y preparación móvil.
- Las actualizaciones remotas de conocimiento requieren ahora SHA-256 **y firma ECDSA P-256** antes de activarse; la clave privada no forma parte del paquete. Ver `docs/UPDATE-SIGNING-V55.md`.
- La app sigue siendo un prototipo técnico/PWA: la firma y pruebas finales en dispositivos iOS/Android, el backend HTTPS de producción y la revisión jurídica final siguen siendo pasos externos obligatorios antes de publicar.
- No se presenta como certificación toxicológica, clínica ni jurídica.
- Se incorpora preparación móvil reproducible con `capacitor.config.json`, `npm run mobile:prepare` y `npm run mobile:qa`; esto no equivale todavía a una compilación o firma nativa.

## Refuerzo de identificación de producto y traducción — 04/10/2026

- La consulta por código de barras ya no limita la primera petición a `product_type=beauty`: prueba la ruta universal (`product_type=all`) y varias rutas compatibles de Open Beauty Facts antes de declarar que no existe una ficha.
- La búsqueda por marca/nombre usa varias consultas y rutas de Open Beauty Facts y reconoce aliases de marcas propias habituales en España (por ejemplo, Deliplus/Mercadona, Cien/Lidl y Lacura/ALDI) además de marcas comerciales conocidas. El listado de marcas no implica que todos sus productos estén presentes en la base.
- Se añade un fallback de ZXing en navegador cuando `BarcodeDetector` no está disponible. Sigue siendo necesario probarlo en Samsung/WebView real; no se garantiza el enfoque automático porque el navegador puede ignorar capacidades de cámara solicitadas.
- Se añade traducción automática al español del texto OCR, conservando siempre el original y sin traducir los nombres INCI utilizados por el análisis.
- Open Beauty Facts continúa siendo una fuente de datos de producto, no una autoridad reguladora ni una certificación.


## Preparación GitHub

Este repositorio está preparado para GitHub privado. Incluye un workflow de QA (`.github/workflows/qa.yml`) que comprueba sintaxis, QA de release y QA móvil. La compilación nativa Android/iOS y la firma de tienda siguen siendo etapas posteriores y no se declaran realizadas.


## Histórico de desarrollo

Las entradas siguientes son documentación histórica de etapas anteriores. **No representan el estado activo del paquete**; el estado activo es el bloque V55 de la cabecera.

## V43 — Release Candidate técnico (04/10/2026)

- Ampliada la vigilancia científica SCCS con mandatos oficiales adicionales y resumen visible en la auditoría de la base.
- La vigilancia científica permanece separada de la situación jurídica y no genera conclusiones legales automáticas.
- Histórico: esta entrada documenta la etapa V43; las versiones actuales se comprueban automáticamente en QA.

## V42 — Release Candidate técnico (04/10/2026)

- Sincronización obligatoria entre `data/knowledge.json` y `backend/data/payload.json`: cada release conserva el mismo payload y el manifiesto contiene su SHA-256 y firma criptográfica.
- Revisión de fuentes oficiales realizada el 04/10/2026: EUR-Lex mantiene acceso a la versión consolidada vigente del Reglamento (CE) 1223/2009 de 18/05/2026; el Reglamento (UE) 2026/909 y sus correcciones y el Reglamento (UE) 2026/78 y su corrección quedan registrados como fuentes vinculantes.
- Se incorporan al registro de conocimiento las páginas oficiales de opiniones y mandatos del SCCS para monitorización científica. Un mandato o una opinión preliminar no se trata como una norma ni como una conclusión final.
- QA actualizada para V42, incluida coherencia APP/DATOS, esquema 4, integridad SHA-256 y flujo de revisión administrativa.

**Estado:** release candidate técnico del prototipo. No es todavía una publicación de App Store/Google Play ni un servicio de producción.

## V40 — auditoría de conocimiento y separación APP/DATOS (histórico)
- La pantalla Actualizaciones muestra el estado de la base activa: versión, esquema, ingredientes, reglas, fuentes y fecha.
- Se distingue entre base incluida y base remota previamente verificada.
- La versión de la aplicación y la versión de conocimiento permanecen separadas.
- No se presenta una actualización de datos como una nueva versión de iOS/Android.

# DESINZI · ZERO HUMO

## V39 — privacidad local y trazabilidad de preferencias
- Se añade exportación de los datos locales `desinzero_*` en JSON.
- Se añade borrado explícito de todos los datos locales de DESINZI, con confirmación.
- El informe de análisis registra qué criterios de presentación estaban activos, sin convertirlos en conclusiones científicas.
- No se presenta la exportación local como cumplimiento RGPD completo: en producción habrá que documentar responsables, bases jurídicas, conservación, sincronización y derechos.

## V35 — avance en bloque: comparación por evidencia y claims estructurados
- La comprobación etiqueta ↔ ficha ahora clasifica el resultado sin convertir diferencias en hechos no demostrados.
- Se mantiene la separación entre datos de producto, evidencia científica y normativa.
- Se recomienda revisar la fotografía original y la fuente/fecha cuando existen diferencias.

## Comprobaciones realizadas
- JavaScript embebido: `node --check` OK.
- Backend: `npm test` OK.
- IDs HTML duplicados: ninguno detectado.
- Rutas de administración: autenticación y flujo de revisión probados.
- CORS: solo orígenes explícitamente configurados.
- Manifiesto PWA presente y sincronizado.
- OCR protegido contra ejecuciones simultáneas y con límite de tamaño.
- Consultas externas con timeout y comprobación HTTP.
- Preprocesado de imagen para OCR con límite de dimensiones.
- Versionado de datos separado del versionado de la app.
- Auditoría del backend minimizada y con limpieza de entradas de rate-limit.

## No confundir con producción
El backend incluido sigue siendo un componente de prototipo. Antes de exponerlo públicamente: HTTPS/TLS, secretos gestionados, base de datos transaccional, almacenamiento de auditoría externo/inmutable, roles, monitorización, backups, pruebas de penetración, revisión de dependencias, evaluación RGPD y documentación legal.

## V22 — revisión adicional
- Eliminada la pantalla duplicada de Actualizaciones.
- Corregida la referencia a una función de actualización que no existía.
- Corregidas interpolaciones `${...}` que se estaban mostrando literalmente en HTML.
- Corregida la comparación entre versión de app y versión de conocimiento: ahora se comparan por separado.
- Eliminada la declaración duplicada de `clearHistory`.
- Escáner: temporizador de detección cancelable al detener la cámara.
- OCR: bloqueo contra doble ejecución, límite de 12 MB y preprocesado de imágenes.
- Consultas Open Beauty Facts: timeout y validación HTTP.
- Entrada de ingredientes: argumento de apertura de ficha codificado para evitar romper atributos HTML con comillas o caracteres especiales.
- Backend: `X-Forwarded-For` solo se utiliza cuando `TRUST_PROXY=1` y se limpian entradas antiguas del limitador de peticiones.

## V24

Frontend hardened: no inline event handlers; CSP script-src no longer permits unsafe-inline; event delegation in app.js; fixed dynamic actions; security review in docs/SECURITY-REVIEW-V24.md.


## Estado de endurecimiento V25

CSS externo y CSP sin `unsafe-inline`; eventos inline eliminados; controles de entrada con ARIA; accesibilidad básica; inventario inicial de dependencias/licencias. Ver `docs/SECURITY-REVIEW-V25.md` y `docs/DEPENDENCIES-LICENSES.md`.

## V26 — accesibilidad y control de foco
- Enlace de salto al contenido principal.
- Foco gestionado al cambiar de pantalla.
- Diálogo de ingrediente con `aria-hidden`, Escape, foco inicial, retorno al elemento invocador y trampa de foco.
- Corrección de clases duplicadas en HTML generado dinámicamente.
- Motor de conocimiento actualizado a V26.

## V27 — verificación del conocimiento
El manifiesto de conocimiento incluye versión, fuentes, SHA-256 y política de activación. El cliente puede descargar el payload, calcular su SHA-256 mediante Web Crypto y conservarlo localmente solo cuando coinciden manifiesto, versión y contenido. Una actualización no verificada nunca sustituye la base instalada.


## V29 — motor regulatorio por reglas y revisión legal 04/10/2026

- Reglas regulatorias separadas del código: anexos, entradas, límites y transiciones cuando están verificadas.
- No se concluye cumplimiento solo por detectar un ingrediente en el INCI.

## V28 — motor de conocimiento externo y revisión legal 04/10/2026
- Las fichas de ingredientes ya no están incrustadas en `app.js`: se sirven desde `data/knowledge.json` / backend y se validan por esquema, versión y SHA-256 antes de activarse.
- Se incorpora rollback lógico: una actualización anterior no puede sustituir una base más nueva.
- Se añade trazabilidad por ingrediente: fuente, fecha de verificación y referencia regulatoria cuando procede.
- Se incorpora la revisión del Reglamento (UE) 2026/909 y sus correcciones de errores como fuente jurídica específica para cambios recientes.
- La consulta de código de barras migra a API v3 de Open Beauty Facts; la búsqueda textual mantiene la vía heredada mientras la API v3 no ofrece búsqueda de texto libre equivalente.
- Se actualiza el inventario de licencias: Tesseract.js Apache-2.0 y condiciones/atribución de datos e imágenes de Open Beauty Facts/Open Facts.
- Se añade QA de esquema y detección de manipulación del payload.

**Nota de producción:** la revisión legal y de licencias reduce riesgos, pero no sustituye una revisión jurídica final, especialmente para marca, privacidad, App Store/Google Play, términos de APIs y redistribución de datos.

## V30 — motor contextual y revisión normativa

V30 añade el modelo contextual de producto para evitar conclusiones automáticas cuando una restricción depende de categoría, concentración, edad o base de cálculo. La base jurídica principal sigue siendo el Reglamento (CE) 1223/2009 y sus modificaciones oficiales; CosIng permanece como fuente informativa y no como autorización legal.

## V33 — identificación INCI y control de OCR

V32 añade una capa de identificación conservadora antes del motor regulatorio. Las coincidencias exactas y por alias se diferencian de las coincidencias aproximadas; una errata de OCR se marca para revisión y no se convierte automáticamente en un ingrediente regulado. También se detecta el marcador `(nano)` y se evita heredar automáticamente reglas de la forma convencional. La confianza OCR disponible se muestra para facilitar la revisión humana.

La documentación de V32 incluye `docs/KNOWLEDGE-ENGINE-V32.md` y `docs/LEGAL-AUDIT-V32.md`.


## V33
V33 añade una comprobación cruzada entre el INCI leído por OCR de una etiqueta fotografiada y el INCI recuperado de Open Beauty Facts. Las diferencias se muestran como diferencias de datos, no como prueba de cambio de fórmula, error o incumplimiento. La comparación no envía la fotografía a Open Beauty Facts.

## V32
Autocorrección verificable del OCR con umbrales conservadores, trazabilidad y reversión de correcciones de sesión.


## V37 — bloque acelerado
- Informe de análisis exportable en texto desde el resultado.
- Incluye producto, fuente, versión, INCI recuperado, identificación del motor, contexto regulatorio disponible y límites.
- No incorpora puntuaciones ni conclusiones no verificadas.
- Knowledge version: `2026.10.04-010`.


## V38 — criterios ampliados

- Se amplían “Mis criterios” con **forma nano** y **datos incompletos**.
- Los criterios se aplican como capa de presentación y no alteran las conclusiones del motor.
- “Datos incompletos” permite destacar ingredientes que no tienen una ficha de conocimiento verificada.
- “Forma nano” permite destacar textos que contienen una referencia verificable a `nano`; no convierte por sí sola la forma en una conclusión regulatoria.
- Se mantiene la base de conocimiento `2026.10.04-010`; no se declara una actualización normativa no verificada.
