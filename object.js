// Object value in TypeScript is written in key-value pairs(FYI: you need to know the object property(s) .  you can still log person or person.name. 
//best and optimal way to write and initialize TypeScript Bbject Type
var person = {
    name: 'Chidiebere',
    age: 30,
    hobbies: ['sports', 'cooking'] //array of string
};
//Object Type in Typescript is written in key-Type pairs; Here you are creating a new Typescript object
//This will work but you cannot access the property of the object when you want to log or use it. eg: person.age will give you error
//You rarely is this
/*const person: object = {
    name: 'Chidiebere',
    age: 30
};*/
/** This is not optimal because ideally you should know the object property and jsut initilize it right away, but you can log person.age*/
//This will be fine is you want to create an object quickly, initialize it and use it right away; where you dont want to create an interface
////You rarely is this; This is just how TypeScript represents and object in compiler. This will be converted to the optimal way above when complied to JS anyways ;)
/*const person: {
    name: string;
    age: number
} = {
    name: 'Chidiebere',
    age: 30
};*/
person.hobbies.push('Reading'); //you can alter the length of an array type
person.hobbies[2] = 'Running';
console.log(person.name); //chidiebere
/** Understanding Array */
var favourites;
favourites = ['cooking'];
favourites.push('Walking');
/** End Understanding Array  */
/*** Understanding  Any *******/
//any Type is the most flexible Type you can use. The typeScript compiler will basically not yell at you or type-check
//however, try to avoid this type whenever possible as long as you know what type of data you are working with
//you cannot assign any Type as a 'const'
var favourites2; // you can have a mixed array. You can store any variable. But it comes at a price; 
//you give up the benefits that types offers
favourites2 = ['sports', 1];
/**End Understanding Any */
//printing an array
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    //console.log(hobby.toUpperCase); //prints the hobbies string in uppercase
}
/***** understaning tuple Types ******/
var employee = {
    name: 'Chidiebere',
    role: [1, 'cooking'] //tuple is good to use when you know the exact length of an array and the exact type of each value in the array
};
employee.role[0] = 1; //altering the value of the tuple type
employee.role[1] = 'playing'; //altering the value of the tuple type
//employee.role[1] = true; // !! ERROR !!
/**End Understanding tuple */
/********** Understaning enumeration types
 * enum assigns labels to numbers
 * Use enum when you have to define global constants ;)
 * *******/
//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //it is still thesame as three lines of code right above this line
//enum Role {ADMIN = 5, READ_ONLY, AUTHOR}; //THis still works. The starting value will be 5, 'Read-only' will get 6 and so on by increment of 1
//enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200}; //you can but your default behavior too
var user = {
    name: 'string',
    // role: ADMIN  //not a good practise
    role: Role.ADMIN //using the enumeration data
};
console.log(user.role); //0
/**End understanding enum */
/** Understanding union types */
//you can be more flexible in the parameters you accept, but now you will need small logic to check for the types input to do an action depending on the type you get
//you may not need a runtime type check sometimes though ;)
function combine(n1, n2) {
    var result; //we use let because you can assign a string or integer. Remember we did not use any because we know the type of data to expect
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        //console.log(phrase + n1 + n2); //Result is: 52.8
        result = n1 + n2; //Result is: 7.8
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineAges = combine(30, 20);
console.log(combineAges); //50
var combineNames = combine('chidiebere ', 'okpala');
console.log(combineNames); //chidiebere okpala
/** End understanding union types */
/** Undrstanding lateral Types */
//This is similar to union, but now you have to be more specific on the exact value(put the raw value) you want rather than type
var checkValue; //the compiler will let you know when you put any other string value other than these two possible value
var randomVariable;
randomVariable = 22;
randomVariable = 'yes';
/*function (num2: combinable2){ //not a good practise. Makes your code more confusing. Typically this is used for union types
    
}*/
/* end Understanding aliases */
