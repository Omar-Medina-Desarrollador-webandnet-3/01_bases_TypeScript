
/**
 *    ======= Código de TypeScript =======
 */

//Encadenanmiento opcional

interface Pasajeros {
  nombre: string;
  hijos?: string[]; //opcional
}

const pasajero1: Pasajeros = {
  nombre: 'Fernando',
  hijos: [] //no escribir esta linea va a ser = 0
}

const pasajero2: Pasajeros = {
  nombre: 'Antonella',
  hijos: ['Maria','Zahara']
}

function imprimeHijos(pasajeros:Pasajeros): void {
  const cuantosHijos = pasajeros.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero2);


