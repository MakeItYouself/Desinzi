# DESINZI · ZERO HUMO — Motor de conocimiento V28

Fecha de revisión: 04/10/2026

## Objetivo
Separar definitivamente el conocimiento cambiante del código de interfaz y evitar que una modificación regulatoria obligue a editar `app.js`.

## Contrato
- `schemaVersion: 1`
- `knowledgeVersion: YYYY.MM.DD-NNN`
- `sources[]` con autoridad, tipo, URL, fecha y función de la fuente
- `rules` para separar peligro/riesgo, situación jurídica/evaluación de seguridad y nivel de evidencia
- `ingredients` con ficha, fuentes, fecha de comprobación y referencias regulatorias
- `functions` para categorías conocidas sin convertirlas automáticamente en conclusiones de seguridad

## Activación segura
1. Descargar manifiesto.
2. Comprobar versión y esquema.
3. Descargar payload.
4. Calcular SHA-256 sobre el contenido recibido.
5. Comparar con el manifiesto.
6. Validar estructura y coincidencia de versión.
7. Solo entonces activar y guardar la base verificada.
8. Si la versión remota es anterior, conservar la instalada.
9. Si una comprobación falla, no activar el contenido.

## Fuentes jurídicas revisadas
El Reglamento (CE) 1223/2009 es la referencia jurídica primaria y la versión consolidada disponible en EUR-Lex consultada en esta revisión llega al 18/05/2026. El Reglamento (UE) 2026/909 modifica el marco y tiene correcciones de errores posteriores; ambos quedan registrados para trazabilidad.

CosIng se mantiene como fuente informativa y no vinculante. Las opiniones del SCCS se tratan como contexto científico. Las reivindicaciones cosméticas se contrastan con el Reglamento (UE) 655/2013.

## Límite
Este motor no es una evaluación oficial de seguridad del producto cosmético. El INCI por sí solo no permite conocer concentración exacta, exposición ni todos los parámetros necesarios para una evaluación de seguridad.
