
let person = {
    name: "John",
    age: 30,
    city: "New York"
};  

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);   
console.log(typeof (person));



let numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);    
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(typeof (numbers));
console.log(numbers.length);


let mixedArray = [1, "Hello", true, null, undefined, { name: "Alice" }, [1, 2, 3]];

console.log(mixedArray);
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
console.log(mixedArray[5]);
console.log(mixedArray[6]);
console.log(typeof (mixedArray));
console.log(mixedArray.length);


// printig the types of the elements in the mixed array

for (let i = 0; i < mixedArray.length; i++) {
    console.log(typeof (mixedArray[i]));
}


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

//arrow function with parameters

const power = (x, y, z) => {
    return x ** y ** z;
}
console.log(power(2, 3, 2));


// Map on array.

let newArray = [1, 2, 3, 4, 5];
let squaredArray = newArray.map((num) => num ** 2);
let cubedArray = newArray.map((num) => num ** 3)

console.log(newArray);
console.log(squaredArray);
console.log(cubedArray);

// Reduce on array.



let min = sum.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue), Infinity);

console.log(min);

let average = sum.reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}, 0);

console.log(average);


let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 }
];

let marks = students.map(student => student.grade);

console.log(marks);let sum = [1, 2, 3, 4, 5];

let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total);

let productOfArray = sum.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(productOfArray);

let max = sum.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);

console.log(max);