# Fotografías de Charza Instituto de Wushu

## Procedencia y autorización

Las catorce fotografías iniciales y las dos fotografías adicionales Karen2.jpg y Samuel.jpg fueron entregadas directamente por el propietario para su integración en PR #1. Se usan con la autorización expresa de esta solicitud. No se atribuyen a publicaciones concretas de Instagram: no se proporcionaron URLs de publicaciones verificables. No se utilizaron fotografías de stock ni generación de imágenes.

Los originales permanecen intactos en sus carpetas de origen: las nueve fotografías JPG en Pictures y los cinco PNG en Downloads. El procesamiento solo genera derivados WebP en assets/images/. No se cambian rostros, cuerpos ni equipo.

## Atletas: 800 × 1000 px, proporción 4:5

| Archivo en assets/images/athletes/ | Original | Atleta y ubicación | Ajuste individual |
| --- | --- | --- | --- |
| raul-rubio.webp | Raul.jpg | Raúl Rubio, carrusel | Ventana x=170, y=0, 684×854; conserva cabeza, mano elevada y extremo de la lanza. |
| dylan-cazares.webp | Dylan.jpg | Dylan Cázares, carrusel | Ventana x=47, y=0, 984×1230; recorte lateral leve que conserva cabeza, manos y postura baja. |
| karen-pastrana.webp | Karen.jpg | Derivado anterior conservado; ya no es la foto del perfil | Ventana x=22, y=0, 1035×1294; archivo conservado sin cambios. |
| karen-pastrana-2.webp | Downloads/Karen2.jpg | Karen Pastrana, perfil actual | Ventana x=176, y=450, 880×1100; elimina techo, conserva cabeza, mano extendida y pies, sin deformación. |
| samuel-montalvo.webp | Downloads/Samuel.jpg | Samuel Montalvo, Ph.D., décimo perfil | Ventana x=230, y=0, 853×1066; conserva cabeza, mano elevada, espada y salto, con ajuste proporcional 800×1000. |
| aaron-pastrana.webp | Aaron.jpg | Aarón Pastrana, carrusel | Ventana x=430, y=0, 853×1066; desplazada hacia la derecha para conservar la figura y las manos. |
| apolo-zuany.webp | Apolo.jpg | Apolo Zuany, carrusel | Ventana x=0, y=100, 474×592; elimina fondo superior e inferior conservando cabeza, espada y pies. |
| isis-chavez.webp | Isis.jpg | Isis Chávez, carrusel | Ventana x=275, y=0, 719×899; recorte lateral que conserva el desplante, cabeza, mano extendida y espada. |
| diego-hernandez.webp | Diego.jpg | Diego Hernández, carrusel | Ventana x=0, y=275, 900×1125; conserva cabeza, pies y punta de la lanza. |
| leonardo-avila.webp | Sebas.jpg | Leonardo Ávila, carrusel | Identidad confirmada expresamente por el propietario en esta conversación. Ventana x=0, y=330, 1079×1348; conserva cabeza y pies. |
| ruben-pastrana.webp | Ruben.jpg | Rubén Pastrana, carrusel | Foto completa escalada proporcionalmente, con relleno neutro #222327; un recorte vertical cortaría la vara o la mano. |

La compresión WebP usa calidad 84. Los recortes que difieren mínimamente de 4:5 se ajustan con relleno neutro, sin deformación. La galería mantiene imágenes de 800×1000, con carga diferida y alternativa descriptiva si falta un archivo.

## Portada y programas

| Archivo en assets/images/site/ | Original | Ubicación | Tratamiento |
| --- | --- | --- | --- |
| inicio.webp | Inicio.png | Fondo de portada, escritorio/tablet | 967×647, sin recorte físico; posición CSS independiente y atenuación para legibilidad. |
| inicio-small.webp | Inicio.png | Fondo de portada, móvil | Variante de 640 px de ancho. La foto ocupa la franja superior y el texto queda debajo para conservar los rostros. |
| wushu.webp | Wushu.png | Programa Wushu | Lienzo 800×600 con imagen completa y relleno neutro; no recorta al grupo. |
| sanda.webp | Sanda.png | Programa Sanda / Combate | Lienzo 800×600 con foto vertical completa y relleno lateral, casco y cabeza visibles. |
| gimnasia.webp | GIMNASIA.png | Programa Gimnasia | Lienzo 800×600 con escalado proporcional; mantiene manos, pies y movimiento. |
| taichi.webp | Taichi.png | Programa Taichi | Lienzo 800×600 con foto completa y relleno lateral; cabeza y pies visibles. |

