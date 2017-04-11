var assert = require('assert');

// 5. Escribir una función que reciba un número e indique si es un número primo

function primo(n){

  if(n <= 0 || n === 1){
    return false;
  }  

  var contador = 0;

  for(var i = 1; i <= n; i++){
    if( n%i === 0 ){
      contador++;
      console.log(contador)
    }
  }

  if(contador > 2){
    return false
  } else {
    return true
  }

}

assert.deepEqual(primo(-1), false, 'fallo test 1') ||
assert.deepEqual(primo(0), false, 'fallo test 2') ||
assert.deepEqual(primo(1), false, 'fallo test 3') ||
assert.deepEqual(primo(7), true, 'fallo test 4') ||
assert.deepEqual(primo(11), true, 'fallo test 5') ||
assert.deepEqual(primo(223), true, 'fallo test 6') ||
assert.deepEqual(primo(367), true, 'fallo test 7') ||
assert.deepEqual(primo(809), true, 'fallo test 8') ||
assert.deepEqual(primo(997), true, 'fallo test 9') ||
assert.deepEqual(primo(10), false, "fallo test") ||
console.log("exito");
