# Astro PDF GATE: Descarga de PDFs con validación por email
[![Astro](https://img.shields.io/badge/Astro-4.0+-orange.svg)](https://astro.build/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0-red.svg)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)](https://www.mysql.com/)
[![Status](https://img.shields.io/badge/Status-Terminado-brightgreen.svg)]()

Este proyecto es una aplicación **Full-Stack** diseñada para gestionar la descarga de manuales técnicos. El sistema no solo sirve archivos PDF, sino que actúa como un "gate" o puerta de acceso, requiriendo el registro del email del usuario antes de permitir la descarga.

## 📸 Galería del Proyecto

A continuación se muestran capturas de pantalla de la interfaz de usuario y sus funcionalidades principales:

### Vista Principal (Frontend)
![Frontend del proyecto astropdfgate](/frontend/public/images/Frontend%20del%20proyecto%20astropdfgate.png)

### Intercepción de Descarga (Modal)
![Modal Card para introducir email antes de descargar](/frontend/public/images/Modal%20Card%20para%20introducir%20email%20antes%20de%20descargar.png)

### Sistema de Validación
![Validación del email con Regexp](/frontend/public/images/Validación%20del%20email%20con%20Regexp.png)

---

## ✨ Características Principales

| Característica | Descripción |
| :--- | :--- |
| 📱 **Diseño Responsive** | Interfaz adaptada perfectamente a móviles, tablets y ordenadores. |
| 🛡️ **Validación Robusta** | Sistema de filtrado de emails mediante expresiones regulares (RegExp). |
| 🎨 **UI Moderna** | Diseño limpio con feedback visual inmediato (estados de error y éxito). |
| ⚡ **Rendimiento Máximo** | Uso de Astro para una carga instantánea y optimización de imágenes. |
| 🔍 **SEO Optimizado** | Etiquetas meta y HTML semántico para indexación en buscadores. |
| 📊 **Gestión de Datos** | Backend centralizado en NestJS con persistencia en MySQL. |

---

## 🆕 Actualizaciones Recientes

✅ **Conexión Real con DB** - Migración de datos estáticos a base de datos MySQL dinámica.  
✅ **Descarga Forzada** - Implementación de cabeceras de servidor para forzar el guardado de archivos.  
✅ **Arquitectura de Módulos** - Reestructuración del backend en módulos escalables (PdfsModule).  
✅ **Validación de Cliente** - Script de validación en tiempo real antes del envío por Axios.  
✅ **Optimización WebP** - Todas las portadas se procesan automáticamente para pesar un 80% menos.

---

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

---

## 🚀 Inicio Rápido

### Requisitos Previos
* **Node.js** 18 o superior.
* **MySQL** activo (XAMPP, Docker o local).
* **NPM** o **PNPM**.

## Instalación

**Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/astro-pdf-gate.git](https://github.com/tu-usuario/astro-pdf-gate.git)
   cd astro-pdf-gate
   ```

**⚙️ Configuración del Entorno (.env)**

Para que el backend pueda comunicarse con la base de datos y servir los archivos correctamente, es necesario crear un archivo `.env` en la raíz de la carpeta `/backend`.

** Variables requeridas:**

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `PORT` | Puerto donde correrá el servidor NestJS | `3000` |
| `DB_HOST` | Dirección del servidor de MySQL | `localhost` |
| `DB_PORT` | Puerto de conexión de MySQL | `3306` |
| `DB_USERNAME` | Usuario de la base de datos | `root` |
| `DB_PASSWORD` | Contraseña del usuario | *(Vacío)* |
| `DB_NAME` | Nombre de la base de datos | `astro_pdf_db` |

** Ejemplo de configuración:**
```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_contraseña_aqui
DB_NAME=astro_pdf_db
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

---

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

---



## Generar un módulo automaticamente con NEST
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

---

## Imágenes

* Se guardan en `src/assets/`.
* Hay que importar la imagen en cada componente que se vaya a utilizar.
* Se utiliza la etiqueta especial `Image`.
* Las imágenes que se guarden en ese directorio, **Astro** las optimiza autom.
* **Astro** las transforma automáticamente a `webp` y redimensiona a 400px, 800px...
* **Ahorro de datos** Esto implica una optimización automcática (para móviles, etc...).

## 🚀 Estructura del proyecto


```text
/
├── astro-frontend/           # PROYECTO ASTRO
│   ├── public/               # Archivos estáticos del front (favicon, etc.)
│   ├── src/
│   │   ├── assets/           # Imágenes procesadas (portadapdf.webp)
│   │   ├── components/       # PdfCard.astro, Modal.astro, etc.
│   │   ├── layouts/          # Plantilla base (Layout.astro)
│   │   ├── pages/            # Rutas: index.astro, manuales.astro, fichas.astro
│   │   ├── scripts/          # Lógica de cliente (modal.ts con Axios)
│   │   └── styles/           # Estilos globales (global.css)
│   └── package.json
│
├── nest-backend/             # PROYECTO NESTJS
│   ├── public/               # CARPETA DE DESCARGAS REALES
│   │   └── manuales/         # Aquí guarda los archivos .pdf físicos
│   ├── src/
│   │   ├── main.ts           # Configuración de Servidor, CORS y Estáticos
│   │   ├── app.module.ts     # Conexión principal a MySQL y Módulos
│   │   └── pdfs/             # Módulo de PDFs
│   │       ├── pdfs.controller.ts # Endpoints (GET /pdfs, POST /pdfs/download)
│   │       ├── pdfs.service.ts    # Consultas a la base de datos
│   │       ├── pdfs.module.ts     # Inyección de dependencias
│   │       └── entities/
│   │           └── pdf.entity.ts  # Modelo de la tabla de MySQL
│   ├── .env                  # Configuración de base de datos y puerto
│   ├── package.json
│   └── tsconfig.json         # Configuración de decoradores TS
└── README.md                 # Documentación del proyecto  
```

---
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
| `npm run start:dev`       | Starts dev server backend `localhost:3000`       |

---
## 📝 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

---

## ✍️ Autor
Hecho con ❤️ por [**Ángel Sánchez Guillén**](https://github.com/angelsandev)

[![Email](https://img.shields.io/badge/Email-geletesan@hotmail.com-red?style=flat-square&logo=gmail)](mailto:geletesan@hotmail.com)