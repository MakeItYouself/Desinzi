# DESINZI · ZERO HUMO — Motor de conocimiento V32

## Autocorrección verificable del OCR

V32 incorpora una capa de autocorrección previa al análisis del INCI. No es un corrector lingüístico libre: solo puede sustituir un término cuando existe una coincidencia con un ingrediente canónico o alias incluido en la base de conocimiento verificada.

### Reglas
- mínimo de 7 caracteres;
- distancia Levenshtein máxima: 1;
- similitud mínima general: 87 %;
- margen mínimo frente al segundo candidato: 5 puntos porcentuales;
- para ingredientes con sensibilidad regulatoria: 98 % y 8 puntos de margen;
- nunca autocorregir una forma marcada como `nano`;
- nunca autocorregir cuando existe ambigüedad;
- no completar texto que no pueda vincularse a una entrada verificada.

### Trazabilidad
La interfaz informa de cada sustitución aplicada y permite revertir las correcciones de la sesión. No se almacenan imágenes de la etiqueta por esta función.

### Principio de seguridad
Una autocorrección no constituye evidencia de que la etiqueta original contuviera ese ingrediente. Es una normalización técnica para poder continuar el análisis y siempre queda identificada como corrección automática.

## Actualizaciones y rollback
La política de conocimiento mantiene SHA-256, versión, esquema y activación verificada. Si una actualización falla, se conserva la base anterior. La autocorrección utiliza la misma base activa verificada, por lo que un cambio posterior puede modificar o retirar una corrección en una nueva versión de conocimiento.
