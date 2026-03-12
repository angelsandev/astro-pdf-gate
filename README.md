# Astro PDF GATE: Descarga de PDFs con validación por email
Este proyecto es una aplicación **Full-Stack** diseñada para gestionar la descarga de manuales técnicos. El sistema no solo sirve archivos PDF, sino que actúa como un "gate" o puerta de acceso, requiriendo el registro del email del usuario antes de permitir la descarga.

## 🏗️ Arquitectura del Sistema

El proyecto se divide en dos grandes bloques comunicados entre sí:

### Backend (NestJS + MySQL)
Es el motor de la aplicación y se encarga de:
* **Base de Datos:** Una tabla en **MySQL** almacena la información de los manuales (`title`, `size`, `type`, `url`, `isActive`).
* **API REST:** Expone endpoints para que el frontend pueda consultar los datos.
    * `GET /pdfs`: Devuelve el listado completo de manuales desde la DB.
    * `POST /pdfs/download`: Recibe y registra el email del usuario y el archivo solicitado.
* **Servidor de Estáticos:** Configurado para servir los archivos físicos PDFs de forma segura, forzando la descarga directa mediante cabeceras `Content-Disposition`.
* **ORM:** Utiliza **TypeORM** para el mapeo de datos y la conexión con la base de datos.

### Frontend (Astro + TypeScript)
Es la interfaz de usuario, rápida y optimizada:
* **Data Fetching:** Astro realiza peticiones al backend durante el tiempo de construcción/renderizado para obtener la lista de PDFs.
* **Componentes:** Uso de componentes dinámicos como `PdfCard.astro` que reciben los datos del backend mediante *props*.
* **Lógica de Cliente:** Un script en TypeScript gestiona un **Modal nativo** (`<dialog>`) que intercepta el clic de descarga para validar el email del usuario antes de liberar el archivo.
* **Comunicación:** Utiliza **Axios** para enviar los datos de registro al backend de forma asíncrona.

---

## 🚀 Flujo de Funcionamiento

1.  **Carga de datos:** Al entrar en la web, Astro solicita a NestJS los manuales. NestJS hace una consulta `SELECT` a MySQL y devuelve un JSON.
2.  **Visualización:** El frontend pinta una tarjeta por cada manual con su título, tamaño y categoría.
3.  **Intercepción:** Al pulsar "Descargar", un script de TS bloquea la descarga directa y abre un modal de suscripción.
4.  **Validación y Registro:** El usuario introduce su email. Si es válido, se envía un `POST` al backend.
5.  **Descarga Forzada:** Tras el éxito del registro, el frontend crea un enlace temporal que apunta al servidor de estáticos de NestJS, iniciando la descarga automática del archivo.

---

## 🛠️ Tecnologías utilizadas

* **Frontend:** [Astro](https://astro.build/), TypeScript, Axios.
* **Backend:** [NestJS](https://nestjs.com/), TypeORM, MySQL Driver.
* **Base de Datos:** MySQL.
* **Estilos:** CSS3 nativo con metodología modular.

## Ejecutar servidores en modo desarrollo

### Frontend

```bash
cd frontend
npm run dev
```

### Backend

```bash
cd backend
npm run start:dev
```

## Instalaciones necesarias

### Frontend
* Instalar axios
```bash
cd frontend
npm install axios
```

### Backend
* Instalar librería para leer el .env
```bash
cd backend
npm install @nestjs/config
```
* Instalar conectores a Bases de Datos
```bash
cd backend
npm install @nestjs/typeorm typeorm mysql2
```

#### Generar un módulo automaticamente con NEST
Estos comandos generan los archivos y su código básico automaticamente. Y registra el nuevo módulo en `app.module.ts`.
* Crear el módulo de pdfs 
* Crear el controlador (el que recibe las peticiones)
* Crear el servicio (para comunicar con la DB)
```bash
nest generate module pdfs
nest generate controller pdfs --no-spec
nest generate service pdfs --no-spec
```

### Configurar NestJS para servir los PDFs estáticos
Sin instalar `@nestjs/serve-static` y configurar el main.ts, los archivos PDF son "invisibles" para el mundo exterior. Es el "puente" que permite que los archivos viajen desde el disco duro hasta el navegador del usuario.

```bash
npm install @nestjs/serve-static
```



## Imágenes

* Se guardan en `src/assets/`.
* Hay que importar la imagen en cada componente que se vaya a utilizar.
* Se utiliza la etiqueta especial `Image`.
* Las imágenes que se guarden en ese directorio, **Astro** las optimiza autom.
* **Astro** las transforma automáticamente a `webp` y redimensiona a 400px, 800px...
* **Ahorro de datos** Esto implica una optimización automcática (para móviles, etc...).

## 🚀 Estructura del proyecto


```text
src/
├── public/
│   ├── pdfs/         # Archivos pdf
│   └── images/       # Imagenes
├── components/       # Piezas pequeñas (PdfCard.astro, Nav.astro)
├── layouts/          # (Navbar + Footer)
├── styles/           # global.css
└── pages/            # Las rutas
    ├── index.astro   # Redirigirá a /manuales o será la Home
    ├── manuales.astro # Página de Manuales
    └── fichas.astro   # Página de Ficha de Datos



backend/src/
  ├── main.ts              # Punto de entrada (CORS, Puerto)
  ├── app.module.ts        # Une todos los módulos: Nest añade PdfsModule aquí dentro
  ├── app.controller.ts
  ├── app.service.ts
  ├── common/              # (Opcional) Cosas compartidas (filtros, middlewares)
  └── pdfs/                # MÓDULO DE PDFS (Aquí ocurre la magia)
       ├── pdfs.module.ts      # Configuración del módulo
       ├── pdfs.controller.ts  # Rutas (GET /pdfs, POST /download)
       ├── pdfs.service.ts     # Lógica de negocio (Consultas a MySQL)
       └── entities/
            └── pdf.entity.ts  # Definición de la tabla de la DB (Title, Size, etc.)    
```


## 🧞 Comandos

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

| `npm run start:dev`       | Starts dev server backend `localhost:3000`      |

