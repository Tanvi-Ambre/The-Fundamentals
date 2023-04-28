"use strict";
var Person = /** @class */ (function () {
    function Person() {
        this.city = "";
    }
    Person.prototype.fullname = function () {
        return "";
    };
    return Person;
}());
var Hero = /** @class */ (function () {
    function Hero(firstname, city, lastname) {
        this.firstname = firstname;
        this.city = city;
        this.lastname = lastname;
        this.mission = "some mission";
    }
    Hero.canFly = function () {
        return "Flying";
    };
    Hero.prototype.fullname = function () {
        return this.firstname + " " + this.lastname;
    };
    Object.defineProperty(Hero.prototype, "accessMission", {
        get: function () {
            return this.mission;
        },
        set: function (nmission) {
            this.mission = nmission;
        },
        enumerable: false,
        configurable: true
    });
    Hero.canTalk = true;
    return Hero;
}());
;
var hero = new Hero("Bruce", "Dayton", "Banner");
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("h1")[0].innerText = hero.fullname();
});
