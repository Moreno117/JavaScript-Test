"use strict";

/*
You are given an array of integers. You should find the sum of the elements with even
indexes (0th, 2nd, 4th...) then multiply this summed number and the final element of
the array together. Don't forget that the first element has an index of 0.

For an empty array, the result will always be 0 (zero).

Input: A list of integers.

Output: The number as an integer.

Precondition:
0 ≤ len(array) ≤ 20
all(isinstance(x, int) for x in array)
all(-100 < x < 100 for x in array
*/


function evenLast(data) {

  var array = data;
  var suma = 0;
  var resultado = 0;


  if (array.length == 0) {
    return resultado;
  }

  for(var i = 0; i < data.length; i++){
    if( (i%2 == 0) ){
      suma = suma + data[i];
    }
  }

  return resultado = suma * array[array.length-1];


}

var assert = require('assert');

var TESTS = [
    {
        "input": [0, 1, 2, 3, 4, 5],
        "answer": 30,
    },
    {
        "input": [1, 3, 5],
        "answer": 30,
    },
    {
        "input": [6],
        "answer": 36,
    },
    {
        "input": [],
        "answer": 0,
    },
    {
        "input": [-45],
        "answer": 2025,
    },
    {
        "input": [-89, -86, 13, -69, 94, -75, 66, 97, -50],
        "answer": -1700,
    },
    {
        "input": [-78, -16, 84, 72, 33, -3, -9, -90, 13, -64, 10, -47, 99, -27, -87, -18, 76, -63],
        "answer": -8883,
    },
    {
        "input": [-40, 51, -71, -12, 24, -95, 20, 8, 68, -87, 28, 89, -1, 61, 40, 56, 16, 0],
        "answer": 0,
    },
    {
        "input": [60, -74, 18, -31, 90, 5, -86, -26],
        "answer": -2132,
    },
    {
        "input": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24],
        "answer": 0,
    },
    {
        "input": [-5, 94, 5, -28, 17, -72, 84, 85, -17, -96, -84, -76, 0, 75],
        "answer": 0,
    },
    {
        "input": [-94, 21, -58, 38, 56, 6, -91, -69, 39],
        "answer": -5772,
    },
    {
        "input": [28, 54, -7, 90, 64],
        "answer": 5440,
    },
    {
        "input": [39],
        "answer": 1521,
    },
    {
        "input": [-37, -36, -19, -99, 29, 20, 3, -7, -64, 84, 36, 62, 26, -76, 55, -24, 84, 49, -65, 41],
        "answer": 1968,
    },
    {
        "input": [43, 91, -86, 64, 25, -85, -71, -73, 23, 89, 10, 21, -78],
        "answer": 10452,
    },
    {
        "input": [-36, 82, -14, 82, -59, -35, -39, 33, 28, 27, -24, 6, 83, 39, 85, 58, -44, -18, -90, -75],
        "answer": 8250,
    },
    {
        "input": [69, -91, -49, -29, 13, -42, 34, -99, -97, -80, 16, -9],
        "answer": 126,
    },
    {
        "input": [-43, -72, 3, -83, -82, 93, -59, -80, 6, -39, 16, 39, 1, 47, -19, 67, 51],
        "answer": -6426,
    },
    {
        "input": [-80, -32, 52, -53, -21, -57, -58, -24, -15, -14, 97, -79, -35, 69],
        "answer": -4140,
    },
    {
        "input": [-77, -87, -10, 98, -65, -75, -26, -46, -54, 70, -52, -81, -94, 46],
        "answer": -17388,
    },
    {
        "input": [-88, 53, 55, -74, -36, 20, 95, -22, -63, -53, -68],
        "answer": 7140,
    },
    {
        "input": [45],
        "answer": 2025,
    },
    {
        "input": [72, -19, -73, -59, 83, -79, -90],
        "answer": 720,
    }
];

TESTS.forEach((v, i) => assert.equal(evenLast(v.input), v.answer, 'fallo test ' + i));
console.log("complete");
