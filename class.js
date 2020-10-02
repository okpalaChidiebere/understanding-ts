"use strict";
//this class stands as a blueprint for instanciating objects
var Emoji = /** @class */ (function () {
    //private _prev: string;
    //constructor(){};
    function Emoji(_icon, _prev) {
        this._icon = _icon;
        this._prev = _prev;
    }
    ; //we declared the variable private so that the variable can only be used inside the scope. This means it cannot be changed outside the scope.
    Object.defineProperty(Emoji.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Emoji.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Emoji.prototype.change = function (val) {
        this._prev = this._icon; //stores the previous state of the object
        this._icon = val;
    };
    ;
    //static methods: it is used by the class but NOT an instace of the class
    Emoji.addOneTo = function (val) {
        return val + 1;
    };
    return Emoji;
}());
var emoji = new Emoji('🌤', '');
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
