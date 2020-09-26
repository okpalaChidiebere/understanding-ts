// this function returns a number
function addNumber(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: ' + num);
}

//you can also specify what you want your function to return to avoid more syntax errors by
function addNumbers(n1: number, n2: number): string{ //usually we don write this. we let typescript infare the type ;)
    //return n1 + n2; //ERROR!! because we are suppose to return a string
    return n1.toString() + n2.toString();
}

/** Understanding function type */
let combineVariables: (a: number, b: number) => number; //This means this variable can only assign a function that has two parameter of numbers and will return a number
//let combineVariables: () => number; //This means you can only assign a function that has no parameter and will return a number to this variable
combineVariables = addNumber; //you can make a function point to  variable and then, execute that variable as a function
//combineVariables = printResult; //error because we assign the function that did not meet the citeria we specified
//combineVariables = 5; // Error because we indicated that the type of our variable is a function
console.log(combineVariables(2,3)); //5
/**end unserstanding function type */

/** understanding function type and callback
 * here the parameters of our function will accept, two numbers, and a calback function(we also set the citeria of the function)
 * the citerai for the function to be accepted is that the function will a number as an argument and retuens void
 */
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

//addAndHandle(10, 20, () => {}); //we just passed in an anonymous function
addAndHandle(10, 20, (result) => {
    console.log("callBack: " + result); //30
    return 3; // this 3 will be ignored because in the callback type specified, we made it void. So we purpose fully ignored anything returned ;)
});

/*addAndHandle(10, 20, (result, b) => { //this will give you ERROR !! because the callback function defined was not suppose to accept two variables
    console.log("callBack: " + result); //30
});*/
/** End understanding function type and callback */