# Mapa de Navegación - Luisa Restrepo

Este documento describe la estructura y flujo de navegación del sitio web de Luisa Restrepo.

## 1. Vista Pública (Frontend)

El sitio es una **Single Page Application (SPA)** con navegación fluida entre secciones.

### Secciones Principales
- **Inicio (Hero)**: Carrusel de categorías destacadas (Servicios/Productos).
- **Servicios**: Listado dinámico de servicios profesionales de maquillaje con precios y descripciones.
- **Perfil**: Biografía de Luisa, estadísticas de éxito y slider multimedia (Fotos/TikTok).
- **Catálogo**: Galería de productos filtrable por marcas y categorías.
  - **Detalle de Producto**: Modal informativo con opción de solicitud vía WhatsApp.
- **Contacto**: Formulario de contacto con validación legal (Habeas Data) y mapa de ubicación.
- **Legal**: 
  - `/politica-de-privacidad`
  - `/terminos-y-condiciones`

### Flujos de Usuario
1. **Consulta de Catálogo**: Inicio -> Navegar a Catálogo -> Filtrar -> Ver Producto -> Solicitar Asesoría.
2. **Reserva/Asesoría**: Inicio -> Navegar a Contacto -> Llenar Formulario -> Envío a Backend.
3. **Redes Sociales**: Perfil -> Enlaces a Instagram, TikTok, Facebook, YouTube.

---

## 2. Vista Administrativa (Dashboard)

Acceso protegido mediante autenticación JWT.

### Rutas Admin
- `/login`: Acceso seguro para el administrador.
- `/admin`: Panel principal dividido en pestañas:
  - **General**: Control de visibilidad de secciones (On/Off).
  - **Categorías**: Gestión (CRUD) de categorías para servicios y productos.
  - **Marcas**: Gestión (CRUD) de marcas del catálogo.
  - **Servicios**: Creación y edición de servicios con carga de imágenes.
  - **Catálogo**: Gestión de productos, referencias y precios.
  - **Solicitudes**: Visualización de leads recibidos (WhatsApp, Productos, Contacto).
  - **Perfil**: Configuración de bio, foto de perfil, video de TikTok y estadísticas.
  - **Contacto**: Edición de números, correos y enlaces a redes sociales.

---

## 3. Estructura de Datos (Backend)

### Entidades
- `users`: Credenciales de administración.
- `profile`: Datos biográficos y configuración visual.
- `contact`: Información de contacto y redes sociales.
- `categories`: Clasificación de ítems.
- `brands`: Marcas de productos.
- `services`: Oferta de servicios.
- `products`: Catálogo de venta.
- `service_requests`: Captura de leads con metadatos legales.
- `site_sections`: Estado de visibilidad de la UI.
