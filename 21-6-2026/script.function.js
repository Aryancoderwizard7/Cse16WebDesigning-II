//normal function with no parameters

function greet() {
    console.log("Hello, World!");
}

greet();


//normalfunction with parameters

function multiply (a, b) {
    return a * b;
}

console.log(multiply(50,10));


//functions with expression

let add = function (a, b) {
    return a + b;
}   
console.log(add(30, 20));

const product = function (c, d) {
    return (c * d);
}
console.log(product(10,50));


//arrow function

const divide = () => {
   console.log("This is an arrow function that has no parameters.");
}

divide();