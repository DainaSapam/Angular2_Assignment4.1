interface Drivable {
    start(): string;
    drive(): string;
    getPosition(): string;
}

interface Flyable {
    startFly(): string;
    fly(): string;
    getFlyPosition(): string;
}

class Car implements Drivable {
    constructor(private value: string) { }
        
}

class Helicopter implements Flyable{
    constructor(private value: string) { }
    startFly() {
        return this.value;
    }

    fly() {
        return this.value;
    }

    getFlyPosition() {
        return this.value;
    }
}

class FlyingCar implements Drivable, Flyable {
    constructor(private value: string) { }
    start() {
            return this.value;
    }
        drive() {
            return this.value;
        }

        getPosition() {
            return this.value;
        }
        startFly() {
        return this.value;
    }

    fly() {
        return this.value;
    }

    getFlyPosition() {
        return this.value;
    }
}