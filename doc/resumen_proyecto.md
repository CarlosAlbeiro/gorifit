# Resumen del Proyecto: Luisa Restrepo

## Descripción General

Este es un proyecto de aplicación web de pila completa (full-stack) desarrollado para **Luisa Restrepo**, una maquilladora profesional independiente con sede en Medellín, Colombia. La aplicación sirve como plataforma de presentación profesional y herramienta de gestión de negocio, permitiendo mostrar servicios de maquillaje, catálogo de productos y facilitar el contacto con clientes potenciales.

La aplicación incluye un panel de administración protegido para gestionar todo el contenido del sitio sin necesidad de conocimientos técnicos.

---

## Arquitectura del Proyecto

### Estructura de Directorios

```
luisa_restrepo/
├── backend/           # Servidor API REST con Node.js y Express
│   ├── index.js     # Punto de entrada del servidor
│   ├── uploads/   # Imágenes cargadas via admin
│   └── package.json
├── frontend/        # Aplicación React con Vite
│   ├── src/
│   │   ├── components/   # Componentes reutilizables UI
│   │   ├── pages/       # Páginas principales
│   │   ├── context/    # Estado global (SiteContext)
│   │   ├── hooks/      # Hooks personalizados
│   │   ├── lib/       # Utilidades
│   │   └── data/      # Datos estáticos
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
├── doc/             # Documentación
│   ├── database_schema.sql
│   └── insert_products.sql
└── brain/           # Scripts auxiliares
```

---

## Tecnologías Utilizadas

### Frontend
| Tecnología | Propósito |
|------------|----------|
| **React 18** | Librería de UI basada en componentes |
| **Vite** | Build tool rápido para desarrollo |
| **TypeScript** | Tipado estático opcional |
| **Tailwind CSS** | Framework CSS utility-first |
| **Radix UI** | Componentes UI accesibles sin estilo |
| **React Router** | Navegación entre páginas |
| **React Hook Form** | Gestión de formularios |
| **Zod** | Validación de esquemas |
| **Recharts** | Gráficos para dashboard admin |
| **Vitest** | Pruebas unitarias |

### Backend
| Tecnología | Propósito |
|------------|----------|
| **Node.js** | Entorno de ejecución JavaScript |
| **Express.js** | Framework web para APIs REST |
| **PostgreSQL** | Base de datos relacional |
| **PG driver** | Cliente PostgreSQL para Node |
| **JWT** | Autenticación basada en tokens |
| **bcryptjs** | Hashing de contraseñas |
| **Multer** | Manejo de cargas de archivos |
| **Morgan** | Logging de solicitudes HTTP |
| **CORS** | Cross-Origin Resource Sharing |
| **Dotenv** | Variables de entorno |

### Despliegue
| Tecnología | Propósito |
|------------|----------|
| **Docker** | Contenerización de servicios |

---

## Base de Datos

### Esquema de PostgreSQL

El proyecto utiliza las siguientes tablas:

1. **users** - Usuarios administradores para autenticación
2. **site_sections** - Control de visibilidad de secciones
3. **profile** - Información profesional (nombre, bio, estadísticas)
4. **contact_info** - Datos de contacto y redes sociales
5. **brands** - Marcas de productos cosméticos
6. **categories** - Categorías unificadas (servicio/producto)
7. **services** - Servicios de maquillaje ofrecidos
8. **products** - Catálogo de productos con referencia y precio
9. **service_requests** - Solicitudes de asesoría vía WhatsApp

### Datos Iniciales

- Usuario admin: `admin` / `admin123` (demo)
- 5 secciones configurables: hero, services, catalog, profile, contact
- 30 marcas de productos cargadas
- 8 categorías de productos

---

## Funcionalidades

### Para Visitantes (Público)

- **Página de Inicio**: Carrusel de categorías destacadas
- **Sección de Servicios**: Listado de servicios con precios
- **Perfil Profesional**: Biografía, estadísticas y video de TikTok
- **Catálogo de Productos**: Filtrable por categoría y marca
- **Sección de Contacto**: Información de contacto y redes sociales
- **Botones Flotantes**: Acceso rápido a WhatsApp e Instagram
- **Diseño Responsivo**: Adaptable a móviles y escritorio

### Para Administradores (Protegido)

- **Autenticación**: Login con JWT (token de 24h)
- **Gestión CRUD**: Crear, leer, actualizar, eliminar en todas las tablas
- **Subida de Imágenes**: Carga de archivos al servidor
- **Dashboard**: Vista con gráficos y estadísticas
- **Gestión de Secciones**: Mostrar/ocultar secciones del sitio

---

## Endpoints de la API

| Método | Endpoint | Descripción | Autenticado |
|-------|----------|------------|-------------|
| POST | /api/auth/login | Iniciar sesión | No |
| POST | /api/auth/register | Crear usuario | Sí |
| GET/POST | /api/sections | Secciones del sitio | No/Sí |
| GET/POST | /api/profile | Perfil profesional | No/Sí |
| GET/POST | /api/contact | Información de contacto | No/Sí |
| GET/POST | /api/categories | Categorías | No/Sí |
| GET/POST | /api/services | Servicios | No/Sí |
| GET/POST | /api/products | Catálogo productos | No/Sí |
| GET/POST | /api/brands | Marcas | No/Sí |
| GET/POST | /api/requests | Solicitudes de servicio | No/Sí |
| POST | /api/upload | Subir imagen | Sí |

---

## Configuración

### Variables de Entorno (Backend)

```env
PORT=3050
DATABASE_URL=postgresql://...
JWT_SECRET=supersecretkey
```

### Scripts Disponibles

**Backend:**
```bash
npm start      # Iniciar servidor producción
npm run dev   # Iniciar en desarrollo (watch mode)
```

**Frontend:**
```bash
npm run dev        # Servidor desarrollo Vite
npm run build      # Build producción
npm run lint      # Linting ESLint
npm run test      # Ejecutar pruebas
npm run test:watch # Pruebas en watch mode
```

---

## Características Destacadas

1. **Panel de Administración Completo**: Gestiona todo el contenido desde una interfaz gráfica
2. **Categorías Unificadas**: Las categorías sirven tanto para productos como servicios
3. **Diseño Profesional**: Apariencia elegante adaptada al sector belleza
4. **WhatsApp Integration**: Facilita contacto directo con clientes
5. **Estadísticas Visuales**: Muestra años de experiencia, clientes atendidos, productos y premios
6. **SEO-Friendly**: Meta tags configurables para redes sociales

---

## Posibles Mejoras Futuras

- internacionalización (i18n)
- Blog / Sección de artículos
- Sistema de reservas en línea
- Carrito de compras para productos
- Chat en vivo
- Galería de trabajosrealizados
- Testimonios de clientes
- Newsletter por email

---

## Conclusión

Este proyecto es una solución web profesional completa para una maquilladora independiente. Combina un frontend moderno y atractivo con un backend robusto, todo desplegable mediante Docker. El código sigue buenas prácticas de desarrollo y es fácil de mantener y extender.