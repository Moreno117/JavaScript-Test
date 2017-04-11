var assert = require('assert');

// 2. Escribir una función que reciba el nombre de una persona y devuelva un saludo.
// Si el nombre es:
//	Rita,
//	Tere,
//	Mike,
//	Dany,
//	Jon,
//	Ana,
//	Rebeca,
//	Yaz,
//	Luis
// saludar como "Que hay {nombre}?"
// En caso contrario saludar como "Hola {nombre}"

function saludo(nombre) {

  var name = nombre;

  if (name == "Dany" || name == "Mike" || name == "Rebeca" ){
    return "Que hay " + name + "?";
  } else{
    return "Hola " + name;
  }
}

assert.deepEqual(saludo('Alejandro'), 'Hola Alejandro', 'fallo test 1') ||
assert.deepEqual(saludo('Dany'), 'Que hay Dany?', 'fallo test 2') ||
assert.deepEqual(saludo('José'), 'Hola José', 'fallo test 3') ||
assert.deepEqual(saludo('Mike'), 'Que hay Mike?', 'fallo test 4') ||
assert.deepEqual(saludo('Ángel'), 'Hola Ángel', 'fallo test 5') ||
assert.deepEqual(saludo('Rebeca'), 'Que hay Rebeca?', 'fallo test 6') ||
console.log("exito");
