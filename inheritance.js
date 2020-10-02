"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    } //remebter to avoid having public characteristics for your class. You dont want someone to be able to modify the variable like Human.name outside the class without using the setter method 'change' in ts
    Human.prototype.sayHi = function () {
        return "Hello, " + this.name;
    };
    return Human;
}());
var patrick = new Human('Patruck Mullet');
console.log(patrick.sayHi()); //Hello Patrick Mullet
var SuperHuman = /** @class */ (function (_super) {
    __extends(SuperHuman, _super);
    function SuperHuman(name) {
        var _this = _super.call(this, name) || this;
        _this.heroName = "Hero " + name;
        return _this;
    }
    Object.defineProperty(SuperHuman.prototype, "getHeroName", {
        get: function () {
            return this.heroName;
        },
        enumerable: false,
        configurable: true
    });
    SuperHuman.prototype.superPower = function () {
        return this.heroName + " pop treys \uD83D\uDD25 \uD83C\uDFC0 \uD83C\uDFC0 \uD83C\uDFC0 ";
    };
    SuperHuman.prototype.getHeroHumanName = function () {
        return _super.prototype.sayHi.call(this);
    };
    return SuperHuman;
}(Human));
var steph = new SuperHuman('Steph Curry');
console.log(steph.getHeroName); // Hero Steph Curry
console.log(steph.superPower()); //'Hero Steph Curry pop treys 🔥 🏀 🏀 🏀`
/* When calling the getter fucntion for your class you dont have to add the '()' after
However, when calling static methods for your class, you MUST add the '()' as shown above*/
console.log(steph.sayHi()); //Hello, Steph curry
console.log(steph.getHeroHumanName()); //Hello, Steph curry
/* Inheritance can be great in th right situation but, you generally want to avoid having TOO may deeply nested classes because it comes hard to debug when things go wrong.
You can apply Services in Angular level and Directives  */
/** Another alternative than using inheritance is to use to use 'Mixins' that ts offers. This still allows us to use class based OOP
This can live anywhere in your codebase:*/
var canSayHi = /** @class */ (function () {
    function canSayHi() {
    }
    canSayHi.prototype.sayHi = function () {
        return "Hello, " + this.name;
    };
    canSayHi.prototype.jump = function () { };
    return canSayHi;
}());
var HasSuperPower = /** @class */ (function () {
    function HasSuperPower() {
    }
    HasSuperPower.prototype.superPower = function () {
        return this.heroName + " pop treys \uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25 ";
    };
    HasSuperPower.prototype.duck = function () { };
    return HasSuperPower;
}());
// Including the base
var SuperHero = /** @class */ (function () {
    function SuperHero(name) {
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.heroName = "SUPER " + name;
    }
    Object.defineProperty(SuperHero.prototype, "getX", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    return SuperHero;
}());
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(SuperHero, [canSayHi, HasSuperPower]);
var player = new SuperHero('chidi'); //you can still use let
player.jump();
console.log(player.getX, player.y); //0 0
console.log(player.superPower()); //SUPER chidi pop treys 🔥 🔥 🔥 
// This can live anywhere in your codebase:
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtors) {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}
/**Things i observed using Mixins
 * - The variables/characteristics of the classes involved has to be public
 * - instead of encapsulating the whole thing inside a single class, we have the class that focus on 'what something does' and 'what something is'
 * - the class that focus on 'what something is'/ base class is usually the have thesame name with the interface that exteends the 'what something does' class(es)
 * - The interface class name has to the be thesame with the
 */ 
