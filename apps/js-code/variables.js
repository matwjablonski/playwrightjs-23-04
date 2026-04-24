function foo() {
    console.log(a) // a = undefined, because of hoisting, the declaration of a is hoisted to the top of the function foo, but its assignment is not, so at this point a is undefined.
    var a = 1;

    if (a === 1) {
        var c = 2;
        let b = 3;
    }
}

foo.name = "foo";

foo();

console.log(a) // a = undefined, because a is a local variable to the function foo and cannot be accessed outside of it.


1..toFixed();

new Object();

{}

function Abc() {}

new Abc();

class Abc {}

new Abc();


class Dog extends Object {

}

function Dog() {}

