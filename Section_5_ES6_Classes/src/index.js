
_myArray = new WeakMap();

class Stack {

    constructor() {
        _myArray.set(this, [])
    }


    push = (value) => {
        _myArray.get(this).push(value);
    }

    pop = () => {
        let items = _myArray.get(this);
        if (items.length <= 0) {
            throw Error("Stack is empty!");
        }
        return items.pop();
    }

    peek = () => {
        let items = _myArray.get(this);
        if (items.length <= 0) {
            throw Error("Stack is empty!");
        }
        return items[items.length - 1];
    }

    get count() {
        return _myArray.get(this).length;
    }
}

let stack = new Stack();