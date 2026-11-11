# Revisión del sitio Charza

Esta propuesta conserva HTML, CSS y JavaScript integrados en un solo index.html. Las fotografías se sirven desde assets/images/athletes/ y assets/images/site/. No requiere instalación ni compilación.

## Cambios

- Encabezado compacto con la marca original en un contenedor circular y tres enlaces: Horarios, Contacto y WhatsApp.
- Portada con las dos acciones principales y fotografía Inicio proporcionada por el propietario.
- Eliminación de la introducción repetida; cuatro programas con sus fotografías reales.
- Combate en gris; conservación de todos los días, edades y horas de la tabla.
- Ayuda circular «?» junto al horario y orientador compacto con dialog nativo y tres pasos. No usa API, cookies ni almacenamiento de respuestas.
- Carrusel de nueve atletas, oculto hasta abrir «Conoce nuestros atletas», con retratos 800×1000 preparados individualmente, navegación por botones y teclado, desplazamiento táctil y alternativa visual ante imágenes faltantes.
- Conservación de estadísticas y resultados personales dentro de la tarjeta correspondiente; eliminación del listado separado de resultados. Contacto y pie simplificados.
- Metadatos locales, canonical, Open Graph, datos estructurados y estilos de foco y movimiento reducido.

## Orientador

El orientador pregunta únicamente para quién son las clases, edad y experiencia previa (sí/no), una pregunta por pantalla. Atrás conserva las respuestas. La edad debe ser un entero entre 1 y 120; esto valida la entrada, no afirma elegibilidad para ninguna clase. Las validaciones se muestran en español.

No se asigna automáticamente una disciplina ni disponibilidad: el equipo confirma las opciones según edad y experiencia. El resultado muestra «Tu próximo entrenamiento comienza aquí», resume las respuestas y permite consultar por WhatsApp, ver horarios o comenzar de nuevo.

Las respuestas permanecen solo en memoria mientras la página está abierta. El enlace editable de WhatsApp incorpora destinatario, edad y experiencia. No se envía ningún mensaje automáticamente. El modal se cierra con X, Escape o clic fuera y devuelve el foco a la ayuda.

## Pendientes de contenido

Se integraron las cinco fotografías de portada y programas entregadas por el propietario. El marcador independiente de equipo en Trayectoria sigue pendiente. Ver IMAGE_SOURCES.md para procedencia, identificación, límites de resolución y encuadres. Los eventos individuales no documentados no se inventaron.

## Verificación realizada

Las comprobaciones del seguimiento se registran en la entrega: encabezado de tres enlaces, logo circular, ayuda de 34 px, tres pasos excluyentes, validación española, preservación de respuestas, reinicio y WhatsApp; carrusel plegable, nueve imágenes y resultados personales, cinco resoluciones y conservación de horarios, programas, estadísticas y contacto.

El enlace de recursos de Drive se conserva. La herramienta web no pudo comprobar el acceso público a la carpeta; conviene confirmar sus permisos de visualización antes de publicar.

La integración de imágenes conserva los nueve retratos 4:5, cuatro fotos de programa 4:3 y fondo Inicio, con los encuadres individuales documentados. Los archivos de imagen no se modificaron durante este seguimiento.

## Publicación de la propuesta

Propuesta en rama de revisión; no debe mezclarse con main hasta que el propietario autorice publicar. El workflow existente publica main. No se modifica ese workflow ni el dominio.

