
import express from 'express';

//// 014 - Async/Await


// async/await permite escribir código asíncrono “como si fuera paso a paso”.
// Detrás de escena, sigue usando promesas, pero con una sintaxis más legible.
console.log("1")

setTimeout(() =>{
    console.log("2")
}, 2000)

console.log("3")


//callback
function sayHelloLater(name, callback) {
    console.log("Espera: ")
    setTimeout(() => {
    callback("Hola"+" "+name) 
    }, 1000);
}


sayHelloLater("Diego", (mensaje)=>{console.log(mensaje)})



function showMessages() {
    setTimeout(() => {
    console.log("1");
    setTimeout(() => {
    console.log("2");
    setTimeout(() => {
        console.log("3");
    }, 1000);
    }, 1000);
    }, 1000);
}
showMessages();
//callback hell




/*

*/
function mensajes() {
    setTimeout(() => {
        console.log("Preparando...")
        setTimeout(() => {
        console.log("Cargando datos...")
        setTimeout(() => {
        console.log("Listo")
    }, 1000)
    }, 1000)
    },1000);
    
}
console.log(mensajes())


//Promesa:
//Se puede cumplir, puede fallar, un puede esperar
//013 - Promises
// Igual que el callback, la promesa "espera" una tarea asíncrona.
// Pero su sintaxis es más ordenada y fácil de leer.

// Una Promise (promesa) representa un valor que aún no conocemos,
// pero que existirá más adelante (éxito o error).


function getNumberAsync() {
    return new Promise((resolve, reject) => {
        const number=Math.floor(Math.random()*10)
        setTimeout(() => {
            if (number>5) {
                resolve(number)
            } else {
                reject("Numero muy bajo")
               // getNumberAsync()
            }
        }, 3000);
    })
}
//then() solo funciona si se cumple la promesa
//catch solo funciona si la promesa se rompe o no funciona
//finally no importa si se cumpla o no cumpla la promesa
getNumberAsync().then((num)=>{ console.log("El numero es "+num)}).catch((err)=>{console.log("Error: "+err)}).finally(()=>{console.log("Esto pasa si o si")})



// CHALLENGE: crear una función que salude con una promesa
// Extensión opcional: agregar un caso de reject() si name está vacío. 
// Pista: usar if(name === "") ... en el setTimeout()


function saludo(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre!="") {
                resolve(nombre)
            } else {
                reject("El nombre esta vacio")
            } 
        }, 4000);
        
})
}


saludo("Pablo").then((nombre)=>{
    console.log("Hola "+nombre)
}).catch((err)=>{
    console.log("Error: "+err)
}).finally(()=>{
    console.log("Finalizado.")
})
///

function fetchUser() {
  // Devuelve una promesa que se cumple después de 1 segundo
    return new Promise((resolve) => {
        setTimeout(() => resolve("👤 Usuario cargado"), 1000);
    });
}

function fetchPosts() {
  // Devuelve otra promesa (simulamos los posts del usuario)
    return new Promise((resolve) => {
        setTimeout(() => resolve(["📄 Post 1", "📄 Post 2"]), 1500);
    });
}

async function showData() {
    console.log("⏳ Cargando datos...");

    // "await" pausa la ejecución dentro de esta función
    // hasta que la promesa se resuelva (sin bloquear el resto del programa)
    const user = await fetchUser();
    console.log(user);

    const posts = await fetchPosts();
    console.log("Posts del usuario:", posts);

    console.log("✅ Todo cargado!");
}

showData();

// CHALLENGE: “Mini Dashboard”
// ============================================
// Simulá un sistema que cargue *dos recursos* en orden usando async/await:
// loadUser() → devuelve "👤 Usuario conectado"
// loadNotifications() → devuelve ["🔔 Notificación 1", "🔔 Notificación 2"]
//
// Mostrá los datos en consola en orden, con un mensaje final "✅ Dashboard listo!"
// (Pista: usá `await` para esperar cada promesa antes de continuar.) 


//await funciona si no retorna algo no avanza, sino que se queda trabado
//Diferencia entre el promise, async y await:
/*
Promise tiene 3 estapas: pendiente (pending), realizado (fulfilled) y rejected (termina con un error)



*/