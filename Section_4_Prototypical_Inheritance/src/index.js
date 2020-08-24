function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

}

function Shape() {
}

Shape.prototype.duplicate = function () {
    console.log("Shape Duplicate");
};

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function () {
/*    Shape.prototype.duplicate();   //no diff with call
    Shape.prototype.duplicate.call();*/
    console.log("Square Duplicate");
};

/*
let sq = new Square();

sq.duplicate();
*/
