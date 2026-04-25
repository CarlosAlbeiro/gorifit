# Documentación Técnica - Luisa Restrepo Web

## Arquitectura General
El proyecto sigue una arquitectura **Client-Server** moderna:
- **Frontend**: React + Vite + Tailwind CSS + Lucide React.
- **Backend**: Node.js + Express + PostgreSQL.
- **Autenticación**: JWT (JSON Web Tokens).

---

## Frontend (src/)

### 1. Contexto Global (`context/SiteContext.tsx`)
Es el corazón del frontend. Centraliza:
- El estado de todos los datos del sitio (perfil, productos, servicios).
- Funciones de sincronización con el backend.
- Lógica de autenticación (Login/Logout).
- **getMediaUrl**: Helper crítico para resolver rutas de imágenes dinámicamente entre entornos (Local/Despliegue).

### 2. Componentes Clave
- **Navbar**: Navegación principal con scroll suave y toggle de modo oscuro.
- **StatusPages**: Manejo de estados de carga y error (offline).
- **AestheticEffects**: Sistema de partículas flotantes temáticas (maquillaje) para mejorar el diseño premium.
- **ProductRequestModal**: Gestión de leads específicos para productos con validación legal.

### 3. Administración (`pages/Admin.tsx`)
Panel unificado con pestañas para gestión CRUD. Utiliza componentes de **Shadcn UI** para una experiencia profesional. Incluye previsualización de imágenes en tiempo real.

---

## Backend (index.js)

### 1. Seguridad
- **Middlewares**: `cors`, `helmet`, `morgan`.
- **JWT**: Protección de rutas administrativas mediante `authenticateToken`.
- **Bcrypt**: Encriptación de contraseñas de administrador.

### 2. Gestión de Archivos
- **Multer**: Configurado para recibir y almacenar imágenes en la carpeta `uploads`.
- **Rutas Estáticas**: El servidor sirve la carpeta `uploads` directamente para permitir acceso a los assets.

### 3. Base de Datos
- Utiliza un `Pool` de conexiones de `pg`.
- **CRUD Genérico**: Función `createCrudRoutes` para automatizar las operaciones básicas de las tablas estándar, reduciendo el código repetitivo.
- **Endpoints Especiales**:
  - `/api/public-requests`: Captura de leads con metadata (IP, fecha, consentimiento).
  - `/api/profile`: Gestión biográfica.

---

## Despliegue y Configuración
- **Variables de Entorno**:
  - `VITE_API_URL`: (Frontend) Dirección pública del backend.
  - `DATABASE_URL`: (Backend) Conexión a PostgreSQL.
- **Imágenes**: Se almacenan localmente en el servidor. En despliegues como Docker, se recomienda persistir la carpeta `uploads`.
