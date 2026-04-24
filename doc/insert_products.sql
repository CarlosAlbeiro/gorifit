-- PRODUCTOS INICIALES

-- CATEGORIA: Brochas
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Kit de Brochas de Ojos x7 Ice Cream', NULL, 12000, 'Se envían colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Sweer Beuty%' LIMIT 1), 'Kit de Brochas Makeup Brush x15', 'OH25-13', 30000, 'Se envían colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Kit de Brochas, Encrespador y Esponja', NULL, 44000, 'Se envían colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), NULL, 'Kit de Brochas Negras + Accesorios', NULL, 60000, 'Disponible solo en negro', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Maange%' LIMIT 1), 'Kit de Brochas Maange x20 Cosmetiquera', NULL, 60000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Cosmetiquera Brillante + Kit de Brochas', NULL, 50000, 'Se envía colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Fluffy', '669', 50000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Fluffy', '670', 50000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Fluffy', '671', 50000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Fluffy', '673', 50000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Fluffy', '674', 50000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Fluffy', '675', 50000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Fluffy', '676', 50000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Viajero Luna Pink', '661', 60000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Kit de Brochas Viajero Luna Pink', '662', 60000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Lula%' LIMIT 1), 'Kit de Brochas Marmol Lula x30', NULL, 150000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Lula%' LIMIT 1), 'Kit de Brochas Rosadas Lula x30', NULL, 150000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Brocha de Corrector', 'OH25-27', 7000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Brocha Difuminadora Morada', 'OH-25', 3000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Brocha Corrector B71', 'B71', 10000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Brocha para Polvo y Rubor B75', 'B75', 16500, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Brocha de Cejas Orgánicas', NULL, 12000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Brocha para Cejas Doble B14', 'B14', 8000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Brochas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Brocha Duo Glam para Difuminar DB08', 'DB08', 11000, NULL, true);

-- CATEGORIA: Paletas de Ojos
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Paleta Luxury Pink', 'REF 1', 30000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Paleta Luxury Coral', 'REF 2', 30000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Paleta Luxury Magenta', 'REF 3', 30000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Engol%' LIMIT 1), 'Paleta Macchiato', 'REF 1', 18000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Engol%' LIMIT 1), 'Paleta Medellín', NULL, 32000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Engol%' LIMIT 1), 'Paleta Leyenda', NULL, 40000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Engol%' LIMIT 1), 'Paleta Ferias y Fiestas', NULL, 24000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Rose%' LIMIT 1), 'Paleta de Rostro Pantera Rosa Melu', NULL, 25500, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta Multiusos Story Time', NULL, 100000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta Classic', NULL, 75000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta Art Deco', NULL, 35000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta Majestic', NULL, 60000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta Atemporal', NULL, 60000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta Birds', NULL, 60000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Paletas de Ojos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta Hawaii', NULL, 60000, NULL, true);

-- CATEGORIA: Labiales, Tintas y Brillos
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Engol%' LIMIT 1), 'Lip Tint con Llavero', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Oil Tinted', 'Tono 4 - Cherry Bliss', 27000, 'Disponible solo el tono 4', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Oil', 'Cherry Bliss', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Oil', 'Sugar Kiss', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Oil Shimmer', 'Cherry Glaze', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Oil Shimmer', 'Candy Glaze', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Oil', 'Candy Pink', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Oil', 'Soft Red', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Bloom Lip Kip', 'REF 04', 18000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Gloss Bloom Duo', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Blooming Jelly', 'Caramelized / Lolly / Honey Peach', 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Bloom Lip Coco Nut', NULL, 13000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Lluvia de Estrellas%' LIMIT 1), 'Beauty Lips Brunette', NULL, 25000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Balm', 'Coconut', 25000, 'Tono cherry agotado', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Balm Mask', 'Blossom Cherry / Watermelon', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Lip Balm con Péptidos', 'Cherry Spark / Pink Sugar / Sweetvanilla / Coolmint', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Samy%' LIMIT 1), 'Bálsamo para Labios con Péptidos', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ayenea%' LIMIT 1), 'Click Lipstick', NULL, 22900, 'Tono Cocoa agotado', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Rose%' LIMIT 1), 'Lip Oil Gloss Hidratante', NULL, 13650, 'Colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Girly%' LIMIT 1), 'Voluminizador Ice', NULL, 26000, 'Colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Girly%' LIMIT 1), 'Voluminizador Hot', NULL, 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Trendy%' LIMIT 1), 'Gloss Cotton Candy', NULL, 15000, 'Colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Comfort Lip Oil', '1 / 2 / 3 / 4', 25000, 'Colores surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Labiales, Tintas y Brillos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Paleta de Labios Kiss Love', NULL, 18000, NULL, true);

