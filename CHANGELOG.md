# Astro PDF GATE: Descarga de PDFs con validación por email


### [V0.1.0] Separar Forntend y Backend  - 2026-3-11
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Se envía email desde Front, se recibe en Back y la info vuelve al front correcto.
- **Estructura:** Crear carpeta Frontend.
- **Estructura:** Instalar Nestjs y crear proyecto `backend`.
- **Backend:** Habilitar CORS en `main.ts` para permitir comunicación dentre fornt y back.
- **Frontend:** Añadir llamada `axios` para enviar email al backend, en `modal.ts`
- **Backend:** Añadir un controller en `app.controller.ts` que reciba el email del front y devuelva datos al Front
- **Comunicacion:** Se utiliza `axios` para los endpoints. Esto hace que el performance de la web baje a un 89%. Si se utilizara `fetch` se optimizaría.
- **.env:** Crear archivo `.env` en la raíz, instalar librería de configuración para leer el `.env` y modificar el modulo `app.module.ts`.




### [V0.0.9] Validación Email  - 2026-3-11
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Probado todo, validación de email, mensajes e input en rojo, descarga correcta.
- **modal.ts:** Añadir validación email con `Regexp`
- **modal.ts:** Añadir y eliminar clases `invalid` y `show` par amostrar color rojo y mensaje de error si se introduce un email incorrecto.
- **EmailModal.astro** Añadir etiqueta `novalidate` al `form` para evitar las validaciones automaticas de HTML5 y que solo valide mediante nuestro `modal.ts`
 



### [V0.0.8] TypeScript convertir scripts JS a TS  - 2026-3-11
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Convertir todos los scripts a TypeScript. Probar todas las páginas y descarga de documentos ok.
- **Estructura:** Transformar todos los archivos `*.js` a `*.ts`.
- **Estructura:** Modificar archivos `*.astro` para utilizar `interface` para las `props` y permitir el tipado correcto de TypeScript.



### [V0.0.7] Email Modal  - 2026-3-10
- **Pruebas:** ✅ Todo ok. 
- **Pruebas:** ✅ Probado al pulsar botón se abre modal. Si introduces email le das a descargar e inicia descarga. Si pulsas la `X` se cierra.
- **Estructura:** Crear carpeta para añadir scripts en `js`.
- **Estructura:** Crear componente `EmailModal.astro` para controlar el pop up para pedir el email con un formulario.
- **modal.js:** Lógica para mostrar el `modal Card` para introducir email y permitir descarga.



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

