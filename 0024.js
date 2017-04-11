"use strict";


/*

A blacksmith gave his apprentice a task, ordering them to make a selection of rings.
The apprentice is not yet skilled in the craft and as a result of this, some (to be honest, most)
of rings came out connected together. Now he's asking for your help separating the rings and
deciding how to break enough rings to free so as to get the maximum number of rings possible.
All of the rings are numbered and you are told which of the rings are connected. This information
is given as a sequence of sets. Each set describes the connected rings. For example: {1, 2} means
that the 1st and 2nd rings are connected. You should count how many rings we need to break to
get the maximum of separate rings. Each of the rings are numbered in a range from 1 to N, where
N is total quantity of rings.

In the image (see bottom) you can see the connections: [[1,2],[2,3],[3,4],[4,5],[4,6],[6,5]].

The optimal solution here would be to break 3 rings, making 3 full and separate rings. So the result is 3.

Input: Information about the connected rings as array of arrays with integers.

Output: The number of rings to break as an integer.

Precondition:
all(len(s) == 2 for s in rings)
sorted(reduce(set.union, rings)) == list(range(1, max(reduce(set.union, rings)) + 1))

*/



function breakRings(rings){

  for (var i = 0; i < rings.length; i++) {
    var union = rings[i];
    for (var j = 0; j < 2; j++) {
      var noAnillo  = rings[i][j];
      console.log(rings[i][j]);
    }
  }

}