Los cuatro programas mantienen la proporción 4:3, sin estirar las fotografías. Calidad WebP 85 para programas y 87 para portada. Se conservan los elementos ya presentes en los archivos suministrados, incluidos los controles de captura en Wushu.png. Sanda.png (327×417) y GIMNASIA.png (515×380) tienen resolución limitada: no se inventa detalle ni se reconstruyen zonas cortadas en el original.

## Reproducción

Con sharp disponible en Node.js:

    node scripts/prepare-images.cjs <carpeta-de-originales-JPG> <carpeta-de-originales-PNG>

También se puede indicar la ruta de sharp mediante CHARZA_SHARP_MODULE. El sitio no depende de sharp en tiempo de ejecución ni requiere un proceso de compilación.

## Pendientes y registros

El marcador de foto de equipo se eliminó al rediseñar Trayectoria. Inicio.png sigue en portada. Las fotografías no se usan como evidencia de resultados: el registro de diez atletas y 42 participaciones se basa en las trayectorias autorizadas por el propietario; no demuestra afiliación a Charza en todos los eventos históricos. Buenos Aires 2026 conserva nueve representantes.

## Fondo decorativo de Karen

assets/images/site/karen-champagne.webp deriva del original Pictures/Karen.jpg, no de Karen2.jpg. Se aplica una máscara alfa trazada manualmente sobre su contorno mediante SVG y sharp, sin IA generativa, reconstrucción corporal ni sustitución de rostro. Conserva cabeza, postura y proporciones. Se suaviza únicamente el borde de la máscara (0.6 px), se reduce moderadamente la saturación y se aplica tono champagne. El WebP tiene canal alfa; CSS aplica opacidad baja y desvanecimiento, y lo oculta en móvil para proteger la lectura. El original y el WebP anterior permanecen intactos.

Para reproducir solo los tres nuevos derivados, sin regenerar las otras fotografías:

    node scripts/prepare-images.cjs <carpeta-Pictures> <carpeta-Downloads> --international

La galería responsive muestra tres columnas en escritorio, dos en tableta y una en móvil. Cada foto acompaña a su propio resumen e historial expandible; ya no existe una lista de atletas separada del retrato.

## Refinamiento visual de referencia

El propietario proporcionó codex-clipboard-41b67040-15b8-4f00-9612-e7de60cb3206.png (1672×941) como referencia decorativa. No se usan sus personas, nombres ni estadísticas como datos del sitio.

- medals-reference.webp (390×382): extracción del conjunto de tres medallas mediante máscara alfa trazada; conserva reflejos, laureles, cintas negras/doradas y base del arte de referencia. No representa un total de medallas reales.
- world-map-reference.webp (532×335): extracción de puntos y curvas doradas, con eliminación del fondo mediante diferencia cromática respecto al fondo suavizado. Sus puntos y conexiones son únicamente decorativos; no identifican rutas ni sedes verificadas de competencia.
- karen-upper-champagne.webp (279×610): conserva el alfa del recorte anterior de Karen.jpg y recupera los píxeles auténticos del original alineado (x=374, y=134), sin reconstrucción. Recorte de torso superior con cabeza completa, nitidez moderada, desaturación cálida y transparencia selectiva: rostro más definido y descenso gradual hasta transparente. Karen2.jpg sigue asignada exclusivamente al perfil.

Los tres derivados se exportan en WebP con alfa. Los originales, karen-champagne.webp y todas las fotos de perfil permanecen intactos. Para reproducir sin regenerar otras fotos:

    node scripts/prepare-images.cjs <carpeta-Pictures> <archivo-PNG-referencia> --precision