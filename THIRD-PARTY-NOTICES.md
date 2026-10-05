# DESINZI · ZERO HUMO — Avisos de terceros

## Tesseract.js 6.0.1

Uso: OCR de etiquetas.

Licencia declarada por el proyecto: Apache-2.0.

La distribución de producción deberá conservar los avisos aplicables del árbol de dependencias y fijar la versión servida. En el prototipo se carga bajo demanda desde jsDelivr.

## Open Beauty Facts / Open Facts

Uso: identificación y búsqueda de productos cosméticos.

No es una fuente jurídica ni una certificación de seguridad. Antes de producción se deben respetar las condiciones vigentes de reutilización de datos, atribución, ODbL/Database Contents License, condiciones de API y licencias de las imágenes cuando se muestren o almacenen.

Fuente oficial consultada: https://openfoodfacts.github.io/openfoodfacts-server/api/tutorials/license-be-on-the-legal-side/

## EUR-Lex / normativa UE

DESINZI utiliza referencias y enlaces a actos jurídicos oficiales de EUR-Lex. La normativa de la UE no se trata como una base de datos privada de terceros. La app conserva identificadores, versiones, fechas y enlaces para trazabilidad.

## CosIng / Comisión Europea

CosIng se utiliza como fuente informativa de ingredientes y nomenclatura. La propia Comisión indica que CosIng no tiene valor jurídico y que la situación regulatoria deriva del Reglamento (CE) 1223/2009 y sus anexos.

## V31 — comprobación adicional

- Tesseract.js 6.0.1: Apache-2.0. La versión 6.0.1 está publicada como release del proyecto; el ecosistema de `tesseract.js-core` incluye componentes de terceros con licencias adicionales, por lo que una distribución final debe conservar los avisos correspondientes.
- Open Beauty Facts / Open Food Facts: antes de reutilizar datos o imágenes en producción deben respetarse las condiciones de ODbL, Database Contents License y CC BY-SA aplicables y sus requisitos de atribución.

## Traducción automática

- MyMemory Translation API se utiliza como servicio externo opcional para la traducción automática al español del texto introducido por la persona usuaria. La traducción no modifica el texto original ni los nombres INCI usados por el motor de análisis. En producción debe revisarse el proveedor, sus límites, condiciones de uso, disponibilidad, transferencias y tratamiento de datos antes de convertirlo en servicio definitivo.
- No se considera la traducción una fuente regulatoria ni científica.

## Detección de códigos de barras en navegador

- ZXing Browser se carga como fallback desde CDN cuando el navegador no dispone de `BarcodeDetector`. La disponibilidad depende de conexión, CDN y compatibilidad del dispositivo/WebView.
- La integración no incorpora una copia vendorizada de ZXing en este paquete; antes de una publicación nativa se recomienda fijar y auditar el artefacto, conservar su licencia y valorar empaquetarlo localmente para reducir dependencia de red.

## Catálogo de marcas y tiendas
El registro de marcas de DESINZI se mantiene como datos de búsqueda y no como catálogo comercial. Se contrasta periódicamente con directorios/catálogos públicos de Action, Clarel, Druni y Primor. La presencia de un alias no acredita que todos los productos de esa marca estén disponibles en Open Beauty Facts.

## Registro de marcas y fuentes comerciales

`data/brand-registry.json` contiene nombres de marcas observados en catálogos/directorios públicos de comercios. Estos nombres se utilizan únicamente como términos de búsqueda/alias. DESINZI no copia fichas, imágenes, INCI ni contenidos protegidos de dichos comercios y no presenta a los comercios como autoridades regulatorias.
