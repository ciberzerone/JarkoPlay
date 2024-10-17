# Yarkoplay

**Yarkoplay** es una plataforma de streaming de contenido similar a Netflix donde los usuarios deben registrarse y autenticarse para acceder a películas y series. Ofrece una experiencia de usuario fluida con recomendaciones personalizadas y un catálogo que se puede filtrar por género, actores, y otros metadatos.

## Visión

La visión de Yarkoplay es convertirse en una plataforma de referencia en el mercado de streaming, brindando una experiencia segura, personalizada y eficiente, donde los usuarios puedan descubrir y disfrutar contenido audiovisual con facilidad.

## Funcionalidades Principales

- **Registro y Autenticación de Usuarios**: Los usuarios deben registrarse y autenticarse mediante correo electrónico y contraseña.
- **Login Persistente**: Mantener la sesión activa incluso después de cerrar el navegador utilizando Pinia Persist.
- **Reproducción de Contenido**: Los usuarios pueden ver películas en streaming, con la opción de continuar viendo desde donde lo dejaron.
- **Catálogo de Películas**: Los usuarios pueden buscar y filtrar el contenido por género, actores, directores, y otros metadatos.



## Tecnologías Utilizadas

- **Frontend**:
  - [Vue.js](https://vuejs.org/)
  - [Vite](https://vitejs.dev/) (Dev server)
  - [Vue Router](https://router.vuejs.org/) (Para manejo de rutas)
  - [Pinia](https://pinia.vuejs.org/) y [Pinia Persist](https://prazdevs.github.io/pinia-plugin-persist/) (Para gestión de estado y login persistente)

- **Backend**:
  - [Java](https://www.oracle.com/java/) con [Spring Boot](https://spring.io/projects/spring-boot) (Para la API y lógica de negocio)


- **Base de Datos**:
  - [Supabase](https://supabase.com/) (DBaaS, autenticación y almacenamiento de archivos)



## Estructura del Proyecto

```textplain
Yarkoplay/
├── client/                           # Proyecto frontend
│   ├── public/                       # Archivos públicos (imágenes, favicon, etc.)
│   │   ├── favicon.ico               # Icono de la plataforma
│   │   └── index.html                # Archivo HTML base
│   ├── src/                          # Código fuente del frontend (Vue.js)
│   │   ├── assets/                   # Archivos de estilo, imágenes, etc.
│   │   │   └── logo.png              # Logo de Yarkoplay
│   │   ├── components/               # Componentes Vue.js reutilizables
│   │   │   └── Navbar.vue            # Componente de la barra de navegación
│   │   ├── pages/                    # Páginas de la aplicación
│   │   │   ├── Home.vue              # Página de inicio
│   │   │   ├── Login.vue             # Página de inicio de sesión
│   │   │   ├── Register.vue          # Página de registro de usuario
│   │   │   ├── MovieDetail.vue       # Página de detalles de una película
│   │   │   └── Profile.vue           # Página de perfil del usuario
│   │   ├── router/                   # Configuración de rutas
│   │   │   └── index.js              # Definición de rutas con Vue Router
│   │   ├── store/                    # Almacenamiento de estado global (Pinia)
│   │   │   ├── index.js              # Configuración de Pinia
│   │   │   └── authStore.js          # Estado de autenticación
│   │   ├── App.vue                   # Componente principal de la aplicación
│   │   ├── main.js                   # Archivo principal de arranque
│   │   └── styles.css                # Estilos generales de la aplicación
│   ├── package.json                  # Archivo de configuración del proyecto (dependencias, scripts)
│   └── vite.config.js                # Configuración de Vite para desarrollo
├── server/                           # Proyecto backend (Java)
│   ├── src/main/                     # Código fuente principal del backend
│   │   ├── java/com/yarkoplay/       # Paquete principal del proyecto
│   │   │   ├── controllers/          # Controladores para manejar las solicitudes HTTP
│   │   │   │   ├── AuthController.java    # Controlador de autenticación
│   │   │   │   ├── MovieController.java   # Controlador de gestión de películas
│   │   │   │   └── UserController.java    # Controlador de gestión de usuarios
│   │   │   ├── models/               # Modelos de datos (entidades)
│   │   │   │   ├── User.java         # Modelo de usuario
│   │   │   │   ├── Movie.java        # Modelo de película
│   │   │   └── services/             # Servicios para la lógica de negocio
│   │   │       ├── AuthService.java  # Servicio de autenticación
│   │   │       ├── MovieService.java # Servicio de gestión de películas
│   │   │       └── UserService.java  # Servicio de gestión de usuario
│   │   ├── resources/                # Archivos de recursos
│   │   │   └── application.properties # Configuración de la aplicación (conexión con base de datos, etc.)
│   ├── pom.xml                       # Archivo de configuración de Maven (dependencias del backend)
│   └── README.md                     # Documentación del backend
├── database/                         # Archivos relacionados con la base de datos
│   ├── schema.sql                    # Esquema de la base de datos (tablas, relaciones)
│   └── seed.sql                      # Datos iniciales de ejemplo para la base de datos
├── README.md                         # Archivo README principal del proyecto
└── LICENSE                           # Archivo de licencia del proyecto


```

## Instalación y Configuración

### Prerrequisitos

- **Node.js** (v14 o superior) y **npm**: Para el frontend
- **Java 11 o superior**: Para el backend
- **Supabase**: Para la base de datos (crea una cuenta en [Supabase](https://supabase.com/))
- **Python**: Para analítica y automatización (opcional en la configuración inicial)