-- CATEGORIA: Iluminadores, Rubores y Contornos
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Iluminador 1st Scene', 'Amber / Goldie (Granate y Soft Dream agotados)', 25000, 'Disponible en 4 tonos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Iluminador en Barra', 'Sunshine / Taffy', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Iluminador en Barra (Tamaño Viajero)', NULL, 19900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Paleta de Bronceador, Rubor e Iluminador Light Set', NULL, 60000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Paleta Pequeña Light Set', 'Carlota', 59800, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Paleta Pequeña Light Set', 'Leticia', 59800, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ani-K%' LIMIT 1), 'Contorno Líquido', '01 Mocca Mamí / 02 Hollywood Vibes / 03 Goddess / 04 Amber Dreams', 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Bronzer Compacto Sublime', 'Clay / Shade / Dune / Sahara', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Montoc%' LIMIT 1), 'Contorno Líquido Humide', 'Hidra Contour / Amber', 35000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Rubor en Trio Velvet', 'REF 07', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Rubor en Trio Velvet', 'REF 06', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Contorno en Barra', 'Tosted Coconut (Terranova agotado)', 32000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Contorno en Barra (Tamaño Viajero)', NULL, 19900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Contorno en Barra Sublime', 'Basalt / Wet Sand', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Samy%' LIMIT 1), 'Paleta de Correctores Light Medium', NULL, 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta de Iluminadores y Contornos Glam Black', NULL, 36000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta HD Skin de Correctores, Contornos e Iluminadores', NULL, 95000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Rubor Blush Shell Matte', NULL, 18900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Sagui%' LIMIT 1), 'Duo Rubor Matte y Satinado', '627 / 628 / 629', 13000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Sagui%' LIMIT 1), 'Rubor Trio', '599 / 600 / 601', 18000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ani-K%' LIMIT 1), 'Rubor Líquido', '01 Lily / 02 Ellie / 03 Zoe / 04 Rose / 05 Pink Crush / 06 Martini / 07 Sangria', 21000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Rubor en Stick Sublime', 'Sun Baked / Oas Flame / Cranberry Juice / Caoba Dream', 29900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Original%' LIMIT 1), 'Gel Göt2b Amarillo Pequeño 35g', NULL, 23000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta de Rubores en Crema x9 Creamy Cheeks', NULL, 95000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta de Rubores Atemporal Makeup Expert', NULL, NULL, 'AGOTADO', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Iluminadores, Rubores y Contornos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta de Rubores Glamblack', NULL, NULL, 'AGOTADO', true);

-- CATEGORIA: Cejas y Pestañas
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Rose%' LIMIT 1), 'Pestañina Tropico', NULL, 17000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Pestañina Café 1st Scene', NULL, 20000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Pestañina Micro Fibras', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Pestañina Maxi Volumen Silicon', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Pestañina Profesional', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Pestañina Maxi Volumen', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Pestañina Profesional Silicon', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Pestañina Profesional Silicon Café', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Aceite para Pestañas', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bioaqua%' LIMIT 1), 'Suero para Crecimiento de Cejas y Pestañas', NULL, 7000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Dolce Bella%' LIMIT 1), 'Aceite para Cejas y Pestañas', NULL, 18000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Engol%' LIMIT 1), 'Pestañina Long Lasting', NULL, 9900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Girly%' LIMIT 1), 'Pestañina I''m Girly', NULL, 20000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ame%' LIMIT 1), 'Gel de Cejas', NULL, 32000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Rose%' LIMIT 1), 'Gel de Cejas Melu', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta de Cejas Native', NULL, 37000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Dolce Bella%' LIMIT 1), 'Delineador en Plumón', NULL, 13000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ame%' LIMIT 1), 'Delineador en Plumón', NULL, 23000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Prosa%' LIMIT 1), 'Tratamiento de Pestañas', NULL, 14000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Sara Marínes%' LIMIT 1), 'Pestañas Individuales', 'REF 109', 8000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Sara Marínes%' LIMIT 1), 'Pestañas Individuales', 'REF 110', 8000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Sara Marínes%' LIMIT 1), 'Pestañas x5', 'REF 109', 20000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Sara Marínes%' LIMIT 1), 'Pestañas x8', 'REF 109', 32000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%WEes%' LIMIT 1), 'Pestañas Empoderada x10', NULL, 38000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%WEes%' LIMIT 1), 'Pestañas Encantadora x10', NULL, 38000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%WEes%' LIMIT 1), 'Pestañas en Par Empoderada', '#3D2', 10000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Cejas y Pestañas' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%WE%' LIMIT 1), 'Pestañas en Par Creativa', NULL, 10000, NULL, true);

