// clase de Strings


// ""
// `` si quiero usar esto es necesario utilizar ``          `${a} - ${b} = ${resultado}`

//trim() elimina los espacios en los extremos
//includes() busca si contiene una palabra
//stars
//indexOf()
//join une un array en un string
//split convierte el string en array
//replace reemplaza el texto: ejemplo: console.log("Replace 'awesome' → 'powerful':", text.replace("awesome", "powerful"))
// slice() - corta una parte del string
// toUpperCase() : pone en el string en mayuscula
// toLowerCase(): pone el string en miniscula
//// startsWith(): verifica si empieza con una palabra
// endsWith(): verifica si termina con una palabra en especifico
//// length - cantidad de caracteres
// Challenge 1:
// Dado un nombre completo, mostralo en mayúsculas y sin espacios extras.

// Usando template literals (más moderno y legible)
//let age = 38;
// template literals es : console.log(`My name is ${name} and I am ${age} years old.`);

//Number.isNaN(Number(pass)) esto se refiere que si hay un numero tira un false
//test(): busca una coincidencia entre un patrón y una cadena de texto

let fullName = "  juan perez  ";
// 👉 "JUAN PEREZ"

console.log(fullName.toUpperCase().trim())

// Challenge 2:
// Dado un email, verificá si contiene "@" y termina con ".com".
let email = "usuario@mail.com";
// 👉 true

function verificarMail(email) {
    if(email.includes("@") && email.endsWith(".com")){
    return true
} else{
    return false
}
}


console.log(verificarMail(email))

// Challenge 3:
// Escribí una función que reciba un string y devuelva cuántas vocales tiene.
let word = "Programación";
// 👉 5

function cantidadDeVocales(word) {
    let contador=0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i]=="a" || word[i]=="e"|| word[i]=="i" || word[i]=="o" || word[i]=="u" ) {
            contador= contador+1;
            
        } else if (word[i]=="á" ||word[i]=="é" ||word[i]=="í" ||word[i]=="ó" ||word[i]=="ú") {
            contador=contador+1
        } else {
            contador+=0;
        }
    }
    return contador;

}
console.log(cantidadDeVocales(word))


// Challenge 4:
// Usá template literals para mostrar un mensaje con variables.
let user = "Lucía";
let language = "JavaScript";
// 👉 "Hi Lucía! Welcome to the JavaScript world."


function templatLiterals(user, language) {
    mensaje=`Hi ${user}! Welcome to the ${language} world.`
    return mensaje
    
}
console.log(templatLiterals(user, language))


// ===============================
// 🧠 CHALLENGE FINAL: PASSWORD VALIDATOR
// ===============================

// Crea una función llamada isValidPassword() que reciba un string
// y devuelva true si cumple con las siguientes condiciones:
// - Al menos 8 caracteres
// - Contiene una mayúscula
// - Contiene una minúscula
// - Contiene un número
// - Contiene un símbolo (!@#$%^&*)

// Ejemplo:
let pass = "MyP@ssword123";
// 👉 true

