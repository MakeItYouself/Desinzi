# DESINZI · ZERO HUMO — Motor de conocimiento V27

## Objetivo
Separar de forma verificable la aplicación del conocimiento que puede cambiar por modificaciones normativas, opiniones científicas y fuentes oficiales.

## Jerarquía de fuentes
1. EUR-Lex / Reglamento (CE) 1223/2009 y sus anexos: referencia jurídica vinculante.
2. Comisión Europea: contexto y documentación oficial.
3. SCCS: evidencia y opiniones científicas del comité.
4. CosIng: herramienta informativa; no determina por sí sola la autorización o legalidad de un ingrediente.
5. Fuentes comerciales/productos: solo para identificación de producto, nunca como autoridad regulatoria.

## Activación segura
Antes de aceptar una actualización, el cliente comprueba:
- manifiesto completo;
- versión válida;
- descarga del payload;
- SHA-256 del contenido contra el manifiesto;
- coincidencia entre `knowledgeVersion` y `manifest.version`;
- si falla cualquier comprobación, se conserva la base anterior.

## Estado
V27 implementa el contrato y la verificación criptográfica en cliente. Todavía no se considera un sistema de actualización regulatoria de producción: falta automatizar la ingesta controlada de cambios, revisión humana, pruebas de regresión y despliegue seguro del backend.
