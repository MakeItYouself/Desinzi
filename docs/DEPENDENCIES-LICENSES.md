# Dependencias, licencias y terceros — DESINZI · ZERO HUMO

## Objetivo

Este documento evita que una dependencia técnica o un recurso externo entre en la app sin una revisión de licencia, procedencia y función. No sustituye una revisión jurídica antes de publicar en App Store/Google Play.

## Dependencias principales

| Componente | Uso | Procedencia | Licencia / situación | Acción antes de producción |
|---|---|---|---|---|
| Tesseract.js 6.0.1 | OCR de texto de etiquetas | CDN jsDelivr / proyecto naptha/tesseract.js | Apache-2.0; el ecosistema empaquetado incluye componentes de terceros con sus propias licencias | Incluir inventario/avisos de licencia y valorar empaquetado local + hash/SRI verificable |
| Open Beauty Facts / Open Facts | Identificación/búsqueda de productos | API externa | Datos abiertos con condiciones ODbL/Database Contents License; imágenes con CC BY-SA según documentación del proyecto | Confirmar atribución, condiciones de API, límites, imágenes, almacenamiento y redistribución antes de producción |
| Logo DESINZI | Identidad visual de la app | Recurso propio del proyecto | Propio; conservar archivo maestro y trazabilidad de autoría | Confirmar titularidad y registrar versión final |

## Tesseract.js

El proyecto Tesseract.js declara licencia Apache-2.0. Su repositorio también advierte de componentes de terceros dentro del motor/paquetes; por eso no basta con escribir únicamente “Apache-2.0” para todo el árbol de distribución sin revisar los avisos correspondientes.

En el prototipo actual se carga Tesseract.js 6.0.1 bajo demanda desde jsDelivr. Esto mantiene el OCR fuera de la carga inicial, pero deja una dependencia de red/CDN. Para una versión de producción se recomienda empaquetar la dependencia de forma controlada o usar un recurso externo con integridad verificable y registrar exactamente la versión servida.

## Datos de producto

Las búsquedas de código de barras y producto consultan una base externa. Esto debe aparecer claramente en la política de privacidad y en la pantalla correspondiente. No deben enviarse datos personales junto con la consulta.

## Regla de publicación

Antes de publicar: inventario SBOM/dependencias, versiones fijadas, licencias/avisos, comprobación de integridad, revisión de vulnerabilidades y validación jurídica de las condiciones de cada fuente.


## Revisión 04/10/2026
- Open Beauty Facts se documenta como base de datos de cosméticos del ecosistema Open Facts. La documentación oficial indica condiciones de reutilización de datos y licencias específicas para datos e imágenes; no se copiará una base completa dentro de DESINZI sin revisar las obligaciones de la licencia.
- La API v3 es la API actual recomendada; la v2 está marcada como heredada/deprecated en la documentación actual. DESINZI V28 migra la consulta individual por código de barras a v3. La búsqueda textual conserva temporalmente el endpoint heredado porque la documentación actual sigue señalando la ausencia de búsqueda de texto libre equivalente en v3.
- Tesseract.js declara Apache-2.0. El paquete/core puede incorporar componentes de terceros con licencias adicionales; la distribución final debe conservar los avisos aplicables.

## Firma de actualizaciones

Las actualizaciones de conocimiento se firman con ECDSA P-256. La clave privada debe gestionarse como secreto externo; no se incluye en el frontend, ZIP ni repositorio.
