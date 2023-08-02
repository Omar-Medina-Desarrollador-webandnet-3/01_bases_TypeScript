
/**
 *    ======= Código de TypeScript =======
 */

//Funciones
function sumar(a:number, b: number) {
  return a + b;
}

const resultado = sumar(20, 30);

console.log(resultado);

//Tambien se puede
function sumar2(a:number, b: number): number{
  return a + b;
}

const resultado2 = sumar2(40, 30);

console.log(resultado2);

//devolver otro tipo de valor
function sumar3(a:number, b: number) {
  return (a + b).toString();
}

const resultado3 = sumar3(10, 30);

console.log(resultado3);


//función igual de ptra forma
const sumar4 = (a:number, b: number)/*:number*/ => {
  return a + b;
  // return (a + b).toString();
}

const resultado4 = sumar4(10, 30);

console.log(resultado4);

//Primero los campos obligatorios, opcional, y los que tienen valor por defecto, sino entonces =>
  /*
    1.obligatorio = true;
    2.opcional = true;
    3.valoresDefecto = true;
    
    if(true) {
      return correcto
    } elif (valoresDefecto = false){
      return obligatorio, opcional 
    } else {
      return incorrecto
    }
    nota: siempre de deben mandaer todos los valores dentro del parametro aunque sea opcional.
  */

function multiplicar(numero:number, otroNumero?:number, base:number = 3): number {
  return numero * base; 
}

const resultado5 = multiplicar(9,0,9);
console.log(resultado5);



// FUNCIONES CON OBJETOS COMO ARGUMRNTOS
//void -> no retorna nada.

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curar:number): void {
  personaje.pv += curar;
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Yesid',
  pv: 30,
  mostrarHP() {
    console.log('Puntos de vida:', this.pv);
  }
}

curar(nuevoPersonaje, 8)
nuevoPersonaje.mostrarHP();



// FUNCIONES CON OBJETOS COMO ARGUMRNTOS
//void -> no retorna nada.

// interface PersonajeLOR {
//   nombre: string;
//   pv: number;
// }

// function curar(personaje: PersonajeLOR, curar:number): void {
//   personaje.pv += curar;

//   console.table(personaje);
// }

// const nuevoPersonaje: PersonajeLOR = {
//   nombre: 'Yesid',
//   pv: 30
// }

// curar(nuevoPersonaje, 8)