-- CATEGORIA: Polvos Sueltos
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Girly%' LIMIT 1), 'Polvo Suelto Grande', 'Tono 01 / 02 / 03', 35500, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Girly%' LIMIT 1), 'Polvo Suelto Mini', 'Tono 01 / 02 / 03', 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ame%' LIMIT 1), 'Polvo Suelto Rosado Stay Pink', NULL, 17000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Raquel%' LIMIT 1), 'Polvo Suelto Mineral', '1 / 1A / 4 / 2', 19000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Elaya%' LIMIT 1), 'Polvo Suelto Translúcido', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Rose%' LIMIT 1), 'Polvo Translúcido Feels', NULL, 25000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Rose%' LIMIT 1), 'Polvo Banana Feels', NULL, 25000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ame%' LIMIT 1), 'Polvo Facial Suelto', 'Tono 01 / 02', 25000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ani-K%' LIMIT 1), 'Polvo Suelto Bonita', 'Tono 3 Confetti', 29000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ani-K%' LIMIT 1), 'Polvo Suelto Bonita', 'Tono 4 Cinnamon', 29000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Polvo Grande Suelto Banana', NULL, 59000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Polvo Mini Suelto Banana', NULL, 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Polvo 1st Scene 35g', NULL, 48000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Polvo Suelto Rosado 1st Scene', NULL, NULL, 'AGOTADO', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Paleta de Polvos Natural Touch', NULL, 70000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Dolce Bella%' LIMIT 1), 'Base Matte', NULL, 17000, 'Múltiples variantes de tono', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Base 1st Scene 30ml', NULL, 32000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Base 1st Scene 50ml', NULL, 42000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ani-K%' LIMIT 1), 'Base Ani-K 2 en 1', '0.0 / 0.1 / 0.2 / 0.3 / 0.4 / 0.5 / 0.6', 35000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%OG%' LIMIT 1), 'Base Aqua Smooth', 'Tono 04', 36000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Polvos Sueltos' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%OG%' LIMIT 1), 'Base Stay Matte', 'Tono 420 / 525 / 620', 42000, NULL, true);

