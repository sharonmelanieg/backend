// ====================================================
// INTRODUCCIÓN A EXPRESS.JS
// ====================================================
//
// Express.js es un framework minimalista para Node.js
// que nos facilita crear servidores web y APIs.
//
// En lugar de manejar manualmente "req" y "res" como con el módulo "http",
// Express nos da una forma más simple y ordenada de hacerlo.
//
// ====================================================
// Para ejecutar este archivo:
// Instalá Express primero con:
// npm install express
// Después ejecutá:
// node 015-ExpressIntro.js
// Y abrí http://localhost:3000 en el navegador
// ====================================================

// 1️⃣ Importamos Express
import express from 'express';

// 2️⃣ Creamos una aplicación de Express (análogo a createServer en http)
const app = express();

// 3️⃣ Middleware para interpretar JSON automáticamente
// Sin esto, Express no sabría leer los "body" en formato JSON.
app.use(express.json());

// 4️⃣ Middleware global de ejemplo
// Los MIDDLEWARES son funciones que se ejecutan ANTES de las rutas.
// Pueden usarse para verificar autenticación, validar datos, etc.
app.use((req, res, next) => {
    console.log(`📦 Middleware → ${req.method} ${req.url}`);
  next(); // ¡Importante! next() continúa hacia la siguiente función o ruta.
});

// Datos de ejemplo (simulando una base de datos)
const users = [
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Luis' },
    { id: 3, name: 'Carla' },
    ];

// 5️⃣ Ruta raíz "/"
// app.get() crea una ruta que responde a solicitudes GET.
app.get('/', (req, res) => {
    res.send('Hola');
});

// 6️⃣ Ruta GET /users
// Devolvemos un JSON de usuarios (como haría una API real)
app.get('/users', (req, res) => {
  res.json(users); // Express convierte automáticamente el objeto a JSON
});

// 7️⃣ Ruta POST /users
// Para probar esta ruta, vamos a ver como usar Postman o Thunder Client.
// Enviá un JSON en el body con un nuevo usuario.
app.post('/users', (req, res) => {
  const newUser = req.body; // Express ya parseó el JSON del body.
    console.log('Nuevo usuario recibido:', newUser);

  // En una app real lo guardaríamos en una base de datos.
  // Acá solo devolvemos el mismo objeto con un id simulado.
  newUser.id = Math.floor(Math.random() * 1000);
    res.status(201).json(newUser);
});

app.post('/usuario', (req, res) => {
    
});


// 8️⃣ Iniciamos el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor Express corriendo en http://localhost:${PORT}`);
});

// ====================================================
// CONCEPTOS CLAVE
// ====================================================
// - app.get(), app.post(), app.put(), app.delete() → Métodos HTTP
// - req.body → datos enviados por el cliente (POST, PUT...)
// - res.send() → envía texto o HTML
// - res.json() → envía respuesta JSON
// - app.use() → define middlewares globales
// ====================================================