function isValidPassword(pass) {
    let mensaje;
    let mayuscula=false;
    let minuscula=false;
    let numero=false;
    let simbolo = /[!@#$%^&*]/;
    let simbolos=false;
    if(pass.length>=8){
        for (let i = 0; i < pass.length; i++) {
            if(pass[i]=== pass[i].toUpperCase()){
                mayuscula=true
            } 
            if(pass[i]=== pass[i].toLowerCase()){
                minuscula=true

            } 
            if (!Number.isNaN(Number(pass[i]))) {
                numero=true
                
            }
            if (simbolo.test(pass[i])) {
                simbolos=true
            }
        }
        
    
}
        mensaje=mayuscula && minuscula && numero && simbolos     
        return mensaje
}

console.log(isValidPassword(pass))



// Crear y acceder a objetos
const person = {
    name: "Diego",
    age: 27,
    country: "Argentina"
};

// Se puede acceder a las propiedades usando notación de punto o corchetes
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Agregar y modificar propiedades
person.email = "diego@example.com";
person.age = 38;
console.log("Updated person:", person);

// Eliminar una propiedad
delete person.country;
console.log("Without country:", person);


// 🔁 Recorrer objetos
// ===============================
for (let key in person) {
  console.log(key, "→", person[key]); // Nombre de la clave y su valor
}

// Object.keys() / Object.values() / Object.entries()
console.log("Keys:", Object.keys(person)); // Devuelve un array con las claves
console.log("Values:", Object.values(person)); // Devuelve un array con los valores
console.log("Entries:", Object.entries(person)); // Devuelve un array de pares [clave, valor]

// Creo otro objeto para combinar
const address = { city: "Buenos Aires", zip: 1000 };
// Usando "..." (spread operator) para combinar, llamo al objeto completo de person con todas sus propiedades
// y le agrego las del objeto address para combinar ambos en uno nuevo.
const merged = { ...person, ...address };
console.log("Merged object:", merged);

// Cuidado con la copia por referencia, porque si modifico la copia, el original también cambia!
const copyRef = person;
copyRef.name = "Juan";
console.log("Original after modifying copy:", person.name); // Cambia!

// Solución: clonarlo
const clone = { ...person };
clone.name = "Pedro";
console.log("Clone:", clone);
console.log("Original:", person);

// 🌐 JSON (JavaScript Object Notation)
// ===============================

// Convertir objeto a JSON (string)
// Declaro una constante jsonString que almacena el resultado de convertir el objeto person a una cadena JSON
// utilizando el método JSON.stringify().
const jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

// Convertir JSON a objeto
const parsedObject = JSON.parse(jsonString);
console.log("Parsed object:", parsedObject);

// Challenge 1:
// Crear un objeto "car" con propiedades brand, model y year.
// Mostrar "Mi auto es un Toyota Corolla del 2020."
const car={
    brand: "Toyata",
    model: "Corolla",
    year: "2020"
}

console.log('Mi auto es un '+car.brand+ " "+car.model+" del "+car.year);

// Challenge 2:
// Crear una función getOlder(person) que reciba un objeto persona y
// devuelva un nuevo objeto con la edad incrementada en 1.


const personas={
    edad: 12}

function getOlder(person) {
    const clone = { ...person };
    clone.edad+=1
    return clone
}
console.log(getOlder(personas))

// Challenge 3:
// Crear una función cloneObject(obj) que retorne una copia exacta del objeto
// sin afectar al original (¡probarlo con console.log!).
const obj={
    brand: "Toyata",
    model: "Corolla",
    year: "2020"
}

function cloneObject(obj) {
    const clone = { ...obj };
    return clone;
}

console.log(cloneObject(obj))

// ===============================
// 🧠 CHALLENGE FINAL: USER DATABASE SIMULATION
// ===============================

// Crea un array llamado users que contenga varios objetos usuario,
// cada uno con name, email, isAdmin y age.
// Luego hacé lo siguiente:

// 1️⃣ Mostrar todos los nombres.
// 2️⃣ Filtrar los usuarios mayores de 18.
// 3️⃣ Obtener solo los emails.
// 4️⃣ Convertir el array a JSON (string).
// 5️⃣ Parsear nuevamente ese JSON a un array de objetos.
// 6️⃣ BONUS: Usar map/filter/reduce combinados para contar cuántos son admin.

const usersers = [
{ name: "Ana", email: "ana@mail.com", isAdmin: false, age: 22 },
{ name: "Luis", email: "luis@mail.com", isAdmin: true, age: 30 },
{ name: "Carla", email: "carla@mail.com", isAdmin: false, age: 17 }
];

// 👉 ejemplos:
// Mostrar todos los nombres → ["Ana", "Luis", "Carla"]
// Filtrar mayores de edad → ["Ana", "Luis"]
// Contar admins → 1


const jsonString1 = JSON.stringify(usersers);
function mostrarNombres(usersers) {
    let nombres=[];
    for (let i = 0; i < usersers.length; i++) {
        nombres.push(usersers[i].name);
    }

    return nombres;
    
}
function mayoresDeEdad(usersers) {
    let mayores=[]
    for (let i = 0; i < usersers.length; i++) {
        if (usersers[i].age>=18) {
            mayores.push(usersers[i].name)
        }
        
    }
    return mayores
}

function obtenerMail(usersers) {
    let email=[];
    for (let i = 0; i < usersers.length; i++) {
        email.push(usersers[i].email)
    }
    return email
    
}
function contarAdmi(usersers) {

    contar=usersers.filter(esAdmi())
    return contar;


}
function esAdmi() {

    return usersers.isAdmin==true
}

function convertirArrayAJson(usersers) {
    const jsonString = JSON.stringify(usersers);
    return jsonString
}

function convertirJsonAArray(jsonString1) {
    const parsedObject = JSON.parse(jsonString1);
    return parsedObject
}

console.log(mostrarNombres(usersers))

console.log(mayoresDeEdad(usersers))

console.log(obtenerMail(usersers))
console.log(convertirArrayAJson(usersers))
console.log(convertirJsonAArray(jsonString1))

console.log(contarAdmi(usersers))

