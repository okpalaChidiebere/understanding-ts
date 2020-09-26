function add(n1: number, n2: number, showResult: boolean, phrase: string){

    const result = n1 + n2;
    if(showResult){
        //console.log(phrase + n1 + n2); //Result is: 52.8
        console.log(phrase + result); //Result is: 7.8
    }
    else{
        return n1 + n2;
    }
    
}

//No difference between integer and float
// let number1; //it is not a good practise. Remember, you have to be precise while writing typescript
// let number1: number; //A better practise because you are precise that a number will be stored in the variable, so you cannot store another Type like boolean, or your {object}.
// let number1 = 22 // Also a good practise; In addition TypeScrit does a good jo in detecting that a number 'Type; is stored  in the variable.
const number1 = 5;
const number2 = 2.8;

const printResult = true; //we use const Type when we dont want the variable value t0 be changed
//let printResult = true; this will still work but the variable's value( the value can be of any type number, bool, or even an {object} ) can be changed or re-assigned down the line.

const resultPhrase = 'Result is: ';

//const result1 = add(number1, number2);
//console.log(result1); // 7.8

add(number1, number2, printResult, resultPhrase);

/** Understanding unknown type */
let userInput: unknown;
userInput = 3;
userInput = 'yes';

//understanding how unkown is different than type 'any'
//NOTE: dont use unkwon all the time but is bette than any to have some compiler check advantage
//in summary, any type is the kost flexible type of typescript and it disables any type checking
//if you want to use unknwon, you have to check for the variable type assigned to it.
let userName: string;
userInput = 2;
//userName = userInput; //syntax ERROR becasue the input is not integer. However, if we had the userInput of type 'any' we will have no syntax error;

if(typeof userInput == 'string'){ //type check before we can assign an unkown value to a fixed type
    userName = userInput; //the type check will eliminate the error
}
/** end understanding unknown type */

/**understanding the never type */
//this code by default returns void, but for more clearer understanding to other developers, you can put 'never' there. never is like a new type
//function generateError(message: string, code: number): void{ //thesame to never type
//function generateError(message: string, code: number){ //thesame to reutn void until you have the function return  a value
function generateError(message: string, code: number): never{
    throw {messahe: message, code: code};

    //while (true) {} //an infinite loop inside a function will never return. But you dont want an infinite loop ideally
}
/** end understanding never type */
