
/**
 *    ======= Código de TypeScript =======
 */

//Genericos

//Aqui se especifica que reciba el tipo que yo le mande, hay mas compicaciones al a la hora de  ser generico osea que se puede especificar mas cosas

function queTipoSoy<T>(argument:T) { //Por lo general siempre es con la <T>
  return argument;
}

let soyString = queTipoSoy('Hola de nuevo');
let soyArrgloString = queTipoSoy(['01','002','0003','00004']);
let soyNumerico = queTipoSoy(22);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

let soyObjeto = queTipoSoy({ 
  uno:1, dos:2, tres:3,
  cuatro:4, cinco:5, seis:6,
  siete:7, ocho:8, nueve:9
});

let soyExplicito = queTipoSoy<number>(100); //Tambien se puede especificar de esta manera


console.log(soyString);
console.log(soyArrgloString);
console.log(soyNumerico);
console.log(soyArreglo);
console.log(soyObjeto);
console.log(soyExplicito);
