var assert = require('assert');


// 7. Escribir una función que devuelva el mayor elemento de una lista

function mayor(lista) {
    
    var comparador = lista[0];

    lista.forEach(function(numero){
        if(numero > comparador){
            comparador = numero;
        }
    });
    return comparador

}

assert.deepEqual(mayor([1, 2, 3, 4]), 4, 'fallo test 1') ||
assert.deepEqual(mayor([8, 23, 14]), 23, 'fallo test 2') ||
assert.deepEqual(mayor([12, 34]), 34, 'fallo test 3') ||
assert.deepEqual(mayor([124, 84, 71, 40]), 124, 'fallo test 4') ||
assert.deepEqual(mayor([234, 1565, 925]), 1565, 'fallo test 5') ||
assert.deepEqual(mayor([448, 275, 726]), 726, 'fallo test 6') ||
assert.deepEqual(mayor([854, 856, 918]), 918, 'fallo test 7') ||
assert.deepEqual(mayor([968, 7496, 1640]), 7496, 'fallo test 8') ||
assert.deepEqual(mayor([648, 252, 97]), 648, 'fallo test 9') ||
console.log("exito");

