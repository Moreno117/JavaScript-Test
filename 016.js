var assert = require('assert');

// 16. Escribir una función que concatene dos listas

function concatenar(lista1, lista2) {
    
    var concatenda = lista1.concat(lista2);
    return concatenda;

}

assert.deepEqual(concatenar([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6], 'fallo test 1') ||
assert.deepEqual(concatenar(['a', 'b', 'c'], ['d', 'e', 'f']), ['a', 'b', 'c', 'd', 'e', 'f'], 'fallo test 2') ||
assert.deepEqual(concatenar([1, 2], ['a', 'b']), [1, 2, 'a', 'b'], 'fallo test 3') ||
assert.deepEqual(concatenar([1, 'a'], [2, 'b']), [1, 'a', 2, 'b'], 'fallo test 4') ||
console.log("exito");

