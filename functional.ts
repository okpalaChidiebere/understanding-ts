//pure fuctions: where the output of a function depends on its input
let num = 123;
function toString(val: number){
    return val.toString();
}
const str = toString(num);

//immutable data
const data = Object.freeze([1,2,3,4,5,6]); //the free helps us to avoid array.push which you dont want to do in a functional programming

//function as argument
const addEmoji = (val: any) => toString(val) + ' 😁'; //this function will take any variable, convert it to string and add an emoji to the result string
const emojiData = data.map(addEmoji); //instead of using a for loop, you can use map, to interate through the array and transform the value ;)
console.log(emojiData); //['1 😁','2 😁','3 😁','4 😁','5 😁','6 😁']

//function as return value
const appendEmoji = (fixed: any) => (dynamic: any) => fixed + dynamic; //fixed has a inner function called dynamic that add both its parent function argument and its argument together and return; meaning fixed function return a function
const rain = appendEmoji('🌧'); //creating function that points to a specific emoji
const sun = appendEmoji('🌤');
console.log(sun(' today')); //'🌤  today' //calling the function with the emoji that it is related to
console.log(rain(' tomorrow')) //'🌧  tomorrow'
