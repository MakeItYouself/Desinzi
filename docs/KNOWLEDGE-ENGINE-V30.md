# DESINZI · ZERO HUMO — Knowledge Engine V30

## Objetivo

V30 convierte el motor regulatorio en un sistema contextual: la presencia de un ingrediente no se convierte automáticamente en una conclusión de cumplimiento. Cuando una norma establece límites por categoría, concentración, edad o base elemental, la app pide el contexto necesario y declara qué no puede comprobar.

## Modelo

- `schemaVersion`: 3
- `knowledgeVersion`: `2026.10.04-006`
- `contextModelVersion`: 1
- SHA-256 del payload: `f3dbf28ef8e7e13c7bb16a64a569f5697c6c06b61f4d5800b22d16a70447c6ff`

## Fuente jurídica principal

El motor utiliza el Reglamento (CE) 1223/2009 y sus modificaciones publicadas en EUR-Lex. La versión consolidada vigente consultada el 4 de octubre de 2026 aparece actualizada a 18 de mayo de 2026. Se registra también el Reglamento (UE) 2026/909 y su corrección de errores del 8 de mayo de 2026.

CosIng se mantiene como fuente informativa: no se usa como lista de sustancias autorizadas ni como sustituto de los anexos del Reglamento.

## Contexto solicitado

La interfaz puede recibir:

- categoría de producto;
- grupo de edad cuando sea relevante;
- concentración conocida en porcentaje;
- fecha de comprobación.

El motor distingue entre:

1. dentro del límite indicado;
2. supera el límite indicado;
3. periodo transitorio;
4. falta concentración;
5. falta categoría;
6. falta edad;
7. requiere cálculo sobre una base distinta (por ejemplo, `as Al` o `as zinc`);
8. requiere revisión normativa.

## Reglas incorporadas de 2026/909

Se modelan las modificaciones relativas a:

- sales de zinc hidrosolubles;
- Citral;
- Benzyl Salicylate;
- ingredientes que contienen aluminio;
- Acetylated Vetiver Oil;
- HC Blue No. 18;
- Hydroxypropyl-p-phenylenediamine y su sal 2HCl;
- HC Yellow No. 16;
- HC Red No. 18;
- Ammonium Silver Zinc Aluminium Silicate;
- Triphenyl Phosphate;
- DHHB.

No se añaden límites que no estén suficientemente verificados. Cuando una entrada requiere identificar una sustancia o hacer una conversión de concentración, el motor se abstiene de calcularla.

## Regla de seguridad de producto

DESINZI no certifica la seguridad de un producto a partir del INCI. Una comprobación de límite regulatorio es una comprobación acotada de la condición introducida. No sustituye la evaluación de seguridad del producto cosmético.

## Copyright / procedencia

Los textos normativos se identifican por referencia y enlace oficial; no se copia una base normativa completa como contenido propietario de DESINZI. CosIng y Open Beauty Facts se mantienen diferenciados de las fuentes jurídicas. Las dependencias y recursos de terceros quedan documentados en `THIRD-PARTY-NOTICES.md` y `docs/DEPENDENCIES-LICENSES.md`.
