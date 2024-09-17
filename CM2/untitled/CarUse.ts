import {Car} from "./car";

let c1: Car = new Car("Clio", "Renault", "White", 2010);
let c2: Car = new Car("Ka", "Ford", "Aubergine", 2010);
c2.start();
c1.accelerate(100);
c2.accelerate(200);
c2.decelerate(300);
c1.decelerate(50);
c1.stop();
c2.stop();