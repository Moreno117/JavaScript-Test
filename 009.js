var assert = require('assert');


// 9. Escribir una función que indique si un elemento dado existe en una lista

function existe(lista, numero) {
  
  var contador = 0;

  lista.forEach(function(number){
    if(number == numero){
      contador ++
    }   
  });
  
  if(contador >= 1){
      return true
  } else {
      return false
  }

}

assert.deepEqual(existe([1, 2, 3, 4], 3), true, 'fallo test 1') ||
assert.deepEqual(existe([8, 23, 14], 7), false, 'fallo test 2') ||
assert.deepEqual(existe([12, 34], 12), true, 'fallo test 3') ||
assert.deepEqual(existe([124, 84, 71, 40], 49), false, 'fallo test 4') ||
assert.deepEqual(existe([234, 1565, 925], 1565), true, 'fallo test 5') ||
assert.deepEqual(existe([448, 275, 726], 969), false, 'fallo test 6') ||
assert.deepEqual(existe([854, 856, 918], 854), true, 'fallo test 7') ||
assert.deepEqual(existe([968, 7496, 1640], 962), false, 'fallo test 8') ||
assert.deepEqual(existe([648, 252, 97], 97), true, 'fallo test 9') ||
console.log("exito");
