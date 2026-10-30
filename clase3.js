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

