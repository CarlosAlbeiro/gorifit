CARPETA: product_images/
========================
Esta carpeta contiene los placeholders de imágenes para los 127 productos del catálogo GF.

INSTRUCCIONES:
1. Cada archivo .placeholder indica el nombre de producto y la ruta sugerida.
2. Reemplaza cada .placeholder con la imagen real en formato .jpg con el MISMO nombre.
   Ejemplo: nitro_tech_2_lbs.placeholder → nitro_tech_2_lbs.jpg

3. Las rutas en la base de datos apuntan a: /products/<nombre_archivo>.jpg
   Configura tu servidor web (Nginx/Apache) para servir estas imágenes desde esa ruta,
   o sube las imágenes a tu CDN y actualiza el campo image_url en la BD.

FORMATO SUGERIDO:
- Resolución: 800x800 px (cuadradas)
- Formato: JPG o WebP
- Fondo: blanco o transparente (PNG si usas fondo transparente)

TOTAL: 127 productos de 15 marcas
