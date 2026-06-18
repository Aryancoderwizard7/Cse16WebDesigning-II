
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