//this class stands as a blueprint for instanciating objects
class Emoji{

    //private _prev: string;

    //constructor(){};

    constructor(private _icon: string, private _prev: string){}; //we declared the variable private so that the variable can only be used inside the scope. This means it cannot be changed outside the scope.
    get icon(){
        return this._icon;
    };

    get prev(){
        return this._prev;
    };

    change(val: string){
        this._prev = this._icon; //stores the previous state of the object
        this._icon = val;
    };

    //static methods: it is used by the class but NOT an instace of the class
    static addOneTo(val: string){
        return val + 1;
    }
}

const emoji = new Emoji('🌤', '');
console.log(emoji.icon, emoji.prev); // 🌤' 
emoji.change('🍈');
emoji.change('🌎');
console.log(emoji.icon, emoji.prev); //🌎 🍈
Emoji.addOneTo('Yes'); //i did not assign the return value to something. This is just a test



//General Understanding
//it still works
/*class Emoji{
    //icon: string;
    constructor(icon: string){ // //runs once when the obejct is instanciated
        this.icon = icon;
    }

}
const sunObject = new Emoji('🌤');
console.log(sunObject); //Emoji { icon: '🌤' }*/
//End general understanding