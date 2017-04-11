var assert = require('assert');

// 6. Escribe una función que reciba un año e indique si es un año bisiesto.
// Un año bisiesto ocurre cada cuatro años, excepto los finales de siglo (terminado en 00)
// a menos que también sea un múltiplo de 400

function bisiesto(n) {
 
    if( ( n%100 != 0 && n%4 == 0 ) ||  n%400 ==0 ) {
        return true
    } else {
        return false
    }

}

assert.deepEqual(bisiesto(2000), true, 'fallo test 1') ||
assert.deepEqual(bisiesto(200), false, 'fallo test 2') ||
assert.deepEqual(bisiesto(2016), true, 'fallo test 3') ||
assert.deepEqual(bisiesto(2017), false, 'fallo test 4') ||
assert.deepEqual(bisiesto(400), true, 'fallo test 5') ||
assert.deepEqual(bisiesto(100), false, 'fallo test 6') ||
assert.deepEqual(bisiesto(1998), false, 'fallo test 7') ||
assert.deepEqual(bisiesto(2400), true, 'fallo test 8') ||
assert.deepEqual(bisiesto(2743), false, 'fallo test 9') ||
assert.deepEqual(bisiesto(600), false, 'fallo test 10') ||
assert.deepEqual(bisiesto(1945), false, 'fallo test 11') ||
console.log("exito");
