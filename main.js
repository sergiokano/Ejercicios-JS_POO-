
// Crear la clase Persona, con propiedades nombre, edad y genero, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

obtDetalles(){
    console.log(`Me llamo ${this.nombre}, tengo ${this.edad} años y me considero género ${this.género}` );
}
}

let personaNueva = new Persona("Sara",22,"no binario");

personaNueva.obtDetalles();


// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.


class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero)
    this.curso = curso;
    this.grupo = grupo;
}
registrar(){
    console.log(`Damos la bienvenida a la liga universitaria a ${this.nombre}, con ${this.edad} años y cursando ${this.curso}, al equipo ${this.genero} de la escuela de ${this.grupo}`)
}
}

let estudianteNuevo = new Estudiante("Carla", 21, "femenino", "segundo", "medicina")

estudianteNuevo.registrar();



// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
}

asignar(){
    console.log(`${this.nombre}, con ${this.edad} años, imparte la asignatura ${this.asignatura} en el grupo ${this.genero} de nivel ${this.nivel} `)
}}

let profesorNuevo = new Profesor("Sofía", 23, "femenino", "Javascript", "avanzado")

profesorNuevo.asignar();