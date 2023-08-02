
/**
 *    ======= Código de TypeScript =======
 */

//Destructuración de objetos ------------------------------------------
interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor:Reproductor = {
  volumen: 100,
  segundo: 34,
  cancion: 'Quién será el papá?',
  detalles: {
    autor: 'Orquesta la palabra',
    anio: 2023
  }
}

//Aqui hago la desestructutación del objeto
//Es como definir un montón de variables o de constantes al mismo tiempo

// const autor = 'Fulano';
// const {volumen, segundo, cancion, detalles: {autor: autorDetalle, anio}} = reproductor;

// console.log(autorDetalle);


const {volumen, segundo, cancion, detalles} = reproductor;
const {autor, anio} = detalles;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo volumen es de: ', segundo);
console.log('La canción se llama: ', cancion);
console.log('El autor de este tema es: ', autor);
console.log('El año que se estrenó este exito fue en: ', anio);

//Destructuración de objetos ------------------------------------------


// --------------------------------------------------------------------


//Destructuración de Arreglos -----------------------------------------
const dbz: string[] = ['Goku','Vegueta','Trunks'];
const [ , , p3] = dbz;

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);


//Destructuración de objetos ------------------------------------------



