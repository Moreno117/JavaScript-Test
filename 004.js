var assert = require('assert');


// 4. Escribir una función que reciba un número n y devuelva la suma de los numeros del 1 al n
// donde solo se consideren en la suma los numeros multiplos de 3 o 5

function suma(n){
	var inicio = 0;
  var multiplo3;
  var multiplo5;

  for(i = 0; i<=n; i++){

    multiplo3 = i % 3;
    multiplo5 = i % 5;

    if(multiplo3 === 0 || multiplo5 === 0){
      inicio = inicio + i;
    }
  }

	return inicio;
}


assert.deepEqual(suma(1), 0, 'fallo test 1') ||
assert.deepEqual(suma(100), 2418, 'fallo test 2') ||
assert.deepEqual(suma(1000), 234168, 'fallo test 3') ||
assert.deepEqual(suma(1234), 354858, 'fallo test 4') ||
assert.deepEqual(suma(93768),2051578203 , 'fallo test 5') ||
console.log("exito");
