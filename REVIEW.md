# Revisión del sitio Charza

Esta propuesta conserva HTML, CSS y JavaScript integrados en un solo index.html. Las fotografías se sirven desde assets/images/athletes/ y assets/images/site/. No requiere instalación ni compilación.

## Cambios

- Encabezado compacto con la marca original en un contenedor circular y tres enlaces: Horarios, Contacto y WhatsApp.
- Portada con las dos acciones principales y fotografía Inicio proporcionada por el propietario.
- Eliminación de la introducción repetida; cuatro programas con sus fotografías reales.
- Combate en gris; conservación de todos los días, edades y horas de la tabla.
- Ayuda circular «?» junto al horario y orientador compacto con dialog nativo y tres pasos. No usa API, cookies ni almacenamiento de respuestas.
- Galería de diez atletas, oculta hasta abrir «Conoce nuestros atletas», con retratos 800×1000 preparados individualmente. Tres columnas en escritorio, dos en tableta, una en móvil; cada perfil integra foto, resumen e historial accesible expandible con altura limitada y desplazamiento para registros largos.
- Trayectoria con tres medallas decorativas, mapa tenue y recorte transparente de la foto anterior de Karen como fondo. Karen2 reemplaza únicamente su foto de perfil y Samuel Montalvo, Ph.D. se añade como décimo atleta.
- Registro combinado de diez atletas y 42 participaciones: 25 panamericanas, 12 mundiales y cinco categorías adicionales de un evento cada una (Copa Mundial, World Games, SportAccord, NORCECA e IWUF virtual). Desglose accesible y advertencia de que no es un medallero ni prueba de afiliación histórica. Buenos Aires 2026 mantiene nueve representantes.
- Metadatos locales, canonical, Open Graph, datos estructurados y estilos de foco y movimiento reducido.

## Orientador

El orientador pregunta únicamente para quién son las clases, edad y experiencia previa (sí/no), una pregunta por pantalla. Atrás conserva las respuestas. La edad debe ser un entero entre 1 y 120; esto valida la entrada, no afirma elegibilidad para ninguna clase. Las validaciones se muestran en español.

No se asigna automáticamente una disciplina ni disponibilidad: el equipo confirma las opciones según edad y experiencia. El resultado muestra «Tu próximo entrenamiento comienza aquí», resume las respuestas y permite consultar por WhatsApp, ver horarios o comenzar de nuevo.

Las respuestas permanecen solo en memoria mientras la página está abierta. El enlace editable de WhatsApp incorpora destinatario, edad y experiencia. No se envía ningún mensaje automáticamente. El modal se cierra con X, Escape o clic fuera y devuelve el foco a la ayuda.

## Pendientes de contenido

Se integraron las cinco fotografías de portada y programas entregadas por el propietario. El marcador de equipo fue retirado en la revisión de Trayectoria. Ver IMAGE_SOURCES.md para procedencia, identificación, límites de resolución y encuadres. El historial de Samuel procede de la lista de 14 eventos autorizada por el propietario; no se añadieron medallas ni posiciones no documentadas.

## Verificación realizada

Las comprobaciones de esta actualización se ejecutaron con Playwright y Edge a 375, 430, 768, 1024 y 1440 px. Se verificaron diez perfiles unificados, fotografías 800×1000, todos los historiales, resultados personales sin reasignación, los 14 eventos de Samuel, suma 42 y categorías 25+12+1+1+1+1+1, nueve representantes en Buenos Aires, estados cerrado/abierto, controles por teclado, desplazamiento del historial largo, canal alfa del recorte, reducción de movimiento y ausencia de desbordamientos o errores JavaScript.

La comparación del DOM confirmó encabezado, portada, programas, horarios, contacto, pie y orientador intactos. El código del orientador también se comparó sin diferencias y se probó su recorrido completo con enlace de WhatsApp editable. Las capturas incluyen sección cerrada/abierta, diez perfiles, Karen2, Samuel con historial y vistas móviles.

El enlace de recursos de Drive se conserva. La herramienta web no pudo comprobar el acceso público a la carpeta; conviene confirmar sus permisos de visualización antes de publicar.

La integración conserva todos los derivados anteriores, las fotos de programas y el fondo Inicio. Se añaden Karen2 y Samuel en 4:5 y un derivado transparente de Karen.jpg. No se sobrescriben originales ni las fotografías de los otros atletas.

## Publicación de la propuesta

Propuesta en rama de revisión; no debe mezclarse con main hasta que el propietario autorice publicar. El workflow existente publica main. No se modifica ese workflow ni el dominio.