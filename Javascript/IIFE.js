// example : 1
(function(){
    alert("IIFE Function");
}) ();

// example : 2

function greeting(){
    console.log("Hello ALL");
    (function(){
        console.log("Inside Immediately Invoked Function");
    }) ();
    console.log("Outside IIFE");
};

greeting();

const car = { name: "Audi", colour: "black", city: "London" }; 

const { name, colour, city } = car; 
console.log(name); // Output: Audi 
console.log(colour); // Output: black
console.log(city); // Output: London

const numbers = [1, 2, 3, 4, 5];

const [first, second, third] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3


let x = 1;
if (true) {
  let x = 2;
  console.log(x); // Output: 2
}
console.log(x); // Output: 1
