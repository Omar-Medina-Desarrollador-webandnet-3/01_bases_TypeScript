
/**
 *    ======= Código de TypeScript =======
 */

//Tarea sobre objetos e interfaces
interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion, //se puede hacer esto las veces que sea necesario si se quiere anidar un objeto dentro de una interface
  mostrarDireccion: () => string;
}

//Nueva interface para agregar en el parametro direccion de la interface SuperHeroe
interface Direccion {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY'
  },
  mostrarDireccion() {
    return this.nombre +' ,'+ this.direccion.ciudad +' ,'+ this.direccion.pais
  }
} 

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);


