const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:/Users/DEV.CAGG/Downloads/catalogo_byluisarestrepo.json', 'utf8'));

let sql = "-- PRODUCTOS INICIALES\n";

data.categorias.forEach(cat => {
    sql += `\n-- CATEGORIA: ${cat.categoria}\n`;
    cat.productos.forEach(p => {
        const name = p.nombre.replace(/'/g, "''");
        const reference = p.referencia ? `'${p.referencia.replace(/'/g, "''")}'` : 'NULL';
        const price = p.precio !== null ? p.precio : 'NULL';
        const notes = p.notas ? `'${p.notas.replace(/'/g, "''")}'` : 'NULL';
        const brandName = p.marca ? p.marca.replace(' Original', '').trim() : null;

        let brandIdSubquery = 'NULL';
        if (brandName) {
            brandIdSubquery = `(SELECT id FROM brands WHERE name ILIKE '%${brandName.replace(/'/g, "''")}%' LIMIT 1)`;
        }

        sql += `INSERT INTO products (category_id, brand_id, name, reference, price, notes, is_active) VALUES \n`;
        sql += `((SELECT id FROM categories WHERE name = '${cat.categoria}' LIMIT 1), ${brandIdSubquery}, '${name}', ${reference}, ${price}, ${notes}, true);\n`;
    });
});

fs.writeFileSync('c:/Users/DEV.CAGG/Desktop/luisa_restrepo/doc/insert_products.sql', sql);
console.log("SQL file generated successfully at c:/Users/DEV.CAGG/Desktop/luisa_restrepo/doc/insert_products.sql");
