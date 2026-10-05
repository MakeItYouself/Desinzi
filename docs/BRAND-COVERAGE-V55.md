# DESINZI · ZERO HUMO — Cobertura de marcas V55

Fecha de verificación: 04/10/2026.

La aplicación incorpora un registro amplio de alias de marcas para mejorar las consultas contra la base de producto. El registro no implica que cada producto de una marca esté presente en Open Beauty Facts.

Fuentes web verificadas:
- Action España: catálogo de cuidado personal y marcas visibles en catálogo.
- Clarel España: directorio de marcas y catálogo de cosmética.
- Druni España: directorio de marcas y marca propia DRN.
- Primor España: directorio de marcas.

Criterio: una marca o alias solo se incorpora como pista de búsqueda cuando existe evidencia pública de comercialización o presencia en los directorios/catálogos consultados. La app no afirma que una marca o producto sea cosmético únicamente por aparecer en una tienda.

Importante: Open Beauty Facts sigue siendo una fuente de datos de producto, no una autoridad reguladora ni una garantía de disponibilidad, autenticidad o conformidad legal.

## Ampliación 04/10/2026 — registro externo verificable

Se incorpora `data/brand-registry.json` como registro separado del motor de análisis. Incluye marcas observadas en los directorios/catálogos públicos de Action, Clarel, Primor y Druni y conserva la fuente, fecha de verificación y finalidad: generar alias/pistas de búsqueda, no afirmar que cada producto esté disponible en Open Beauty Facts.

El registro se carga desde la aplicación y se combina con el registro curado local. Si el fichero no está disponible, la aplicación conserva el registro curado y no bloquea la búsqueda.
