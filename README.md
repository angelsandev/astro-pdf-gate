# Astro PDF GATE: Descarga de PDFs con validación por email

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

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

