class MyClass {

    draw() {
    }
}

class MyClass2 {
    constructor() {
        this.move = new function () {
        }
    }

}

class MyClass3 {

    move = new function () {
    };

}


let instanceArray = [];
let prototypeArray = [];
let xArray = [];


const iterations = 100000;

console.time('Case #1');

for (let i = 0; i < iterations; i++) {
    instanceArray.push(new MyClass())
}
console.timeEnd('Case #1');

console.time('Case #2');

for (let i = 0; i < iterations; i++) {
    prototypeArray.push(new MyClass2())
}
console.timeEnd('Case #2');


console.time('Case #3');

for (let i = 0; i < iterations; i++) {
    xArray.push(new MyClass3())
}
console.timeEnd('Case #3');



let myClass = new MyClass();
let myClass2 = new MyClass2();
let myClass3 = new MyClass3();

console.log(myClass);
console.log(myClass2);
console.log(myClass3);


function MyFunction1() {

}
MyFunction1.prototype.draw = new function () {
     console.log("Draw");
}

function MyFunction2() {

    this.move = new function () {
        console.log("Move");
    }
}

let function1Array = [];
let function2Array = [];

console.time('Function #1');

for (let i = 0; i < iterations; i++) {
    function1Array.push(new MyFunction1())
}
console.timeEnd('Function #1');

console.time('Function #2');

//move method called for each "new MyFunction2()" code run !!!
/*for (let i = 0; i < iterations; i++) {
    function2Array.push(new MyFunction2())
}*/
console.timeEnd('Function #2');

let myFunction1 = new MyFunction1();
let myFunction2 = new MyFunction2();

console.log(myFunction1);
console.log(myFunction2);