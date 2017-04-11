var assert = require('assert');


// 17. Escribir una función que concatene dos listas alternando los elementos

function concatenarAlternado(lista1, lista2) {

    var concatenada = [];
    var valor1,
        valor2,
        x = 0;

    loop1:
    for(var i=0; i < lista2.length; i++){
        valor1 = lista1[i];
        if(valor1){
            concatenada.push(valor1);
        }


        loop2:
        for(var j = x; j < lista2.length; j++ ){
            valor2= lista2[j];
            concatenada.push(valor2);
            x++;
            break loop2;
        }
    }

    console.log(concatenada);
    return concatenada;

}

assert.deepEqual(concatenarAlternado([1, 2, 3], [4, 5, 6]), [1, 4, 2, 5, 3, 6], 'fallo test 1') ||
assert.deepEqual(concatenarAlternado(['a', 'b', 'c'], ['d', 'e', 'f']), ['a', 'd', 'b', 'e', 'c', 'f'], 'fallo test 2') ||
assert.deepEqual(concatenarAlternado([1, 2], ['a', 'b']), [1, 'a', 2, 'b'], 'fallo test 3') ||
assert.deepEqual(concatenarAlternado([1, 'a'], [2, 'b']), [1, 2, 'a', 'b'], 'fallo test 4') ||
assert.deepEqual(concatenarAlternado([1, 2], [3, 4, 5, 6]), [1, 3, 2, 4, 5, 6], 'fallo test 5') ||
console.log("exito");
