/// <reference path="../lib/jquery.d.ts" />
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Good Morning");

$(document).ready(function (){
    document.getElementById('status').innerHTML = greeter.greet();
})