-- CATEGORIA: Productos Corporales
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Exfoliante Importado', 'Piña Colada 350ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Exfoliante Importado', 'Girlboss 350ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Gel de Ducha', 'Strawberry 300ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Gel de Ducha', 'Piña Colada 300ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Gel de Ducha', 'Bubble Gum 300ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Gel de Ducha', 'Water Melon 300ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Gel de Ducha', 'Caramel Crush 300ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Gel de Ducha', 'Candy Bum 300ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Gel de Ducha', 'Girl Boss 300ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Pequeña', 'Caramel Crush 50g', 13000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Grande', 'Caramel Crush 250ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Pequeña', 'Water Melon 50g', 13000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Grande', 'Water Melon 250ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Pequeña', 'Candy Bum 50g', 13000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Grande', 'Bubble Gum 250ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Grande', 'Girl Boss 250ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Importada Grande', 'Piña Colada 250ml', 28000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash Importado Pequeño', 'Bubble Gum 100ml', 17000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash Importado Pequeño', 'Caramel Crush 100ml', 17000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash Importado Grande', 'Piña Colada 200ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash Importado Grande', 'Water Melon 200ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash Importado Grande', 'Caramel Crush 200ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash Importado Grande', 'Bubble Gum 200ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Maracuyazo 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla Pequeña', 'Maracuyazo 50g', 12000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Sweet Lychee 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Birthday Cake 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Honey Glow 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Addiction Girl 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Girl Boss 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Coconut Shine 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Sexy Champagne 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Watermelon Glow 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Candy Bum 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mantequilla', 'Vainilla Chill 220ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mini Splash Birthday Cake', NULL, 16000, 'AGOTADO', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mini Splash Vainilla Dreams', NULL, 16000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Mini Splash Addiction Girl', NULL, 16000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash', 'Water Melon 250ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash', 'Addiction Girl 250ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash', 'Vainilla Dreams 250ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Purpure%' LIMIT 1), 'Splash', 'Coconut Shine 250ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Exfoliante de Azúcar', 'Green Glow', 38000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Exfoliante de Azúcar', 'Euphoria', 38000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Exfoliante de Azúcar', 'Mango Pop', 38000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Gel Exfoliante', 'Maracuyá 350ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Gel Exfoliante', 'Chocolate 350ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Gel Exfoliante', 'Café 350ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Gel Exfoliante', 'Sandía 350ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Gel Exfoliante', 'Fresa 350ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Gel Exfoliante', 'Kiwi 350ml', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Mantequilla', 'Chiffon', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Mantequilla', 'Bombshell', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Mantequilla', 'Bombombun', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Mantequilla', 'Pure Seduction', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Crema Corporal', 'Mango Pop', 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Crema Corporal', 'Tropical Dream', 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Crema Corporal', 'Euphoria', 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Crema Corporal', 'Green Glow', 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Crema Corporal', 'Boomberry', 22000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Splash Corporal', 'Mango Pop', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Splash Corporal', 'Tropical Dream', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Splash Corporal', 'Green Glow', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Splash Corporal', 'Euphoria', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Vive Beauty%' LIMIT 1), 'Splash Corporal', 'Boomberry', 26000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%By Yaja%' LIMIT 1), 'Mantequilla Corporal Dorada Glow Shine', NULL, 30000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%By Yaja%' LIMIT 1), 'Mantequilla Corporal Rosada Glow Shine', NULL, 30000, 'AGOTADA', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Fantiluna%' LIMIT 1), 'Iluminador Corporal Bronzer', 'Pink / Bronze / Gold', 16000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%By Yaja%' LIMIT 1), 'Splash Corporal Rosado Glow Shine', NULL, 25000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%By Yaja%' LIMIT 1), 'Splash Corporal Dorado Glow Shine', NULL, 25000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Productos Corporales' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Fantiluna%' LIMIT 1), 'Exfoliantes Doble Color', 'Bon Bon / Explosión Tropical / Sandía (Capuchino agotado)', 20000, NULL, true);

-- CATEGORIA: Esponjas y Accesorios
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Kit Esponjas Conejito x12', NULL, 15000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Esponja Kiss Me Grande', 'OH25-31', 6000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Atenea%' LIMIT 1), 'Esponjas Mini x3', NULL, 7000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Paquete de Esponjas Mini x5', NULL, 3500, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Borlas Powder Puff x4', NULL, 6000, 'Colores aleatorios', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Borlas Powder Puff x2', NULL, 4000, 'Colores aleatorios', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Face%' LIMIT 1), 'Borlas Mini x3', NULL, 2500, 'Colores aleatorios', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Cosmetiquera Cuadrada Vicsec Bag', 'OH25-108', 14000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Maleta Doble Cierre Marmol Negra', NULL, 120000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Maleta Doble Cierre Marmol Blanca', NULL, 120000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Parches para Acné de Estrellitas', NULL, 4000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), NULL, 'Cosmetiquera Grande Aumeekai', NULL, 19000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Original%' LIMIT 1), 'Papelitos Antigrasa de Animalitos', NULL, 3500, 'Llegan surtidos', true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%MYK%' LIMIT 1), 'Espejo Grande', NULL, 10000, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Ruby Rose%' LIMIT 1), 'Papelitos Antigrasa Pantera Rosa Melu', NULL, 8900, NULL, true);
INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES 
((SELECT id FROM categories WHERE name = 'Esponjas y Accesorios' LIMIT 1), (SELECT id FROM brands WHERE name ILIKE '%Bloomshell%' LIMIT 1), 'Paleta Mezcladora Corazón', NULL, 11000, NULL, true);
