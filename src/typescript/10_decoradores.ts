
/**
 *    ======= Código de TypeScript =======
 */

//Decoradores de clases - tipicos de ts - js no los conoce
// Los decoradores sirven para cambiar las clases en el momento que son definidas

//@EstoesunDecorador
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
  return class extends constructor {
    newProperty = "neeee";
    hello = "override";
    // reportingURL = "http://www...";
  };
}

@classDecorator 
class MiSuperClass {
  public miPropiedad: string = 'ABC123';

  imprimir() {
    console.log('Holaa');
  }
} 

const miClase = new MiSuperClass(); //Es necesario instanciar la clase para trabajar con ella

console.log(MiSuperClass);
console.log(miClase);


