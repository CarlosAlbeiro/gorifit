# Resumen del Proyecto: Catálogo Virtual Pro (Cascarón)

Este es un proyecto de aplicación web de pila completa (full-stack) diseñado como un "cascarón" o plantilla para diferentes tipos de negocios y emprendimientos. La aplicación sirve como plataforma de presentación profesional y herramienta de gestión de negocio, permitiendo mostrar servicios, un catálogo de productos y facilitar el contacto automatizado mediante WhatsApp.

## Características Principales

1.  **Frontend (React + Vite)**:
    *   Diseño moderno y responsivo.
    *   Secciones dinámicas (Hero, Perfil, Servicios, Catálogo, Contacto).
    *   Filtrado de productos por categorías y marcas.
    *   Tema claro/oscuro.
    *   Integración con WhatsApp para solicitudes directas.

2.  **Backend (Node.js + Express)**:
    *   API RESTful para gestión de datos.
    *   Autenticación JWT para el panel administrativo.
    *   Gestión de archivos (imágenes de productos/servicios).
    *   Integración con WhatsApp Web JS para automatización de mensajes.

3.  **Base de Datos (PostgreSQL)**:
    *   Esquema flexible para servicios, productos, marcas y categorías.
    *   Registro de solicitudes y clientes.

4.  **Panel Administrativo**:
    *   Control total sobre el contenido del sitio.
    *   Configuración de visibilidad de secciones.
    *   Gestión de inventario y servicios.
    *   Configuración de respuestas automáticas de WhatsApp.

## Cómo empezar

1.  Configurar la base de datos usando `doc/database_schema.sql`.
2.  Configurar las variables de entorno en el backend (`.env`).
3.  Instalar dependencias y ejecutar `npm run dev` tanto en frontend como en backend.
4.  Acceder al panel `/admin` (usuario por defecto: `admin`, contraseña: `admin123`).