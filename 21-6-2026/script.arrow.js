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