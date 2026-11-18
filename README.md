# El Goro

Sitio web estático para presentar el espacio recreativo El Goro, en Escalada, Zárate, Buenos Aires.

## Contenido

- `index.html`: página principal con servicios, precios, preguntas frecuentes, ubicación, contactos y QR de contacto.
- `galeria.html`: página destinada a la galería.
- `terminos.html` y `privacidad.html`: información legal.
- `creditos.html`: créditos del sitio.
- `css/`: hojas de estilo.
- `js/`: interacciones del menú, preguntas frecuentes, QR y animaciones.
- `img/` y `video/`: recursos multimedia.

## Ejecutar localmente

No se necesita instalar dependencias del proyecto. Desde la carpeta raíz, inicia un servidor estático:

```powershell
python -m http.server 8000
```

Luego abre <http://localhost:8000>. Para detener el servidor, usa `Ctrl+C` en la terminal.

El sitio carga algunas librerías externas desde CDN y usa Google Maps, por lo que ciertas funciones requieren conexión a Internet.

## Datos del espacio

- Dirección: Bandera Argentina 200, a dos cuadras de la Ruta 193 (km 10.5), Escalada, Zárate.
- Teléfono: +54 3487 360514.
- Uso diurno, con capacidad máxima de 40 personas.
- Horario habitual: todos los días, de 10:00 a 20:00. Se puede acordar una extensión hasta las 00:00 con costo adicional.
- Consultas por WhatsApp, Instagram o Messenger; no se utiliza correo electrónico de contacto.

## Galería

La galería está pendiente de adaptación al contenido de El Goro. El diseño acordado es mantener fotos y videos en `galeria.html`, con controles para alternar entre ambos: las fotos se amplían al seleccionarlas y los videos se abren en un modal con controles, deteniéndose al cerrar.
