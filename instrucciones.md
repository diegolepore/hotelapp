Objetivo de la prueba
=====================

El objetivo es maquetar un módulo con HTML / CSS / JS de forma que se parezca lo máximo posible al diseño proporcionado que encontrarás en la carpeta `mockup`. Debe incluir algunas interacciónes sencillas en javascript que se detallan a continuación.

## Estructura de la prueba

Te proporcionamos una estructura muy parecida a la que usamos de base en muchos de nuestros proyectos pero simplificada. Te recomendamos que eches un ojo a las diferentes carpetas y a lo que hay en cada una de ellas antes de empezar la prueba.

En el _root_ encontrarás un fichero `index.html` que es donde debes realizar el ejercicio.

## CSS

- Esperamos que emplees SASS ( nosotros usamos SCSS )
- Puedes emplear variables / mixins y cualquier característica del lenguaje.
- **Para compilar el SASS en el fichero application.css puedes usar el método que prefieras ( Webpack, Gulp, Grunt, NPM, Codekit... )
- Valoramos que emplees _display: flex;_ para la maquetación.
- Te pedimos que NO emplees Bootstrap (ni para crear el grid, es muy sencillo preferimos que lo hagas a mano o usando otras opciones https://thingsym.github.io/flexbox-grid-mixins/, https://philipwalton.github.io/solved-by-flexbox/demos/grids/ ... )

## Javascript

Esperamos que la maquetación del ejercicio incluya un par de interacciones sencillas hechas con javascript. Puede usar JS puro o jQuery ( se incluye la versión 2.2.4 )

1. En la parte superior hay unas tabs que cambian entre los diseños _Tab-1_ y _Tab-2_

2. En el _Tab-1_ hay unos checkboxes. Toda la caja del chexbox es pulsable y debe resaltarse con el color de borde.

3. En el _Tab-2_ hay varios apartados _collapsables_ que deben _plegarse / desplegarse_ pulsando sobre ellos.

**Valoraremos especialmente que programes tu mismo las interacciones en vez de emplear plugings de jQuery.**

## Tipografías

El diseño emplea las tipografías `Roboto` y  `Roboto Slab` que puede encontrar en GoogleFonts https://fonts.google.com/specimen/Roboto
 
## Responsive

Te pedimos que improvises una adapatación a tablet ( 768px de ancho ) y mobile ( 360px de ancho ) del diseño. Tienes libertad. El principal objetivos es que **las cosas se vean lo mejor posible y sobre todo que no haya elementos rotos**.

- Se valorará que la maquetación sea _fluida_ y se vea correctamente en cualquier resolución.

## Cross-browser

- Debes de dar soporte a Chrome y Firefox.
- Bola extra: que se vea correctamente en IE11. Nosotros solemos usar https://www.browserstack.com, tiene una opción _trial_