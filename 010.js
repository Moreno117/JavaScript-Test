var assert = require('assert');


// 10. Escribir una función que devuelva los elementos en la posición impar de una lista

function impar(lista) {
  
  var impares = [];

  lista.forEach(function(number){
    if( lista.indexOf(number)%2 != 0 ){
        impares.push(number);
    }
  });
  return impares;

}

assert.deepEqual(impar([1, 2, 3, 4]), [2, 4], 'fallo test 1') ||
assert.deepEqual(impar([8, 23, 14]), [23], 'fallo test 2') ||
assert.deepEqual(impar([12, 34]), [34], 'fallo test 3') ||
assert.deepEqual(impar([124, 84, 71, 40]), [84, 40], 'fallo test 4') ||
assert.deepEqual(impar([234, 1565, 925]), [1565], 'fallo test 5') ||
assert.deepEqual(impar([448, 275, 726]), [275], 'fallo test 6') ||
assert.deepEqual(impar([854, 856, 918, 859, 1785, 5883]), [856, 859, 5883], 'fallo test 7') ||
assert.deepEqual(impar([968, 7496, 1640, 1859, 3906, 946]), [7496, 1859, 946], 'fallo test 8') ||
assert.deepEqual(impar([648, 252, 97, 295, 178, 476, 395]), [252, 295, 476], 'fallo test 9') ||
console.log("exito");
