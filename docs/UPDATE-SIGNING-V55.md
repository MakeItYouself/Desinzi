# DESINZI · ZERO HUMO — Firma criptográfica de actualizaciones de conocimiento

## Objetivo

La comprobación SHA-256 detecta corrupción o discrepancias entre el manifiesto y el payload. No basta, por sí sola, para autenticar el origen si un atacante pudiera modificar simultáneamente ambos archivos.

V55 añade una segunda capa: **firma digital ECDSA P-256 con SHA-256** sobre los bytes exactos de `data/knowledge.json`.

El cliente solo activa una base remota cuando:

1. la versión y el esquema son compatibles;
2. el SHA-256 coincide;
3. la firma ECDSA verifica con la clave pública integrada en la aplicación;
4. la versión del payload coincide con el manifiesto;
5. el esquema del payload es válido.

Si falla cualquiera de estos pasos, se conserva la base anterior.

## Clave

- `signingKeyId`: `desinzi-update-2026`
- algoritmo: `ECDSA-P256-SHA256`
- clave privada: **no está incluida en el repositorio ni en el ZIP**.
- la clave privada de producción debe custodiarse fuera del código y sustituirse antes de una publicación real.

La clave que aparece en el paquete sirve para verificar el payload actualmente firmado del release candidate. No debe reutilizarse como secreto de producción.

## Firmar una nueva base

Definir la clave privada mediante un secreto de entorno:

`UPDATE_SIGNING_PRIVATE_KEY_PEM`

y ejecutar:

`node scripts/sign-knowledge.mjs`

El script calcula el SHA-256, firma los bytes exactos del payload y actualiza el manifiesto y su ejemplo. La clave privada no se escribe en los archivos generados.

## Regla de seguridad

Nunca se debe aceptar una actualización solo porque el hash coincida con un manifiesto descargado del mismo servidor. La firma protege la autenticidad del contenido frente a una sustitución simultánea del payload y del manifiesto, siempre que la clave pública integrada sea confiable y la clave privada permanezca protegida.
