
/**
 *    ======= Código de TypeScript =======
 */

//Destructuración de argumentos ------------------------------------------
export interface Producto {
  desc: string;
  precio: number;  
}

const telefono: Producto = {
  desc: 'Samsung Galaxy s90',
  precio: 340.0
}

const tableta: Producto = {
  desc: 'iPad Air',
  precio: 398.0
}

// function calcularISV(productos:Producto[]): number {
//   const iva = 0.19;
//   let total = 0;

//   productos.forEach( (element) => {
//     total += element.precio
//   });

//   return total*iva;
// }

export function calcularISV(productos:Producto[]): /*number*/ [number, number]{
  const iva = 0.19;
  let total = 0;

  productos.forEach( ({precio}) => {
    total += precio
  });

  // return total*iva;
  return [total, total*iva]; //Regresar un arreglo
}

// const articulos = [telefono, tableta];
// const [total, isv] = calcularISV(articulos);
// console.log(total);
// console.log(isv);

// const articulos = [telefono, tableta];
// const isv = calcularISV(articulos);
// console.log(isv);



