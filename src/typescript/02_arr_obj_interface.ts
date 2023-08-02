
/**
 *    ======= Código de TypeScript =======
 */

//arreglos
let habily: (boolean | string | number)[] = ['Correr', 'Nadar', 'Gambetear', 100]; //No recomendado
console.log(habily);

//Es mejor siempre ponerle el tipo de datos - por eso es un lenguaje tipado
let habilidades: string[] = ['Correr', 'Nadar', 'Gambetear'];
habilidades.push('Tiempo corrido', 'minutos');

console.log(habilidades);
console.log(habilidades[0], habilidades[2], habilidades[4], habilidades[1]+'.', '(Accediento a este arreglo en la posición 4)');


//objetos
let hablilidades3: any = { //Esto no es recomendado, porque se debe restringir la manera de como los objetos son creados en ts
  Correr: '98 kmh',
  Nadar: '100 pies de distancia',
  Gambetear: 'Entre 2 y 3 jugadores' 
}

hablilidades3.jugar_futbol = 'Dias: Lunes, Miercoles, Viernes, Sabados'; //Agregando este nuevo atributo gracias a (any)
console.log(hablilidades3);



//Mejor practica para trabajar con arreglos --------------------
interface Personaje {
  nombre: string;
  apellido: string;
  email: string;
  edad?: number; //opcional
}

const personaje:Personaje = {
  nombre: 'Omar',
  apellido: 'Medina',
  email: 'medina@gmail.com'
}

console.log(personaje);
console.log(personaje.email);
console.table(personaje);
//Mejor practica --------------------


let hablilidades2 = {
  Correr: '98 kmh',
  Nadar: '100 pies de distancia',
  Gambetear: 'Entre 2 y 3 jugadores' 
}

console.log(hablilidades2);
console.log('Nadar a '+hablilidades2.Nadar+' (Accediendo a la posición 1 de este arreglo)');


