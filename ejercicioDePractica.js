class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creamos una instancia (un objeto) de la clase Persona
const juana = new Persona("Juana", 30);
console.log("El objeto creado como instancia de la clase Persona es:", juana);
// Llamamos al método saludar que pertenece a la clase Persona
juana.saludar(); // "Hola, soy Juana y tengo 30 años."

// ====== Herencia ======
// Una clase puede heredar de otra, tomando sus propiedades y métodos.
class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad); // super() llama al constructor de la clase padre
    this.curso = curso;
  }

  estudiar() {
    console.log(`${this.nombre} está estudiando ${this.curso}.`);
  }
}

// ====== Polimorfismo ======
// Una clase hija puede redefinir (sobrescribir) un método de la clase padre.
// Por lo que un método puede comportarse diferente según la clase.
class Profesor extends Persona {
  constructor(nombre, edad, materia) {
    super(nombre, edad);
    this.materia = materia;
  }

  // Sobrescribimos el método saludar
  saludar() {
    console.log(`Hola, soy ${this.nombre}, docente de ${this.materia}.`);
  }
}

const ana = new Profesor("Ana", 40, "Programación");
ana.saludar(); // "Hola, soy Ana, docente de Programación."

// ====== Encapsulación ======
// La encapsulación es el principio de ocultar los detalles internos de una clase y exponer solo lo necesario.
// En JavaScript, podemos lograr esto utilizando closures o la sintaxis de clases.

class CuentaBancaria {
    #saldo = 0; // Propiedad privada
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;

    // Método privado
    const mostrarSaldo = () => {
      console.log(`El saldo de ${this.titular} es ${this.#saldo}.`);
    };

    // Métodos públicos
    this.depositar = (monto) => {
      this.#saldo += monto;
      mostrarSaldo();
    };

    this.retirar = (monto) => {
      this.#saldo -= monto;
      mostrarSaldo();
    };
  }
}

const cuenta1 = new CuentaBancaria("Juan", 1000);
cuenta1.depositar(500); // "El saldo de Juan es 1500."
cuenta1.retirar(200);   // "El saldo de Juan es 1300."
console.log(cuenta1.mostrarSaldo); // undefined (no se puede acceder directamente) porque es un método privado.
// Para mostrar el saldo, debemos usar los métodos públicos depositar y retirar.


// ====== Ejercicio propuesto ======
// Abstracción: Crear una clase "SerVivo" que tenga el método alimentarse() y atributos como nombre y edad.
// Herencia: Luego, hacer que "Animal" y "Planta" extiendan de SerVivo.
// Polimorfismo: Animal y Planta pueden alimentarse, pero cada uno lo hace de manera diferente.
// Encapsulación: se les ocurre como ocultar atributos y/o métodos?
// Crear instancias y probar que cada una pueda usar sus métodos.



class SerVivo {
    #edades=0
    constructor(nombre, edad) {
        this.nombre=nombre;
        this.edad= edad;

        
    }
    mostrarEdad = () => {
            console.log(`La edad de ${this.nombre} es ${this.edad}.`);
        };
    alimentarse(){
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años, y estoy comiendo.`);
    }
}

class Animal extends SerVivo {
    constructor(nombre, edad) {
        super(nombre, edad);
        
    }
    alimentarse() {
    console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años, y soy carnivoro.`);
  }
}

class Planta extends SerVivo{
    constructor(nombre, edad) {
        super(nombre, edad);
        
    }
    alimentarse() {
        console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años, y soy herbivoro.`);
    }
    
}

const persona = new SerVivo("Juan", 35);
console.log(persona.alimentarse);
console.log(persona.mostrarEdad);

const persona2 = new Animal("Juan", 35);
console.log(persona2.alimentarse)

const persona3 = new Planta("Juan", 35);
console.log(persona2.alimentarse)
