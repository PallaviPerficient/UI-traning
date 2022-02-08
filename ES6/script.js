
// const
const x = (x, y) => x + y;
document.getElementById("const").innerHTML = x(5, 5);


// Let
let  g = 2;
{  
  let g = 2;
}
document.getElementById("demo").innerHTML = g;


// Let another example
let m = 1;
if (m === 1) {
  let m = 2;
    document.getElementById("let").innerHTML=m;//2
}
document.getElementById("let1").innerHTML=m;//1


// // const and let 
// const cl = 1;
// if (cl === 1) {
//   const c2 = 2;
//     document.getElementById("const&let1").innerHTML= c2;
// }
// document.getElementById("constlet2").innerHTML= cl;



hello = () => {
  return "Welcome Friends!!!!";
}
document.getElementById("arrow").innerHTML = hello();

// --------for/of--------
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const fruits = new Map();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

document.getElementById("for").innerHTML = fruits;