# DESINZI · ZERO HUMO — Motor regulatorio V29

Fecha de revisión: 04/10/2026

V29 amplía el contrato del motor de conocimiento para que las reglas regulatorias no queden mezcladas con la interfaz.

## Cambios
- `schemaVersion: 2`.
- Reglas regulatorias separadas en `regulatoryRules`.
- Cada regla conserva norma, anexo/entrada, fecha de aplicación, límites cuando están publicados y advertencia sobre el contexto necesario.
- El motor no convierte la presencia de un ingrediente en una conclusión automática de cumplimiento.
- Cuando la regla depende de concentración, categoría de producto, edad o vía de exposición, la interfaz lo indica expresamente.
- Se incorporan reglas verificadas del Reglamento (UE) 2026/909 para Citral, Benzyl Salicylate, Triphenyl Phosphate, sales de zinc hidrosolubles, aceite de vetiver acetilado y HC Blue No 18.

## Fuentes jurídicas y científicas
La fuente jurídica primaria es EUR-Lex y el Reglamento (CE) 1223/2009, junto con sus modificaciones vigentes. CosIng se mantiene únicamente como fuente informativa/nomenclatura. Las opiniones del SCCS se usan como contexto científico y no sustituyen el texto legal.

## Regla de seguridad
El motor no afirma que un producto sea «seguro», «tóxico» o «ilegal» solo a partir de un INCI. Para comprobar cumplimiento pueden ser necesarios concentración, categoría del producto, edad de uso, condiciones de aplicación y fecha de puesta a disposición en el mercado.

## Copyright y licencias
No se copia el texto íntegro de la normativa ni de las opiniones científicas dentro de la aplicación. Se almacenan referencias, metadatos y resúmenes propios. Las fuentes oficiales se enlazan para consulta. Las licencias de software y de fuentes de producto se mantienen en `THIRD-PARTY-NOTICES.md`.
