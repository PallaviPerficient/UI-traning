function greet(name : string) {
    return "Hello, " + name.toUpperCase();
  }
  greet("Pallavi");

const user = { name: "Alice", age: 30 };
console.log(user.name);

function printLength(str : any) {
    console.log(str.length());
 }
 printLength(null);