-- Script de creación de base de datos para Luisa Restrepo Website
-- Motor recomendado: PostgreSQL

-- LIMPIEZA
DROP TABLE IF EXISTS service_requests CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS brands CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS contact_info CASCADE;
DROP TABLE IF EXISTS profile CASCADE;
DROP TABLE IF EXISTS site_sections CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 0. Usuarios para autenticación
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 1. Configuración de visibilidad de secciones
CREATE TABLE site_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_name VARCHAR(50) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Perfil profesional
CREATE TABLE profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    bio TEXT,
    image_url TEXT,
    stats_years VARCHAR(20) DEFAULT '8+',
    stats_clients VARCHAR(20) DEFAULT '500+',
    stats_products VARCHAR(20) DEFAULT '120+',
    stats_awards VARCHAR(20) DEFAULT '15',
    tiktok_video_url TEXT,
    is_active BOOLEAN DEFAULT true,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Información de contacto
CREATE TABLE contact_info (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    whatsapp TEXT,
    instagram_url TEXT,
    instagram_active BOOLEAN DEFAULT true,
    tiktok_url TEXT,
    tiktok_active BOOLEAN DEFAULT true,
    facebook_url TEXT,
    facebook_active BOOLEAN DEFAULT true,
    youtube_url TEXT,
    youtube_active BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Marcas de productos
CREATE TABLE brands (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    logo_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Categorías unificadas
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('service', 'product')),
    icon VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Servicios
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Productos del catálogo
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    brand_id UUID REFERENCES brands(id) ON DELETE SET NULL,
    name VARCHAR(150) NOT NULL,
    reference VARCHAR(100),
    notes TEXT,
    description TEXT,
    price DECIMAL(10, 2),
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Solicitudes de asesoría (WhatsApp)
CREATE TABLE service_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone VARCHAR(20) NOT NULL,
    location TEXT,
    request_date DATE DEFAULT CURRENT_DATE,
    request_time TIME DEFAULT CURRENT_TIME,
    status VARCHAR(20) DEFAULT 'pendiente',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- DATOS INICIALES
INSERT INTO users (username, password) VALUES ('admin', '$2b$10$LAiUy84l0hoZEzX3rk1vRu4VpmU9WYMFP5SS5FmfCftFE19nnwRRy'); -- pass: admin123 (demo)

INSERT INTO site_sections (section_name, is_active) VALUES 
('hero', true), ('services', true), ('catalog', true), ('profile', true), ('contact', true);

INSERT INTO profile (name, bio, is_active) VALUES 
('Luisa Restrepo', 'Maquilladora profesional apasionada por resaltar la belleza natural...', true);

INSERT INTO contact_info (phone, email, address, instagram_url) VALUES 
('+57 300 000 0000', 'hola@luisarestrepo.com', 'Medellín, Colombia', 'https://instagram.com/luisarestrepo');

-- Marcas (Del JSON)
INSERT INTO brands (name) VALUES 
('Atenea'), ('Bloomshell'), ('Trendy'), ('Ruby Rose'), ('Ani-K'), ('Montoc'), ('Girly'), ('Engol'), ('Ruby Face'), ('Sweer Beuty'), ('Maange'), ('Lula Original'), ('Samy Original'), ('Lluvia de Estrellas Original'), ('Girly Original'), ('Vive Beauty Original'), ('Sara Marín Originales'), ('WE Originales'), ('OG Original'), ('Purpure Original'), ('Ame Original'), ('Dolce Bella Original'), ('Raquel Original'), ('Elaya Original'), ('Bioaqua Original'), ('Prosa Original'), ('Sagui Original'), ('By Yaja Original'), ('Fantiluna Original'), ('MYK Original');

-- Categorías (Del JSON)
INSERT INTO categories (name, type, icon) VALUES 
('Brochas', 'product', '🖌️'),
('Paletas de Ojos', 'product', '🎨'),
('Labiales, Tintas y Brillos', 'product', '💄'),
('Iluminadores, Rubores y Contornos', 'product', '✨'),
('Cejas y Pestañas', 'product', '👁️'),
('Polvos Sueltos', 'product', '☁️'),
('Productos Corporales', 'product', '🧼'),
('Esponjas y Accesorios', 'product', '🎒');