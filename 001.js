var assert = require('assert');


// 1. Escribir una función que reciba el nombre de una persona y devuelva un saludo.

function saludo(nombre) {
  var name = nombre;
  return "Hola " + name;
}

assert.deepEqual(saludo('Alejandro'), 'Hola Alejandro', 'fallo test 1') ||
assert.deepEqual(saludo('Dany'), 'Hola Dany', 'fallo test 2') ||
assert.deepEqual(saludo('José'), 'Hola José', 'fallo test 3') ||
console.log("exito");
