class Human{

    constructor(private name:string){} //remebter to avoid having public characteristics for your class. You dont want someone to be able to modify the variable like Human.name outside the class without using the setter method 'change' in ts

    sayHi(){
        return `Hello, ${this.name}`;
    }
}

const patrick = new Human('Patruck Mullet');
console.log(patrick.sayHi()); //Hello Patrick Mullet

class SuperHuman extends Human{ //when you use extends you want to inherit a class characteristics as well as its methods

    private heroName: string;

    constructor(name: string){
        super(name); //this is inherited from the Human class
        this.heroName = `Hero ${name}`;
    }

    get getHeroName(){
        return this.heroName;
    }

    superPower(){
        return `${this.heroName} pop treys 🔥 🏀 🏀 🏀 `;
    }

    getHeroHumanName(){
        return super.sayHi();
    }

    //you can also use super() inside a constructor to call the parent class constructor
}

const steph = new SuperHuman('Steph Curry');
console.log(steph.getHeroName); // Hero Steph Curry
console.log(steph.superPower()); //'Hero Steph Curry pop treys 🔥 🏀 🏀 🏀`
/* When calling the getter fucntion for your class you dont have to add the '()' after
However, when calling static methods for your class, you MUST add the '()' as shown above*/
console.log(steph.sayHi()); //Hello, Steph curry
console.log(steph.getHeroHumanName()); //Hello, Steph curry

/* Inheritance can be great in th right situation but, you generally want to avoid having TOO may deeply nested classes because it comes hard to debug when things go wrong.
You can apply Services in Angular level and Directives  */







/** Another alternative than using inheritance is to use to use Mixins in a clas based format. NOTE: you can use mixins in function based format but we class based as used below is better ;)
 * https://www.typescriptlang.org/docs/handbook/mixins.html
 * https://www.digitalocean.com/community/tutorials/typescript-mixins
This can live anywhere in your codebase:*/
/**Things i observed using Mixins
   * - The variables/characteristics of the classes involved has to be public
   * - instead of encapsulating the whole thing inside a single class, we have the class that focus on 'what something does' and 'what something is'. 'what something is' is base class
   * - the class that focus on 'what something is'/ base class is usually the have thesame name with the interface that exteends the 'what something does' class(es)
   * - The interface class name has to the be thesame with the base class
   * - the variables that you want in the base class to be used in mixin class when you call the methods MUST be named THESAME variable name
   */

class canSayHi {
    
    name: any;

    sayHi(){
        return `Hello, ${this.name}`;
    }

    jump() {}
  }
  
  class HasSuperPower {

    heroName: any;

    superPower(): string{
        return `${this.heroName} pop treys 🔥 🔥 🔥 `;
    }
    duck() {}
  }
  
  // Including the base
  class SuperHero {
    private x = 0;
    y = 0;
    heroName; //the variable has thesame name with class(es) to be used in the 'mixin array'; if not you will get undefined in the output of the mixin variable

    constructor(public name: string){
        this.heroName = `SUPER ${name}`;
    }

    get getX(){
        return this.x;
    }
  }
  
  // Then you create an interface which merges
  // the expected mixins with the same name as your base
  interface SuperHero extends canSayHi, HasSuperPower {
    //because the applyMixins takes those classes(that focus on 'what something does') and apply their code to the base class, we now have to type the return values of the methods for this interface
    superPower: () => string; 
    sayHi: () => string;
  }
  // Apply the mixins into the base class via
  // the JS at runtime
  applyMixins(SuperHero, [canSayHi, HasSuperPower]);
  
  const player = new SuperHero('chidi'); //you can still use let
  player.jump();
  console.log(player.getX, player.y); //0 0
  console.log(player.superPower()); //SUPER chidi pop treys 🔥 🔥 🔥 
  
  // This can live anywhere in your codebase:
  function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtors) => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name =>{
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
  }