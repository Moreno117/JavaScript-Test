var assert = require('assert');


// 18. Escribir una función que pruebe si una cadena es palíndromo

function esPalindromo(cadena) {
   
   var texto = cadena;
   var separador = "";
   var subcadena = texto.split(separador);
   console.log(subcadena);

//    var original = cadena.length;
//    var invertida = "";

//    while (original >= 0){
//        invertida = invertida + cadena.charAt(original)
//        original--;
//    }

//    console.log(invertida.toLowerCase());
   
}

assert.deepEqual(esPalindromo('Amor a Roma'), true, 'fallo test 1') ||
assert.deepEqual(esPalindromo('Adivina ya te opina, ya ni miles origina'), false, 'fallo test 2') ||
assert.deepEqual(esPalindromo('Allí por la tropa portado, traído a ese paraje de maniobras'), false, 'fallo test 3') ||
assert.deepEqual(esPalindromo('No Mara, sometamos o matemos a Ramón'), true, 'fallo test 4') ||
assert.deepEqual(esPalindromo('La totalidad arada dilato talón a talón'), false, 'fallo test 5') ||
assert.deepEqual(esPalindromo('Dábale arroz a la zorra el abad'), true, 'fallo test 6') ||
assert.deepEqual(esPalindromo('Acaso hubo búhos aquí'), false, 'fallo test 7') ||
assert.deepEqual(esPalindromo('Anita lava la tina'), true, 'fallo test 8') ||
assert.deepEqual(esPalindromo('La ruta nos aportó otro paso natural'), true, 'fallo test 9') ||
assert.deepEqual(esPalindromo('Se van sus naves'), true, 'fallo test 10') ||
console.log("exito");