var TESTS = [
    {
        "input": [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 6]],
        "answer": 3
    },
    {
        "input": [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]],
        "answer": 3
    },
    {
        "input": [[5, 6], [4, 5], [3, 4], [3, 2], [2, 1], [1, 6]],
        "answer": 3
    },
    {
        "input": [[8, 9], [1, 9], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7]],
        "answer": 5
    },
    {
        "input": [[8, 7], [1, 9], [2, 7], [3, 6], [1, 7], [5, 7], [3, 4], [9, 5],
                  [9, 6], [3, 5]],
        "answer": 3
    },
    {
        "input": [[3, 4], [1, 6], [1, 2], [9, 5], [2, 5], [9, 2], [8, 3], [2, 4],
                  [8, 4], [1, 3], [8, 1], [1, 7], [6, 7]],
        "answer": 6
    },
    {
        "input": [[5, 7], [9, 4], [1, 2], [9, 5], [1, 3], [9, 3], [9, 6], [1, 5],
                  [2, 3], [3, 7], [9, 7], [8, 6], [3, 4]],
        "answer": 5
    },
    {
        "input": [[1, 9], [1, 2], [8, 5], [4, 6], [5, 6], [8, 1], [3, 4], [2, 6],
                  [9, 6], [8, 4], [8, 3], [5, 7], [9, 7], [2, 3], [1, 7]],
        "answer": 5
    },
    {
        "input": [[1, 3], [3, 4], [3, 5], [4, 6], [6, 7], [8, 3], [8, 1], [2, 6],
                  [8, 4], [9, 5], [4, 5], [1, 7]],
        "answer": 5
    },
    {
        "input": [[9, 5], [5, 6], [2, 6], [4, 5], [8, 2], [1, 3], [1, 4], [9, 4],
                  [1, 2], [9, 2], [8, 7], [8, 3], [8, 6], [2, 3], [8, 9]],
        "answer": 5
    },
    {
        "input": [[9, 7], [9, 6], [8, 5], [8, 3], [8, 9], [5, 7], [4, 5], [8, 4], [1, 7],
                  [9, 4], [1, 5], [2, 5], [4, 6], [8, 2], [1, 2], [2, 4], [8, 7], [8, 1]],
        "answer": 5
    },
    {
        "input": [[3, 4], [5, 6], [2, 7], [1, 5], [2, 6], [8, 4], [1, 7], [4, 5],
                  [9, 5], [2, 3], [8, 2], [2, 4], [9, 6], [5, 7], [3, 6], [1, 3]],
        "answer": 5
    },
    {
        "input": [[2, 5], [3, 7], [5, 6], [6, 7], [9, 6], [8, 9], [9, 7], [1, 4],
                  [1, 9], [9, 5], [2, 4], [2, 6], [2, 3], [9, 2], [3, 6], [4, 5], [1, 2]],
        "answer": 5
    },
    {
        "input": [[1, 4], [4, 7], [9, 3], [8, 2], [4, 6], [3, 4], [2, 3], [8, 9],
                  [5, 7], [9, 5]],
        "answer": 4
    },
    {
        "input": [[1, 3], [8, 4], [4, 6], [3, 7], [8, 2], [1, 2], [8, 9], [4, 5],
                  [8, 1], [1, 9], [1, 7], [1, 6], [2, 5], [9, 6], [2, 4], [9, 2]],
        "answer": 5
    },
    {
        "input": [[9, 7], [9, 4], [9, 3], [2, 6], [2, 5], [3, 7], [4, 6], [1, 3],
                  [1, 4], [8, 9], [3, 5], [5, 7]],
        "answer": 5
    },
    {
        "input": [[1, 2], [2, 3], [3, 4], [4, 5], [5, 2],
                  [1, 6], [6, 7], [7, 8], [8, 9], [9, 6],
                  [1, 10], [10, 11], [11, 12], [12, 13], [13, 10],
                  [1, 14], [14, 15], [15, 16], [16, 17], [17, 14]],
        "answer": 8
    },
    {
        "input": [[1, 4], [4, 7], [9, 2], [2, 6], [5, 6], [8, 1], [3, 7], [9, 3],
                  [3, 6], [8, 6], [1, 7], [2, 4], [1, 9], [8, 3], [9, 6]],
        "answer": 5
    },
    {
        "input": [[1, 2], [3, 7], [2, 3], [3, 5], [1, 4], [2, 5], [9, 3], [5, 7],
                  [1, 9], [8, 4], [1, 3], [2, 6], [9, 4]],
        "answer": 5
    },
    {
        "input": [[4, 6], [2, 5], [1, 6], [6, 7], [2, 6], [8, 7], [2, 4], [4, 7],
                  [9, 3], [3, 7], [8, 3], [2, 7], [9, 6], [4, 5]],
        "answer": 5
    },
    {
        "input": [[11, 7], [10, 5], [4, 6], [3, 4], [19, 14], [1, 17], [8, 4], [18, 3], [17, 12], [16, 11], [9, 11],
                  [2, 6], [11, 4], [17, 3], [13, 6], [11, 20], [11, 15], [8, 3], [5, 7]],
        "answer": 7
    },
    {
        "input": [[4, 6], [4, 12], [2, 4], [12, 5], [12, 14], [12, 7], [9, 13], [1, 10], [9, 18], [17, 19], [4, 13],
                  [2, 20], [10, 14], [11, 12], [11, 15], [16, 2], [8, 5], [3, 12], [17, 11], [10, 19]],
        "answer": 8
    },
    {
        "input": [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7], [8, 9], [9, 1]],
        "answer": 5
    },
    {
        "input": [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7], [8, 9], [9, 7],
                  [10, 4], [10, 11], [11, 12], [12, 13], [12, 14]],
        "answer": 7
    },
    {
        "input": [[1, 2], [1, 3], [1, 5], [2, 3], [2, 4], [4, 6], [5, 6]],
        "answer": 3
    }
];


var assert = require('assert');

TESTS.forEach((v, i) => assert.equal(breakRings(v.input), v.answer, 'fail test ' + i));
console.log('complete');




