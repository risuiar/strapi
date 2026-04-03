# Contexto del Proyecto - Strapi API

Este archivo proporciona contexto esencial para agentes de IA que trabajen en este repositorio.

## 🚀 Resumen del Proyecto
Este es un backend desarrollado con **Strapi v5**, que sirve como API para el ecosistema de aplicaciones (probablemente relacionado con Aconcagua, basado en el historial del usuario).

- **Framework:** [Strapi v5](https://strapi.io/)
- **Lenguaje:** JavaScript
- **Base de Datos:** PostgreSQL (en producción)
- **Almacenamiento de Medios:** AWS S3

## 🛠 Entorno y Despliegue
El proyecto **no se ejecuta localmente** de forma habitual para producción. El entorno principal es:

- **Infraestructura:** VPS gestionado por **Coolify**.
- **Método de Despliegue:** Basado en `Dockerfile`.
- **Contenerización:** Docker (Node 22).
- **Proceso de Build:** El `Dockerfile` instala las dependencias (`yarn install`), compila el admin panel (`yarn build`) y arranca el servidor (`yarn start`).

> [!IMPORTANT]
> Cualquier cambio en la configuración debe ser compatible con el `Dockerfile` y el entorno de **Coolify**.

## 📁 Estructura Clave
- `src/api/`: Contiene la lógica de negocio, controladores, servicios y rutas de las diferentes APIs.
- `src/components/`: Componentes dinámicos de Strapi.
- `config/`: Configuraciones del servidor, base de datos, plugins y middlewares.
- `Dockerfile`: Configuración de la imagen para el despliegue.

## 📝 Notas para Agentes
- **Persistencia:** Los archivos locales en el contenedor no persisten a menos que se usen volúmenes. Para medios se usa AWS S3.
- **Variables de Entorno:** Las variables críticas (`DATABASE_URL`, `AWS_ACCESS_KEY_ID`, etc.) se gestionan desde el panel de Coolify.
- **Scripts:**
  - `dev`: Desarrollo local (si se configura).
  - `build`: Compila el administrador.
  - `start`: Inicia la aplicación en modo producción.
