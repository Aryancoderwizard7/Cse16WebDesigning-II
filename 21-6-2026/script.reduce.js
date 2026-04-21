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