/*
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="500" height="200" viewBox="0, 0, 500, 200">
  <g id="Layer_1">
    <g>
      <path d="M76.088,160.422 C108.627,157.818 132.173,133.204 133,100.5 L123,100.5 C122.922,128.266 100.291,149.811 73,150.5 C45.234,150.423 23.689,127.791 23,100.5 L13,100.5 C13.441,134.248 39.558,159.655 73,160.5 L76.088,160.422 z" fill="#65A1CF"/>
      <path d="M76.088,160.422 C108.627,157.818 132.173,133.204 133,100.5 L123,100.5 C122.922,128.266 100.291,149.811 73,150.5 C45.234,150.423 23.689,127.791 23,100.5 L13,100.5 C13.441,134.248 39.558,159.655 73,160.5 L76.088,160.422 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M487.922,62.412 C485.318,29.873 460.704,6.327 428,5.5 L428,15.5 C455.766,15.578 477.311,38.209 478,65.5 C477.923,93.266 455.291,114.811 428,115.5 L428,125.5 C461.748,125.059 487.155,98.942 488,65.5 L487.922,62.412 z" fill="#65A1CF"/>
      <path d="M487.922,62.412 C485.318,29.873 460.704,6.327 428,5.5 L428,15.5 C455.766,15.578 477.311,38.209 478,65.5 C477.923,93.266 455.291,114.811 428,115.5 L428,125.5 C461.748,125.059 487.155,98.942 488,65.5 L487.922,62.412 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M431.087,75.578 C463.627,78.182 487.173,102.796 488,135.5 L478,135.5 C477.922,107.734 455.291,86.189 428,85.5 C400.234,85.577 378.689,108.209 378,135.5 L368,135.5 C368.441,101.752 394.558,76.345 428,75.5 L431.087,75.578 z" fill="#65A1CF"/>
      <path d="M431.087,75.578 C463.627,78.182 487.173,102.796 488,135.5 L478,135.5 C477.922,107.734 455.291,86.189 428,85.5 C400.234,85.577 378.689,108.209 378,135.5 L368,135.5 C368.441,101.752 394.558,76.345 428,75.5 L431.087,75.578 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M346.087,160.422 C378.627,157.818 402.173,133.204 403,100.5 L393,100.5 C392.922,128.266 370.291,149.811 343,150.5 C315.234,150.423 293.689,127.791 293,100.5 L283,100.5 C283.441,134.248 309.558,159.655 343,160.5 L346.087,160.422 z" fill="#65A1CF"/>
      <path d="M346.087,160.422 C378.627,157.818 402.173,133.204 403,100.5 L393,100.5 C392.922,128.266 370.291,149.811 343,150.5 C315.234,150.423 293.689,127.791 293,100.5 L283,100.5 C283.441,134.248 309.558,159.655 343,160.5 L346.087,160.422 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M256.087,160.422 C288.627,157.818 312.173,133.204 313,100.5 L303,100.5 C302.922,128.266 280.291,149.811 253,150.5 C225.234,150.423 203.689,127.791 203,100.5 L193,100.5 C193.441,134.248 219.558,159.655 253,160.5 L256.087,160.422 z" fill="#65A1CF"/>
      <path d="M256.087,160.422 C288.627,157.818 312.173,133.204 313,100.5 L303,100.5 C302.922,128.266 280.291,149.811 253,150.5 C225.234,150.423 203.689,127.791 203,100.5 L193,100.5 C193.441,134.248 219.558,159.655 253,160.5 L256.087,160.422 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M166.087,40.578 C198.627,43.182 222.173,67.796 223,100.5 L213,100.5 C212.922,72.734 190.291,51.189 163,50.5 C135.234,50.577 113.689,73.209 113,100.5 L103,100.5 C103.441,66.752 129.558,41.345 163,40.5 L166.087,40.578 z" fill="#65A1CF"/>
      <path d="M166.087,40.578 C198.627,43.182 222.173,67.796 223,100.5 L213,100.5 C212.922,72.734 190.291,51.189 163,50.5 C135.234,50.577 113.689,73.209 113,100.5 L103,100.5 C103.441,66.752 129.558,41.345 163,40.5 L166.087,40.578 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M166.087,160.422 C198.627,157.818 222.173,133.204 223,100.5 L213,100.5 C212.922,128.266 190.291,149.811 163,150.5 C135.234,150.423 113.689,127.791 113,100.5 L103,100.5 C103.441,134.248 129.558,159.655 163,160.5 L166.087,160.422 z" fill="#65A1CF"/>
      <path d="M166.087,160.422 C198.627,157.818 222.173,133.204 223,100.5 L213,100.5 C212.922,128.266 190.291,149.811 163,150.5 C135.234,150.423 113.689,127.791 113,100.5 L103,100.5 C103.441,134.248 129.558,159.655 163,160.5 L166.087,160.422 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M256.087,40.578 C288.627,43.182 312.173,67.796 313,100.5 L303,100.5 C302.922,72.734 280.291,51.189 253,50.5 C225.234,50.577 203.689,73.209 203,100.5 L193,100.5 C193.441,66.752 219.558,41.345 253,40.5 L256.087,40.578 z" fill="#65A1CF"/>
      <path d="M256.087,40.578 C288.627,43.182 312.173,67.796 313,100.5 L303,100.5 C302.922,72.734 280.291,51.189 253,50.5 C225.234,50.577 203.689,73.209 203,100.5 L193,100.5 C193.441,66.752 219.558,41.345 253,40.5 L256.087,40.578 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M368.078,62.412 C370.682,29.873 395.296,6.327 428,5.5 L428,15.5 C400.234,15.578 378.689,38.209 378,65.5 C378.077,93.266 400.709,114.811 428,115.5 L428,125.5 C394.252,125.059 368.845,98.942 368,65.5 L368.078,62.412 z" fill="#65A1CF"/>
      <path d="M368.078,62.412 C370.682,29.873 395.296,6.327 428,5.5 L428,15.5 C400.234,15.578 378.689,38.209 378,65.5 C378.077,93.266 400.709,114.811 428,115.5 L428,125.5 C394.252,125.059 368.845,98.942 368,65.5 L368.078,62.412 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M431.087,195.422 C463.627,192.818 487.173,168.204 488,135.5 L478,135.5 C477.922,163.266 455.291,184.811 428,185.5 C400.234,185.423 378.689,162.791 378,135.5 L368,135.5 C368.441,169.248 394.558,194.655 428,195.5 L431.087,195.422 z" fill="#65A1CF"/>
      <path d="M431.087,195.422 C463.627,192.818 487.173,168.204 488,135.5 L478,135.5 C477.922,163.266 455.291,184.811 428,185.5 C400.234,185.423 378.689,162.791 378,135.5 L368,135.5 C368.441,169.248 394.558,194.655 428,195.5 L431.087,195.422 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M346.087,40.578 C378.627,43.182 402.173,67.796 403,100.5 L393,100.5 C392.922,72.734 370.291,51.189 343,50.5 C315.234,50.577 293.689,73.209 293,100.5 L283,100.5 C283.441,66.752 309.558,41.345 343,40.5 L346.087,40.578 z" fill="#65A1CF"/>
      <path d="M346.087,40.578 C378.627,43.182 402.173,67.796 403,100.5 L393,100.5 C392.922,72.734 370.291,51.189 343,50.5 C315.234,50.577 293.689,73.209 293,100.5 L283,100.5 C283.441,66.752 309.558,41.345 343,40.5 L346.087,40.578 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <g>
      <path d="M76.088,40.578 C108.627,43.182 132.173,67.796 133,100.5 L123,100.5 C122.922,72.734 100.291,51.189 73,50.5 C45.234,50.577 23.689,73.209 23,100.5 L13,100.5 C13.441,66.752 39.558,41.345 73,40.5 L76.088,40.578 z" fill="#65A1CF"/>
      <path d="M76.088,40.578 C108.627,43.182 132.173,67.796 133,100.5 L123,100.5 C122.922,72.734 100.291,51.189 73,50.5 C45.234,50.577 23.689,73.209 23,100.5 L13,100.5 C13.441,66.752 39.558,41.345 73,40.5 L76.088,40.578 z" fill-opacity="0" stroke="#294270" stroke-width="3"/>
    </g>
    <text transform="matrix(1, 0, 0, 1, 72.5, 100)">
      <tspan x="-17.062" y="18.5" font-family="Verdana-Bold" font-size="48" fill="#294270">1</tspan>
    </text>
    <text transform="matrix(1, 0, 0, 1, 162.5, 100)">
      <tspan x="-17.062" y="18.5" font-family="Verdana-Bold" font-size="48" fill="#294270">2</tspan>
    </text>
    <text transform="matrix(1, 0, 0, 1, 252.5, 100)">
      <tspan x="-17.062" y="18.5" font-family="Verdana-Bold" font-size="48" fill="#294270">3</tspan>
    </text>
    <text transform="matrix(1, 0, 0, 1, 342.5, 100)">
      <tspan x="-17.062" y="18.5" font-family="Verdana-Bold" font-size="48" fill="#294270">4</tspan>
    </text>
    <text transform="matrix(1, 0, 0, 1, 427.5, 54.5)">
      <tspan x="-17.062" y="18.5" font-family="Verdana-Bold" font-size="48" fill="#294270">5</tspan>
    </text>
    <text transform="matrix(1, 0, 0, 1, 427.5, 144.5)">
      <tspan x="-17.062" y="18.5" font-family="Verdana-Bold" font-size="48" fill="#294270">6</tspan>
    </text>
    <path d="M73,155.5" fill-opacity="0" stroke="#000000" stroke-width="1"/>
    <path d="M17.5,99.25 C14.696,104.062 18.076,103.522 19.75,98.5" fill-opacity="0" stroke="#65A1CF" stroke-width="2" stroke-linecap="round"/>
    <path d="M16.375,104.25 C15.53,102.375 15.625,100.313 15.625,98.25" fill-opacity="0" stroke="#65A1CF" stroke-width="2" stroke-linecap="round"/>
    <path d="M20.75,105.375 C21.051,100.207 20.281,96.735 19.625,103.625" fill-opacity="0" stroke="#65A1CF" stroke-width="2" stroke-linecap="round"/>
    <path d="M20.875,101.625 C21.025,100.1 20.765,98.598 20.625,97.125" fill-opacity="0" stroke="#65A1CF" stroke-width="2" stroke-linecap="round"/>
    <path d="M106.75,106.125 C106.488,103.68 106.375,101.24 106.375,98.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M109.875,106 C109.666,103.676 109.529,101.323 109.75,99" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M126.25,105.125 C126.31,103 126.225,100.844 126.125,98.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M129.25,96.75 C129.792,101.189 129.1,104.63 129.625,99.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M197.25,97.25 C194.641,101.816 199.875,106.674 199.875,99.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M216.375,103.75 C216.508,100.602 216.087,100.785 216.75,98" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M219.25,97.875 C219.692,99.292 219.443,100.58 219.375,102" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M286.5,104.5 C286.447,95.841 288.864,94.135 289.625,102.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M287.25,103.625 C287.467,102.21 286.727,100.625 286.5,99.625" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M289.875,99.75 L289.875,99.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M306.75,101.125 L306.75,101.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M306.375,99.75 L306.375,99.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M306.5,102.375 L306.5,102.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M306.5,102 L306.5,102" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M306.5,101.375 L306.5,101.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M308.125,100.125 L308.125,100.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M309,100 L309,100" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M309.625,99.375 L309.625,99.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M309.375,102.125 L309.375,102.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M309.5,101 L309.5,101" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M396.875,99 L396.875,99" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M396.5,99.375 L396.5,99.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M398.75,101.25 L398.75,101.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M398.25,101.25 L398.25,101.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M399.125,100.5 L399.125,100.5" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M399.5,99.625 L399.5,99.625" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M399.375,100.625 L399.375,100.625" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M399.375,101.5 L399.375,101.5" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M399.375,102.125 L399.375,102.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M398.125,100.125 L398.125,100.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M397.75,100.75 L397.75,100.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M390.875,103.75 L390.875,103.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M390.875,103.25 L390.875,103.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M428.375,120 L428.375,120" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427.25,119.375 L427.25,119.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427,119 L427,119" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M429.125,119 L429.125,119" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M428.375,119.125 L428.375,119.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427.5,121.75 L427.5,121.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M429.875,121.875 L429.875,121.875" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M429,122.125 L429,122.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427.75,122.125 L427.75,122.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427,122.125 L427,122.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M430,11.875 L430,11.875" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M428.375,11.75 L428.375,11.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427.375,12.125 L427.375,12.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M429.375,12.125 L429.375,12.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M428.625,12 L428.625,12" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427.625,10.875 L427.625,10.875" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427.625,9.625 L427.625,9.625" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M427.375,8.875 L427.375,8.875" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M429.5,9.375 L429.5,9.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M429,9 L429,9" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M428.375,9 L428.375,9" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M481.5,137.25 L481.5,137.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M481.875,136.5 L481.875,136.5" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M481.375,136.125 L481.375,136.125" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M481.375,135.375 L481.375,135.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M481.375,134.625 L481.375,134.625" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M483.125,134.25 L483.125,134.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M483.75,136.75 L483.75,136.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M484.5,137.25 L484.5,137.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M484.5,136.5 L484.5,136.5" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M484.5,135.375 L484.5,135.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M484.5,134.75 L484.5,134.75" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M484.5,134.25 L484.5,134.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M373,137.5 L373,137.5" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <path d="M371.8,137.7 L371.8,137.7" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    <g>
      <path d="M371.5,136.688 L371.5,136.688" fill="#65A1CF"/>
      <path d="M371.5,136.688 L371.5,136.688" fill-opacity="0" stroke="#294270" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M372.375,138.5 L372.375,138.5" fill="#65A1CF"/>
      <path d="M372.375,138.5 L372.375,138.5" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M371.812,137.688 L371.812,137.688" fill="#65A1CF"/>
      <path d="M371.812,137.688 L371.812,137.688" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M371.5,137.062 L371.5,137.062" fill="#65A1CF"/>
      <path d="M371.5,137.062 L371.5,137.062" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M371.438,135.375 L371.438,135.375" fill="#65A1CF"/>
      <path d="M371.438,135.375 L371.438,135.375" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M371.812,134.5 L371.812,134.5" fill="#65A1CF"/>
      <path d="M371.812,134.5 L371.812,134.5" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M371.812,134.625 L371.812,134.625" fill="#65A1CF"/>
      <path d="M371.812,134.625 L371.812,134.625" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M371.562,134.438 L371.562,134.438" fill="#65A1CF"/>
      <path d="M371.562,134.438 L371.562,134.438" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M371.562,136.438 L371.562,136.438" fill="#65A1CF"/>
      <path d="M371.562,136.438 L371.562,136.438" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.062,136.25 L374.062,136.25" fill="#65A1CF"/>
      <path d="M374.062,136.25 L374.062,136.25" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.188,135.312 L374.188,135.312" fill="#65A1CF"/>
      <path d="M374.188,135.312 L374.188,135.312" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.312,134.688 L374.312,134.688" fill="#65A1CF"/>
      <path d="M374.312,134.688 L374.312,134.688" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.438,134.438 L374.438,134.438" fill="#65A1CF"/>
      <path d="M374.438,134.438 L374.438,134.438" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.625,134.438 L374.625,134.438" fill="#65A1CF"/>
      <path d="M374.625,134.438 L374.625,134.438" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.562,135.875 L374.562,135.875" fill="#65A1CF"/>
      <path d="M374.562,135.875 L374.562,135.875" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.438,136.625 L374.438,136.625" fill="#65A1CF"/>
      <path d="M374.438,136.625 L374.438,136.625" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.562,136.875 L374.562,136.875" fill="#65A1CF"/>
      <path d="M374.562,136.875 L374.562,136.875" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
    <g>
      <path d="M374.625,135.562 L374.625,135.562" fill="#65A1CF"/>
      <path d="M374.625,135.562 L374.625,135.562" fill-opacity="0" stroke="#65A1CF" stroke-width="4" stroke-linecap="round"/>
    </g>
  </g>
</svg>
*/
