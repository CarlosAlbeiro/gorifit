# Plan de Implementación Legal — Sitio Web Maquilladora
> **Marco legal:** Ley 1581 de 2012 · Decreto 1377 de 2013 · Ley 527 de 1999 (Colombia)
> **Tipo de responsable:** Persona natural independiente
> **Finalidad del tratamiento:** Asesorías e información de servicios vía WhatsApp

---

## Índice

1. [Estructura de páginas legales](#1-estructura-de-páginas-legales)
2. [Componentes en el formulario de captura](#2-componentes-en-el-formulario-de-captura)
3. [Cambios en el backend](#3-cambios-en-el-backend)
4. [Flujo de consentimiento (end-to-end)](#4-flujo-de-consentimiento-end-to-end)
5. [Checklist de cumplimiento](#5-checklist-de-cumplimiento)
6. [Mantenimiento y actualizaciones](#6-mantenimiento-y-actualizaciones)

---

## 1. Estructura de páginas legales

### 1.1 `/politica-de-privacidad`
**Prioridad:** 🔴 Alta — Obligatoria por Ley 1581

Página estática con el texto completo de la Política de Privacidad y Tratamiento de Datos Personales.

**Secciones que debe contener el texto:**

| Sección | Contenido |
|---|---|
| Identificación del responsable | Nombre completo, ciudad, correo de contacto |
| Datos que se recolectan | Número de teléfono (y cualquier otro campo del formulario) |
| Finalidad del tratamiento | Envío de asesorías e información de servicios vía WhatsApp |
| Terceros con acceso | Plataforma de envío de mensajes si aplica |
| Derechos del titular | Conocer, actualizar, rectificar y suprimir sus datos |
| Canal para ejercer derechos | Correo o teléfono de contacto directo |
| Vigencia | Tiempo que se conservan los datos en la base |
| Fecha de versión | Versión `v1.0 — [fecha de publicación]` |

**Implementación sugerida:**
```
src/
  pages/
    politica-de-privacidad.jsx   ← o .html / .vue según el stack
```

La página debe ser **indexable** por buscadores (no bloquear en robots.txt) y accesible sin login.

---

### 1.2 `/terminos-y-condiciones`
**Prioridad:** 🟡 Media — Recomendado, no obligatorio por ley

Página estática con los Términos y Condiciones de uso del sitio.

**Secciones que debe contener:**

- Descripción del sitio y sus servicios
- Carácter referencial de precios en catálogo
- Aclaración de que la asesoría vía WhatsApp es informativa, no un contrato de servicio
- Limitación de responsabilidad
- Legislación aplicable: República de Colombia

---

### 1.3 Footer del sitio
**Prioridad:** 🔴 Alta

El footer de **todas las páginas** debe incluir los siguientes enlaces:

```
[ Política de Privacidad ]   [ Términos y Condiciones ]
© [Año] [Nombre de la maquilladora] — Todos los derechos reservados
```

Esto garantiza que las páginas legales sean accesibles desde cualquier punto del sitio.

---

## 2. Componentes en el formulario de captura

### 2.1 Campo de teléfono
Sin cambios en su estructura. Asegurarse de que el `name` o campo en el body del request se llame de forma clara (ej. `phoneNumber`) para consistencia con el backend.

### 2.2 Checkbox de autorización ⚠️
**Este es el elemento más crítico del formulario.**

Debe aparecer **inmediatamente debajo** del campo de teléfono, antes del botón de envío.

**Requisitos del checkbox:**
- No puede estar pre-marcado por defecto (`checked={false}`)
- El botón de envío debe estar **deshabilitado** hasta que el usuario lo marque
- Debe incluir un enlace directo a `/politica-de-privacidad`

**Texto sugerido del label:**
```
☐ Autorizo el tratamiento de mi número de teléfono para recibir 
asesorías e información de servicios vía WhatsApp, conforme a la 
[Política de Privacidad].
```

**Ejemplo de implementación (React/JSX):**
```jsx
const [accepted, setAccepted] = useState(false);

<label>
  <input
    type="checkbox"
    checked={accepted}
    onChange={(e) => setAccepted(e.target.checked)}
  />
  {" "}Autorizo el tratamiento de mi número de teléfono para recibir
  asesorías e información vía WhatsApp, conforme a la{" "}
  <a href="/politica-de-privacidad" target="_blank">
    Política de Privacidad
  </a>.
</label>

<button type="button" disabled={!accepted} onClick={handleSubmit}>
  Quiero ser contactada
</button>
```

---

## 3. Cambios en el backend

### 3.1 Campos adicionales en la base de datos

Junto al número de teléfono, se deben registrar los siguientes campos para **evidenciar el consentimiento** ante una eventual revisión de la SIC:

| Campo | Tipo | Descripción |
|---|---|---|
| `phone_number` | `VARCHAR` | Número de teléfono del usuario |
| `consent_given` | `BOOLEAN` | `true` si marcó el checkbox |
| `consent_date` | `TIMESTAMP` | Fecha y hora exacta del registro |
| `ip_address` | `VARCHAR` | IP desde donde se realizó el registro |
| `policy_version` | `VARCHAR` | Versión de la política aceptada (ej. `v1.0`) |
| `source` | `VARCHAR` | Canal de captura, siempre `"web"` en este caso |

**Ejemplo de tabla SQL:**
```sql
CREATE TABLE subscribers (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  phone_number  VARCHAR(20)  NOT NULL,
  consent_given BOOLEAN      NOT NULL DEFAULT FALSE,
  consent_date  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address    VARCHAR(45),
  policy_version VARCHAR(10) NOT NULL DEFAULT 'v1.0',
  source        VARCHAR(20)  NOT NULL DEFAULT 'web'
);
```

---

### 3.2 Lógica en el endpoint de registro

El backend debe **validar** que el campo `consentGiven` sea `true` antes de guardar el número. Si no lo es, rechazar el request con `400 Bad Request`.

**Ejemplo de validación en Express (Node.js):**
```javascript
router.post('/subscribe', async (req, res) => {
  const { phoneNumber, consentGiven, policyVersion } = req.body;
  const ipAddress = req.ip || req.headers['x-forwarded-for'];

  // Validación de consentimiento
  if (!consentGiven) {
    return res.status(400).json({
      error: 'Se requiere autorización de tratamiento de datos.'
    });
  }

  // Guardar en base de datos
  await db.query(
    `INSERT INTO subscribers 
      (phone_number, consent_given, ip_address, policy_version, source)
     VALUES (?, ?, ?, ?, 'web')`,
    [phoneNumber, true, ipAddress, policyVersion || 'v1.0']
  );

  return res.status(201).json({ message: 'Registro exitoso.' });
});
```

---

### 3.3 Endpoint de baja (derecho de supresión)

La Ley 1581 garantiza al usuario el derecho a **solicitar la eliminación de sus datos**. Se recomienda implementar un endpoint básico para esto:

```
DELETE /unsubscribe?phone=573001234567
```

O, como alternativa más sencilla para el MVP, habilitar un correo de contacto visible en la Política de Privacidad donde el usuario pueda solicitarlo manualmente.

---

## 4. Flujo de consentimiento (end-to-end)

```
Usuario ingresa número de teléfono
        │
        ▼
Marca checkbox de autorización
        │
        ▼
Se habilita el botón de envío
        │
        ▼
Frontend envía:  { phoneNumber, consentGiven: true, policyVersion: "v1.0" }
        │
        ▼
Backend valida consentGiven === true
        │
        ▼
Registra en DB: número + fecha + IP + versión de política
        │
        ▼
Respuesta 201 → UI muestra confirmación al usuario
        │
        ▼
[Futuro] Sistema de mensajería envía asesoría por WhatsApp
```

---

## 5. Checklist de cumplimiento

Usar esta lista antes de publicar el sitio en producción:

### Páginas legales
- [ ] Página `/politica-de-privacidad` publicada y accesible sin login
- [ ] Página `/terminos-y-condiciones` publicada
- [ ] Footer en todas las páginas con enlaces a ambas páginas
- [ ] Fecha de versión visible en la Política de Privacidad

### Formulario
- [ ] Checkbox de autorización presente y no pre-marcado
- [ ] Botón de envío deshabilitado hasta aceptar el checkbox
- [ ] Enlace a Política de Privacidad en el texto del checkbox
- [ ] El formulario no envía si `consentGiven` es `false`

### Backend
- [ ] Tabla `subscribers` con campos de evidencia de consentimiento
- [ ] Endpoint valida `consentGiven === true` antes de guardar
- [ ] IP del usuario se registra correctamente
- [ ] `policy_version` se guarda con cada registro
- [ ] Canal de baja disponible (endpoint o correo en política)

### Buenas prácticas adicionales
- [ ] HTTPS habilitado en el dominio (obligatorio para transmitir datos personales)
- [ ] Base de datos con acceso restringido (no expuesta públicamente)
- [ ] Respaldo periódico de la base de datos

---

## 6. Mantenimiento y actualizaciones

### Cuándo actualizar la Política de Privacidad

Se debe actualizar y publicar una nueva versión (`v1.1`, `v2.0`, etc.) si:

- Se añaden nuevos tipos de mensajes (ej. promociones, citas)
- Se integra un tercero para el envío de mensajes
- Se recolectan datos adicionales (nombre, correo, etc.)
- Cambia el responsable del tratamiento

### Al actualizar la política

1. Cambiar la constante `POLICY_VERSION` en el frontend al nuevo número de versión
2. Actualizar la fecha de versión en el texto de la página
3. Los registros **anteriores** conservan la versión con la que fueron captados — esto es correcto y esperado

---

> **Nota:** Este plan cubre el cumplimiento mínimo recomendado para persona natural en Colombia bajo la Ley 1581 de 2012. Para escalar el negocio (múltiples clientes, base de datos grande, campañas masivas), se recomienda consultar a un abogado especializado en protección de datos o registrar la base de datos ante la SIC.
