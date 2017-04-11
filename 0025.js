"use strict";

/*
"Fizz buzz" is a word game we will use to teach the robots about division.
Let's learn computers.

You should write a function that will receive a positive integer and return:
"Fizz Buzz" if the number is divisible by 3 and by 5;
"Fizz" if the number is divisible by 3;
"Buzz" if the number is divisible by 5;
The number as a string for other cases.

Input: A number as an integer.

Output: The answer as a string.

Precondition: 0 < number ≤ 1000
*/

function fizzBuzz(data) {
  if( (data%3 == 0) && (data%5==0) ){
    return "Fizz Buzz"
  } else if ( (data%3 == 0) && (data%5 != 0) ) {
    return "Fizz"
  } else if ( (data%5 == 0) && (data%3 != 0) ) {
    return "Buzz"
  } else{
    return Number(data)
  }
}

var assert = require('assert');

var TESTS = [
        {
            "input": 15,
            "answer": "Fizz Buzz"
        },
        {
            "input": 6,
            "answer": "Fizz"
        },
        {
            "input": 10,
            "answer": "Buzz"
        },
        {
            "input": 7,
            "answer": "7"
        },
        {
            "input": 1000,
            "answer": "Buzz"
        },
        {
            "input": 1,
            "answer": "1"
        },
        {
            "input": 990,
            "answer": "Fizz Buzz"
        },
        {
            "input": 45,
            "answer": "Fizz Buzz"
        },
        {
            "input": 46,
            "answer": "46"
        },
        {
            "input": 47,
            "answer": "47"
        },
        {
            "input": 48,
            "answer": "Fizz"
        },
        {
            "input": 49,
            "answer": "49"
        },
        {
            "input": 50,
            "answer": "Buzz"
        },
        {
            "input": 999,
            "answer": "Fizz"
        },

        {
            "input": 1000,
            "answer": "Buzz"
        },
        {
            "input": 989,
            "answer": "989"
        }
];

TESTS.forEach((v, i) => assert.equal(fizzBuzz(v.input), v.answer, 'fallo test ' + i));
console.log('complete');
