//Servidor 
// RESUMEN
// ====================================================
// - http.createServer(): crea un servidor.
// - req (request): lo que envía el cliente.
// - res (response): lo que devuelve el servidor.
// - res.writeHead(): define el código HTTP y los headers.
// - res.end(): finaliza y envía la respuesta.


//// - req (request): lo que el cliente envía (método, URL, headers, body, etc.)
// - res (response): lo que el servidor responde (estado, headers, body, etc.)
import { createServer } from 'http';
import { readFile, writeFile, existsSync } from 'fs';
import { join } from 'path';
import { writeFileSync } from 'fs';

// process.cwd() devuelve la ruta actual del proyecto, donde se encuentra el archivo JS en ejecución (current working directory)
// join() que viene del módulo "path" nos ayuda a construir rutas de forma segura entre diferentes sistemas operativos

const users = [
    { id: 1, name: 'Ana', email: 'ana@mail.com' },
    { id: 2, name: 'Luis', email: 'luis@mail.com' },
    { id: 3, name: 'Carla', email: 'carla@mail.com' },
];

const productos=[
    {id: 1, producto:'libro', precio: 123  },
    {id: 2, producto:'juguete', precio: 3690  },
    {id: 3, producto:'auto', precio: 2580  }
]

const tipoUsuario=[
    {id: 1, permiso:'admi', nombre: 'Mariana'},
    {id: 2, permiso:'usuario', nombre: 'Pablo'},
    {id: 3, permiso:'usuario', nombre: 'Marco'},
    {id: 4, permiso:'admi', nombre: 'Vanessa'}
]
// filePath es la variable creada
//JSON.stringify convierte el archivo JSON a string
//user es el archivo con el que quiero escribir
// null siempre va
// 2 es el espacio que quiero que tenga
//writeFileSync(filePath, JSON.stringify(users, null, 2));
//console.log(`✅ Archivo users.json creado en:\n${filePath}`);


// Creamos el servidor con createServer()
// ----------------------------------------
// Esta función recibe un "callback" con los argumentos "req" y "res",
// que se ejecuta cada vez que llega una solicitud HTTP.
//
// Los parámetros "req" y "res" son objetos:
// - req (request): lo que el cliente envía (método, URL, headers, body, etc.)
// - res (response): lo que el servidor responde (estado, headers, body, etc.)
const filePath = join(process.cwd(), 'administrador2.json');
const server = createServer((req, res) => {
  // Usamos destructuring para acceder fácilmente al método y la URL
  // "destructuring" es una forma concisa de extraer valores de objetos o arrays.
  // Extraemos "method" y "url" del objeto "req":
const { method, url } = req;
  // También podría hacerse así:
  // const method = req.method;
  // const url = req.url;

  // Ruta raíz "/"   //endpoint
    if (method === 'GET' && url === '/') {
    // Escribimos encabezado (status + tipo de contenido)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Enviamos la respuesta final (cierra la conexión)
        res.end('Bienvido a mi servidor.');
    return;
    }

  // Ruta "/users" -> devolvemos JSON con la lista de usuarios
    if (method === 'GET' && url === '/usuarios') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(users); // Si lo enviamos así corremos el riesgo de que no se convierta a JSON correctamente
    res.end(JSON.stringify(users, null, 2)); // Convertimos el array a JSON
    return;
    }
    if (method === 'GET' && url === '/productos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(productos, null, 2));
        return;
    }
    //const administradores: crea una variable donde vamos a guardar el resultado.
    //tipoUsuario: es el array que queremos recorrer.
    //.filter(): recorre el array y filtra sus elementos.
    //user: representa cada objeto del array mientras lo recorre.
    //=>: es una función flecha (una forma corta de escribir una función).
    //user.usuario: accede a la propiedad usuario de cada objeto
    //=== 'admi': comprueba si esa propiedad es exactamente igual a 'admi'.
    if (method === 'GET' && url === '/usuarioAdmi') {
        const administradores = tipoUsuario.filter(user => user.permiso === 'admi');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(administradores, null, 2));
        return;
    }
    if (method === 'GET' && url === '/usuarioNormal') {
        const administradores = tipoUsuario.filter(user => user.permiso === 'usuario');
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(administradores, null, 2));
        return;
    }
    if (method === 'POST' && url === '/agregarUsuario') {
        let body = '';
        req.on('data', chunk => {body += chunk.toString(); });

        req.on('end', () => {
            try {
                const nuevoUsuario = JSON.parse(body);
console.log(nuevoUsuario)
                nuevoUsuario.id = tipoUsuario.length + 1;
                console.log(nuevoUsuario)
                tipoUsuario.push(nuevoUsuario);
                console.log(tipoUsuario)
                writeFile(filePath, JSON.stringify(tipoUsuario, null, 2), err => {
                if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ message: 'Error saving user' }));
                } else {
                res.writeHead(201,{ 'Content-Type': 'application/json' });
                res.end(JSON.stringify(nuevoUsuario, null, 2));
                    }
                });
            
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ message: 'Invalid JSON format' }));
            }

        });

        return;
    }

  // Si la ruta no existe -> devolvemos 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('❌ 404 - Route not found');
});

// Puerto donde el servidor va a "escuchar" solicitudes
const PORT = 3000;

// Iniciamos el servidor
server.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});


// DIFERENCIAS CLAVE
// ====================================================
// - Métodos síncronos (Sync) bloquean el hilo hasta terminar.
// - Métodos asíncronos permiten seguir ejecutando otras tareas.
// - JSON.stringify() -> objeto → texto JSON.
// - JSON.parse() -> texto JSON → objeto.

// writeFileSync(ruta, contenido)
// - "Sync" significa que el programa espera hasta que termine.
//
// JSON.stringify() convierte un objeto/array en texto JSON. (JavaScript Object Notation)
//
// JSON.stringify(value, replacer, space)
// - "value" es el objeto que queremos convertir.
// - "replacer" es una función que se ejecuta para cada propiedad del objeto.
//    Normalmente se deja null (sirve para filtrar o transformar valores).
// - "space" es el espacio que queremos que haya entre las propiedades del objeto. (para que sea legible)
// Podríamos dejar solo JSON.stringify(users) pero el resultado sería todo en una línea sin espacios.

// ====================================================
// LEER UN ARCHIVO (ASÍNCRONO)
// ====================================================
//
// readFile(ruta, codificación, callback)
// - "utf8" indica que queremos texto legible.
// - El callback recibe "err" y "data". Automático de fs.
// - "err" es un error si ocurre. Null si no hay error.
// - "data" es el contenido del archivo.



//try {
 //           const data = await readFile(filePath, 'utf8');
  //          const usuarios = JSON.parse(data);

   //         res.writeHead(200, { 'Content-Type': 'application/json' });
     //       res.end(JSON.stringify(usuarios, null, 2));
       // } catch (error) {
         //   res.writeHead(500, { 'Content-Type': 'text/plain' });
           // res.end('Error al leer usuarios');
        //}
        //return;
   // }