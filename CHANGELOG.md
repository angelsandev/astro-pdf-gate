# Astro PDF GATE: Descarga de PDFs con validación por email

### [V0.0.6] Filtrar Datos  - 2026-3-10
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Crear un archivo con todos los datos de los documentos. Acceder a ese archivo desde cada componente y filtrar según el tipo.
- **Pruebas:** ✅ Probar cambio de `Descargas` a `Fichas de Datos` y `Manuales` y comprobar que se muestran todos los datos y Cards correctos.
- **Estructura:** Crear `/data/documentos.js` que contiene la lista con todos los documentos de todos los tipo posibles, sin filtrar.
- **manuales.astro:** Importar el array de datos y hacer un `filter` para filtrar por tipo Manual.
- **fichas.astro:** Importar el array de datos y hacer un `filter` para filtrar por tipo Ficha de Datos.
- **index.astro:** Importar el array de datos y no filtrar, así mostrará todos los documentos.
- **imagenes:** Mejora en el diseño CSS de las imagenes para optimizar rendimiento.


### [V0.0.5] Fichas de Datos  - 2026-3-10
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Probar cambio de `Descargas` a `Fichas de Datos` y comprobar que se muestran todos los datos y Cards correctos.
- **Estructura:** Crear `fichas.astro` para introducir listas con datos de tipo, tamaño y url para cada pdf y el tipo será = `Fichas de Datos`.


### [V0.0.4] PdfCard-Component y manuales.astro  - 2026-3-10
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Probar cambio de `Descargas` a `Manuales` y comprobar que se muestran todos los datos y Cards correctos.
- **Estructura:** Crear `manuales.astro` para introducir listas con datos de tipo, tamaño y url para cada pdf.
- **Estructura:** Crear componente `PdfCard.astro` donde se muestra la Card con todos los datos.
- **Layout.astro:** Utilizar props para los títulos.
- **PdfCard.astro.astro:** Utilizar props para los datos. 
- **CSS:** Corregir estilo para el botón de `descargas` en el menú Nav.

### [V0.0.3] Optimizar imágenes Astro  - 2026-3-9
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ 
- **Estructura:** Crear carpeta `assets` para las imágenes.
- **index.astro:** Importar la etiqueta especial `Image` de `Astro` para utilizarla para las imágenes.



### [V0.0.2] Dropdown Menu  - 2026-3-9
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Crear `Dropdown` en el menú de navegación.
- **Pruebas:** ✅ Probado todo ok, funcionan los dropdown y las llamadas a componentes.
- **Estructura:** Crear estructura de carpetas con `pages`, `layout` y `components`.
- **Estructura:** Crear componentes: `SiteHeader` `SiteNav` `SiteFooter`.
- **Estructura:** Crear pages: `fichas.astro` `manuales.astro`.
- **index.astro:** Eliminar código y colocar la llamada al Layout.
- **Layout.astro:** Crear el Layout y llamar a todos los componentes y al `slot` que será lo que hay en el `index.astro`.
- **CSS:** Crear estilos globales para ver todo correctamente en el Front, en `global.css`.

### [V0.0.1] Inicio Astro PDF-Gate  - 2026-3-9
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Crear proyecto con `index.astro`
- **Estructura:** Crear estructura de carpetas con `pages`.
- **index.astro:** Crear contenedores para mostrar PDF con información y botón de descarga.
- **CSS:** Crear estilos globales para ver todo correctamente en el Front, en `global.css`.

