# Videos profesionales por servicio

## Objetivo
Añadir un video breve, cinematográfico y específico en cada página de servicio: roofing, tile flooring, house painting y wood fence/residential construction.

## Cambios
- Generar cuatro videos horizontales coherentes con la estética industrial de MERA CONSTRUCTIONS LLC.
- Actualizar el componente compartido de servicios para mostrar video en reproducción automática, silenciosa, en bucle y compatible con móvil.
- Mantener las imágenes actuales como `poster` y respaldo visual si el video tarda en cargar o no puede reproducirse.
- Asignar a cada ruta su video correspondiente sin cambiar textos, formularios ni navegación.
- Respetar `prefers-reduced-motion` mostrando la imagen estática cuando el usuario desactive animaciones.

## Validación
- Comprobar las cuatro páginas en escritorio y móvil.
- Confirmar que no haya errores de consola, contenido superpuesto ni cambios de tamaño al cargar el video.
- Verificar reproducción automática silenciosa y respaldo estático.

## Detalles técnicos
Los videos se integrarán como assets locales administrados por el proyecto, con `playsInline`, `muted`, `loop`, dimensiones estables y carga diferida para reducir el impacto de rendimiento.
