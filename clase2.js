let numero=0;
//Ejercicio con funciones:
let historial=[];
let opciones=[];
//Calculadora:
function suma(a,b) {
    resultado=a+b;
    return resultado;
    
}


function resta(a,b) {
    resultado=a-b;
    return resultado;
    
}
function division(a,b) {
    if(b!=0){
        resultado=a/b;
        return resultado
    }
    else{
        let error="No se puede dividir por 0"
        return error
    }
}

function multiplicacion(a,b) {
    resultado=a*b
    return resultado
    
}
function potencia(a,b) {
    resultado=a**b;
    return resultado;
    
}
function historialCalculadora(historial) {
    return historial

}




console.log("Ingrese la opcion  que desea realizar: ");
console.log("1. Suma")
console.log("2. Resta")
console.log("3. Division")
console.log("4. Multiplicacion")
console.log("5. Potencia")
console.log("6. Historial")
let opcion=6;
let a=5;
let b=6;
console.log("Tu opcion fue: "+opcion)
console.log("Tu primer valor A es:"+a)
console.log("Tu segundo valor B:"+b)


console.log(calculadora(opcion, historial));

console.log(calculadora(1, historial)); // Realiza la suma y la guarda
console.log(calculadora(6, historial))
function calculadora (opcion, historial) {
    switch (opcion) {
    case 1:
            resultado = suma(a, b);
            operacion = `${a} + ${b} = ${resultado}`;
            break;

    case 2:
            resultado = resta(a, b);
            operacion = `${a} - ${b} = ${resultado}`;
            break;

    case 3:
            resultado = division(a, b);
            operacion = `${a} / ${b} = ${resultado}`;
            break;

    case 4:
            resultado = multiplicacion(a, b);
            operacion = `${a} * ${b} = ${resultado}`;
            break;

    case 5:
            resultado = potencia(a, b);
            operacion = `${a} ** ${b} = ${resultado}`;
            break;

    case 6:

            return console.log("El historia de la calculadora: "+historialCalculadora(historial));

    case 7:
            return console.log("Salida de la calculadora");

    default:
            return console.log("Opción no válida");
    }      
    historial.push(operacion);

    return console.log("Resultado:", resultado);
    
}                                                                                                                                                                                                                               
