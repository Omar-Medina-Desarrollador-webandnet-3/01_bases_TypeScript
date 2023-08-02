
/**
 *    ======= Código de TypeScript =======
 */

// //Clases en ts - basicas ------------------------------------------
// Diferencia entre interfaces y clases, es que en interfaces no se hace la implementación del mismo
// En cambio en la clase si, otra diferencia es que en las interfaces solo se definen los tipos(string, number...)
// Otra sería que en las clases se trabaja con constructores y en la interface con metodos.

class PersonaNormal { //Clase super
  constructor(    
    public nombre:string,
    public direccion:string
  ) {}
}

class Heroe extends PersonaNormal { //Extendido de clase
  // alterEgo!: string;
  // edad!: number; 
  // nombreReal!: number;

  constructor ( 
    public alterEgo: string,
    public edad?: number, //opcional
    public nombre_completo?: string
  ) {
    super('Omar', 'New York, USA');
  }
}

const ironman = new Heroe('Ironman', 23, 'Omar Medina'); //instanciando la clase

console.log(ironman) 


