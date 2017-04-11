"use strict";

/*
Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players (X and O)
who take turns marking the spaces in a 3x3 grid. The player who succeeds in placing
three respective marks in a horizontal, vertical, or diagonal rows (NW-SE and NE-SW)
wins the game.
But we will not be playing this game. You will be the referee for this games results.
You are given a result of a game and you must determine if the game ends in a win or
a draw as well as who will be the winner. Make sure to return "X" if the X-player wins
and "O" if the O-player wins. If the game is a draw, return "D".

x-o-referee
A game's result is presented as a list of strings, where "X" and "O" are players' marks
and "." is the empty cell.

Input: A game result as a list of strings (unicode).

Output: "X", "O" or "D" as a string.

Precondition:
There is either one winner or a draw.
len(game_result) == 3
all(len(row) == 3 for row in game_result)
*/

function xoReferee(data) {

  var x = data;
  var array = [];
  for(var i = 0; i < x.length; i++){
    array.push(data[i].split(""));
  }

var reference;

  for(var j = 0; j < array.length; j++){
    for(var k = 0; k < array.length; k++){

    }
  }

}

var assert = require('assert');

var TESTS = [
    {
        "input": ["X.O",
                  "XX.",
                  "XOO"],
        "answer": "X"
    },
    {
        "input": ["OO.",
                  "XOX",
                  "XOX"],
        "answer": "O"
    },
    {
        "input": ["OOX",
                  "XXO",
                  "OXX"],
        "answer": "D"
    },
    {
        "input": ["O.X",
                  "XX.",
                  "XOO"],
        "answer": "X"
    },
    {
        "input": ["OOO",
                  "XX.",
                  ".XX"],
        "answer": "O"
    },
    {
        "input": ["OXO",
                  "XOX",
                  "OXO"],
        "answer": "O"
    },
    {
        "input": ["XOX",
                  "OXO",
                  "XOX"],
        "answer": "X"
    },
    {
        "input": ["OXO",
                  "XXO",
                  "XOX"],
        "answer": "D"
    },
    {
        "input": [".O.",
                  "XXX",
                  ".O."],
        "answer": "X"
    },
    {
        "input": ['...',
                  'XXX',
                  'OO.'],
        "answer": "X"
    },
    {
        "input": ['OOO',
                  'X.X',
                  '.X.'],
        "answer": "O"
    },
    {
        "input": ['O..',
                  'XOX',
                  '..O'],
        "answer": "O"
    },
    {
        "input": ['..O',
                  'XOX',
                  'O..'],
        "answer": "O"
    },
    {
        "input": ['.XO',
                  'X.X',
                  'OOO'],
        "answer": "O"
    },
    {
        "input": ['.XO',
                  'X.X',
                  'O.O'],
        "answer": "D"
    },
    {
        "input": [".OX",
                  ".XX",
                  ".OO"],
        "answer": "D"
    },
    {
        "input": ["...",
                  ".X.",
                  "..."],
        "answer": "D"
    },
    {
        "input": [".O.",
                  ".X.",
                  "..."],
        "answer": "D"
    },
    {
        "input": [".O.",
                  "...",
                  "..."],
        "answer": "D"
    },
    {
        "input": [".OX",
                  "..X",
                  ".OX"],
        "answer": "X"
    }
];



TESTS.forEach((v, i) => assert.equal(xoReferee(v.input), v.answer, 'fail test ' + i));
console.log('complete');
