let num=1;
console.log(num);
let num2=2;

let boolean1= true;
let boolean2= false;
//Utilizar comparaciones logicas 

console.log(num>num2);
console.log(boolean1 && boolean2)

let edad=19
if (edad>=18) {
    console.log("Podes pasar")
} else{
    console.log("No podes pasar")

}



let nota1=6;
let nota2=4
let promedio
let asistencia=75
let final=3;
let estado



if(nota1>=8 && nota2>=8 && asistencia>=75){
    promedio=(nota1+nota2)/2
console.log("Promocionaste no necesitas ir a final. Tenes un promedio de: "+promedio)

}
else if (nota1>=4 && nota2>=4 && asistencia>=75 ) {
    if (final>=4){
        promedio=(nota1+nota2+final)/3
        console.log("Felicidades aprobaste la materia. Tenes un promedio de: " +promedio)
    }
    else {
        console.log("No aprobaste el final. Deberias rendir nuevamente el final")
    }
    
} else if( nota1<4 || nota2<4 || asistencia<75) {

    console.log("Desaprobaste un parcial, necesita recuperarlo para rendir final o no cumplis con la asistencia")
    if(nota1<4){
        console.log("Necesitas recuperar el primer parcial")
    }
    else if(nota2<4){
        console.log("Necesitas recuperar el segundo parcial")

    }
    else{
        console.log("No cumplis con la asistencia recursas la materia")
    }
}




function estadoDeCursada(nota1, nota2, estado) {
    if(nota1>=8 && nota2>=8){
    estado="aprobado"

}
else if (nota1>=4 && nota2>=4 ) {
    estado="final pendiente"
}
else{
    estado="desaprobado"
}
return estado;
}

function promedios(nota1, nota2, estado, final, promedio) {
    if (estado=="aprobado") {
        promedio=(nota1+nota2)/2
    }
    else if (estado== "final pendiente") {
        
        promedio=(nota1+nota2+final)/3
    } else {

         promedio=0
    }
    return promedio;


}



console.log("El estado de la cursada es: "+ estadoDeCursada(nota1,nota2))
console.log("El promedio de la cursada es: " +promedios(nota1,nota2, estado, final, promedio))


if(estadoDeCursada(nota1,nota2)=="aprobado" && asistencia>=75){

    console.log("Promocionaste no necesitas ir a final. Tenes un promedio de: "+promedios(nota1,nota2, estado, final, promedio))

}
else if(estadoDeCursada(nota1,nota2)=="final pendiente" || asistencia<75 ){




console.log("Desaprobaste un parcial, necesita recuperarlo para rendir final o no cumplis con la asistencia")

}

