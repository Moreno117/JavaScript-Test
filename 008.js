var assert = require('assert');


// 8. Escribir una función que devuelva una lista en orden inverso

function invertir(lista) {
  var invertir = lista.reverse();
  return invertir
}

assert.deepEqual(invertir([1, 2, 3, 4]), [4, 3, 2, 1], 'fallo test 1') ||
assert.deepEqual(invertir([8, 23, 14]), [14, 23, 8], 'fallo test 2') ||
assert.deepEqual(invertir([12, 34]), [34, 12], 'fallo test 3') ||
assert.deepEqual(invertir([124, 84, 71, 40]), [40, 71, 84, 124], 'fallo test 4') ||
assert.deepEqual(invertir([234, 1565, 925]), [925, 1565, 234], 'fallo test 5') ||
assert.deepEqual(invertir([448, 275, 726]), [726, 275, 448], 'fallo test 6') ||
assert.deepEqual(invertir([854, 856, 918]), [918, 856, 854], 'fallo test 7') ||
assert.deepEqual(invertir([968, 7496, 1640]), [1640, 7496, 968], 'fallo test 8') ||
assert.deepEqual(invertir([648, 252, 97]), [97, 252, 648], 'fallo test 9') ||
console.log("exito");
