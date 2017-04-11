var assert = require('assert');

// 3. Escribir una función que reciba un número n y devuelva la suma de los numeros del 1 al n

function suma(n){
	var inicio = 0;

	for(var i=0; i <= n; i++){
		inicio = inicio + i;
	}
	return inicio;
}


assert.deepEqual(suma(1), 1, 'fallo test 1') ||
assert.deepEqual(suma(100), 5050, 'fallo test 2') ||
assert.deepEqual(suma(1000), 500500, 'fallo test 3') ||
assert.deepEqual(suma(1234), 761995, 'fallo test 4') ||
assert.deepEqual(suma(93768), 4396265796, 'fallo test 5') ||
console.log("exito");
