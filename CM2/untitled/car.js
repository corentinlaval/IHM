"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(model, brand, color, year, speed, started) {
        if (speed === void 0) { speed = 0; }
        if (started === void 0) { started = false; }
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
    }
    Car.prototype.start = function () {
        if (!this.started) {
            this.started = true;
            console.log("The ".concat(this.brand, " ").concat(this.model, ", is started, good road friend ;)"));
        }
        else {
            console.log("The ".concat(this.brand, " ").concat(this.model, ", is already started, good road friend ;)"));
        }
    };
    Car.prototype.stop = function () {
        if (this.started) {
            this.started = false;
            this.speed = 0;
            console.log("The ".concat(this.brand, " ").concat(this.model, ", is stopped ;)"));
        }
        else {
            console.log("The ".concat(this.brand, " ").concat(this.model, ", is already stopped ;)"));
        }
    };
    Car.prototype.accelerate = function (speed) {
        if (!this.started) {
            console.log("The car isn't started yet");
            this.start();
        }
        console.log("The car is accelerating, now the speed is ".concat(this.speed + speed, "."));
    };
    Car.prototype.decelerate = function (speed) {
        if (!this.started) {
            console.log("The car isn't started yet");
        }
        if ((this.speed - speed) <= 0) {
            console.log("The car is decelerating...");
            this.stop();
        }
        else {
            console.log("The car is decelerating, now the speed is ".concat(this.speed - speed, "."));
        }
    };
    return Car;
}());
exports.Car = Car;
