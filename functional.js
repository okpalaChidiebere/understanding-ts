"use strict";
//pure fuctions: where the output of a function depends on its input
var num = 123;
function toString(val) {
    return val.toString();
}
var str = toString(num);
//immutable data
var data = Object.freeze([1, 2, 3, 4, 5, 6]); //the free helps us to avoid array.push which you dont want to do in a functional programming
//function as argument
var addEmoji = function (val) { return toString(val) + ' 😁'; }; //this function will take any variable, convert it to string and add an emoji to the result string
var emojiData = data.map(addEmoji); //instead of using a for loop, you can use map, to interate through the array and transform the value ;)
console.log(emojiData); //['1 😁','2 😁','3 😁','4 😁','5 😁','6 😁']
//function as return value
var appendEmoji = function (fixed) { return function (dynamic) { return fixed + dynamic; }; }; //fixed has a inner function called dynamic that add both its parent function argument and its argument together and return; meaning fixed function return a function
var rain = appendEmoji('🌧'); //creating function that points to a specific emoji
var sun = appendEmoji('🌤');
console.log(sun(' today')); //'🌤  today' //calling the function with the emoji that it is related to
console.log(rain(' tomorrow')); //'🌧  tomorrow'
