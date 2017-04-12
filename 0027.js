"use strict";

/*
Ever tried to send a secret message to someone without using the postal
service? You could use newspapers to tell your secret. Even if someone
finds your message, it's easy to brush them off and that its paranoia
and a bogus conspiracy theory. One of the simplest ways to hide a secret
message is to use capital letters. Let's find some of these secret messages.

You are given a chunk of text. Gather all capital letters in one word in
the order that they appear in the text.

For example:
text = "How are you? Eh, ok. Low or Lower? Ohhh.",
if we collect all of the capital letters, we get the message "HELLO".

Input: A text as a string (unicode).

Output: The secret message as a string or an empty string.

Precondition:
0 < len(text) ≤ 1000
all(ch in string.printable for ch in text)
*/

function findMessage(data) {

  var expresion = /[A-Z]/g;
  var newMessage = data.match(expresion);

  if(newMessage == undefined){
    return ""
  } else {
    var secret = newMessage.join("");
    return secret
  }

}

var assert = require('assert');

var TESTS = [
        {
            "input": "How are you? Eh, ok. Low or Lower? Ohhh.",
            "answer": "HELLO",
        },
        {
            "input": "hello world!",
            "answer": "",
        },
        {
            "input": "HELLO WORLD!!!",
            "answer": "HELLOWORLD",
        },
        {
            "input": "A",
            "answer": "A",
        },
        {
            "input": "z",
            "answer": "",
        },
        {
            "input": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
            "answer": "SNNUQA",
        },
        {
            "input": "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.",
            "answer": "AIIIIIII",
        },
        {
            "input": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            "answer": "FVCSBSADIEPOLIWG",
        },
        {
            "input": "Secret, sEcret, seCret, secRet, secrEt, secreT!",
            "answer": "SECRET",
        },
        {
            "input": "dnwkldhiqw3ry37xhqdxaifiuoa7eya8w6r87a7y87y&Y&*DS&*DYH*&d8w9y8whd7*&Whdukjldwj*HDJKj",
            "answer": "YDSDYHWHDJK",
        },
        {
            "input": "ajhewIufwwfDnzsinfsDlheaynooQwpoiqewDjifnkbvz",
            "answer": "IDDQD",
        }
]

TESTS.forEach((v, i) => assert.equal(findMessage(v.input), v.answer, 'fallo test ' + i));
console.log("complete");
