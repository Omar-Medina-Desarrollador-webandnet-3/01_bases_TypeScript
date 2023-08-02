
/**
 *    ======= Código de TypeScript =======
 */

// import { Producto, calcularISV } from './ejercicios/06_desestructuracion_funcion';
import { Producto, calcularISV } from './06_desestructuracion_funcion';

//Importación y Exportación ------------------------------------------
const carritoCompras: Producto[] = [
  {
    desc: 'Telefono 1',
    precio: 500.000
  },
  {
    desc: 'Telefono 2',
    precio: 700.000
  },
  {
    desc: 'Telefono 3',
    precio: 900.000
  },
];

const [total, isv] = calcularISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);

  