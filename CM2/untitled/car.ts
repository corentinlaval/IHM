export class Car{
    model: string;
    brand: string;
    color: string;
    year: number;
    speed: number;
    started: boolean;

    constructor(model: string, brand: string, color: string, year: number, speed: number = 0, started: boolean = false){
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.speed = speed;
        this.started = started;
    }

    start() : void{
        if(!this.started){
            this.started = true;
            console.log(`The ${this.brand} ${this.model}, is started, good road friend ;)`);
        } else {
            console.log(`The ${this.brand} ${this.model}, is already started, good road friend ;)`);
        }
    }

    stop() : void{
        if(this.started){
            this.started = false;
            this.speed = 0;
            console.log(`The ${this.brand} ${this.model}, is stopped ;)`);
        } else {
            console.log(`The ${this.brand} ${this.model}, is already stopped ;)`);
        }
    }

    accelerate(speed:number) : void{
        if(!this.started){
            console.log(`The car isn't started yet`);
            this.start();
        }
        console.log(`The car is accelerating, now the speed is ${this.speed + speed}.` )
    }

    decelerate(speed: number) : void{
        if(!this.started) {
            console.log(`The car isn't started yet`);
        }
        if((this.speed - speed ) <= 0){
            console.log(`The car is decelerating...`);
            this.stop();

        } else {
            console.log(`The car is decelerating, now the speed is ${this.speed - speed}.` )
        }
    }



}