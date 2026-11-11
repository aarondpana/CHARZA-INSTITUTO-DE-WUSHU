# Revisión del sitio Charza

Esta propuesta conserva HTML, CSS y JavaScript integrados en un solo index.html. Las fotografías se sirven desde assets/images/athletes/ y assets/images/site/. No requiere instalación ni compilación.

## Cambios

- Encabezado compacto, marca original, navegación por secciones y menú móvil.
- Portada con las dos acciones principales y fotografía Inicio proporcionada por el propietario.
- Eliminación de la introducción repetida; cuatro programas con sus fotografías reales.
- Combate en gris; conservación de todos los días, edades y horas de la tabla.
- Orientador con dialog nativo, selección por intereses y objetivos, horarios existentes y enlace de WhatsApp. No usa API, cookies ni almacenamiento de respuestas.
- Carrusel de nueve atletas, oculto hasta abrir «Conoce nuestros atletas», con retratos 800×1000 preparados individualmente, navegación por botones y teclado, desplazamiento táctil y alternativa visual ante imágenes faltantes.
- Conservación de las estadísticas y resultados; contacto y pie simplificados.
- Metadatos locales, canonical, Open Graph, datos estructurados y estilos de foco y movimiento reducido.

## Orientador

La actividad preferida aporta 5 puntos. Los objetivos aportan: disciplina a Wushu (3); confianza a Wushu/Sanda (1 cada uno); fuerza a Gimnasia (2) y Sanda (1); flexibilidad a Gimnasia (3) y Wushu (1); combate a Sanda (4); movilidad a Taichi (4); competencias a Wushu/Sanda (2 cada uno). Un empate principal, información insuficiente o edad inferior a cuatro años deriva a un instructor. La edad solo selecciona horarios existentes. A los 10 o 15 años se muestran los grupos coincidentes para confirmación. Taichi requiere confirmar admisión por edad con el instructor, porque no se ha proporcionado una edad mínima.

Las respuestas permanecen solo en la página abierta. El enlace de WhatsApp incluye únicamente la disciplina y edad cuando el visitante decide abrirlo.

## Pendientes de contenido

Se integraron las cinco fotografías de portada y programas entregadas por el propietario. El marcador independiente de equipo en Trayectoria sigue pendiente. Ver IMAGE_SOURCES.md para procedencia, identificación, límites de resolución y encuadres. Los eventos individuales no documentados no se inventaron.

## Verificación realizada

Pruebas de navegador aprobadas en 375, 430, 768, 1024 y 1440 px: sin desbordamiento horizontal; tabla idéntica a la versión base; nueve tarjetas y conteos correctos; cuatro resultados conservados; menú móvil; modal, Escape y retorno de foco; recomendaciones Sanda/Taichi y derivación por datos insuficientes; rangos de edad superpuestos; carrusel por botones, teclado y toque; alternativa ante imagen faltante; anclas válidas y sin errores de JavaScript.

El enlace de recursos de Drive se conserva. La herramienta web no pudo comprobar el acceso público a la carpeta; conviene confirmar sus permisos de visualización antes de publicar.

La integración de imágenes se comprobó de nuevo en las cinco resoluciones: nueve retratos 4:5, cuatro fotos de programa 4:3, sección plegable cerrada al cargar, navegación, orientador y carrusel con toque. Se compararon contra la versión anterior el encabezado, título y CTA de portada, horarios, estadísticas, resultados y contacto: se conservan idénticos. Se revisaron las cabezas, posturas y armas en una hoja de contacto y en las tarjetas.

## Publicación de la propuesta

Propuesta en rama de revisión; no debe mezclarse con main hasta que el propietario autorice publicar. El workflow existente publica main. No se modifica ese workflow ni el dominio.


