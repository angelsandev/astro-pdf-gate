# Astro PDF GATE: Descarga de PDFs con validación por email

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## Instalaciones necesarias

### Frontend
* Instalar axios
```bash
npm install axios
```

### Backend
* Instalar librería para leer el .env
```bash
npm install @nestjs/config
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

