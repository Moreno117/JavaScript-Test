"use strict";

/*
You are given a non-empty list of integers (X). You should return a list consisting of only
the non-unique elements in this list. To do so you will need to remove all unique elements
(elements which are contained in a given list only once). Do NOT change the order of the list.

Example:
[1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].

Precondition:
0 < len(data) < 1000
*/


function nonUniqueElements(data) {


  var  nuevo = [];
  for(var i= 0; i < data.length; i++){
    var x = data[i];
    for(var j = 0; j < data.length; j++ ){
      var y = data[j];
      if( i !== j ){
        if(x == y){
          nuevo.push(x);
          break
        }
      }
    }
  }
  console.log(nuevo);
  return nuevo

}

var assert = require('assert');

assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
console.log("complete");
