# DESINZI · ZERO HUMO — Motor de identificación V31

## Objetivo

V31 añade una capa previa al motor regulatorio: **identificación y calidad del texto INCI**. La aplicación no debe convertir una lectura OCR dudosa en una identidad química cierta.

## Cambios

- Normalización de nombres INCI con limpieza de Unicode y espacios.
- Reconocimiento explícito de marcadores `(nano)`.
- Coincidencias exactas y por alias separadas de las coincidencias aproximadas.
- Distancia de edición para detectar posibles errores de OCR, pero **sin aceptar automáticamente** una coincidencia aproximada.
- Las coincidencias aproximadas se presentan como «Posible coincidencia — revisar».
- Una forma marcada como `nano` no hereda automáticamente una regla de la forma convencional.
- OCR muestra la confianza disponible cuando Tesseract la proporciona; con confianza baja se pide revisión manual.
- Separación INCI tolera saltos de línea, puntos de lista y `;`, sin completar ingredientes ausentes.

## Regla de seguridad

Una similitud textual nunca es una identificación química. Si existe duda sobre el ingrediente, la aplicación conserva el estado de incertidumbre y no ejecuta una conclusión regulatoria basada en una coincidencia aproximada.

## Copyright y dependencias

El OCR actual utiliza Tesseract.js 6.0.1 desde CDN. Tesseract.js declara Apache-2.0; el ecosistema OCR contiene componentes con licencias adicionales que deben mantenerse documentadas antes de una distribución de producción. La versión final debe fijar dependencias, integridad y avisos de terceros.

## Limitaciones

La identificación automática no sustituye la comprobación del INCI original, de la sustancia exacta, de la forma física ni de la documentación de formulación cuando la normativa la exige.
