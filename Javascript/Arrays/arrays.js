function concat() {
    let a = ['a', 'b', 'c', 'd', 'e']
    let b = ['f', 'g', 'h']

    var c;
    c = a.concat(b);
    var f2 = document.getElementById("concat").innerHTML = c + " = Concat method";

}

function spread_operation() {
    let a = ['a', 'b', 'c', 'd', 'e']
    let b = ['f', 'g', 'h']
    c = [...a, ...b]
    console.log(c)
    var f3 = document.getElementById("spread_operation").innerHTML = c + " = Concat method By Spread Operation";

}

function push() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi");
    document.getElementById("push").innerHTML = fruits + " =  Push Method ";

}

function unshift() {
    let a = ['a', 'b', 'c', 'd', 'e']
    let b = [1, 2, 3, 4]
    b.unshift(a)
    var f4 = document.getElementById("unshift").innerHTML = b + " = Unshift method";

}

function shift() {
    let a = ['a', 'b', 'c', 'd', 'e']

    a.shift();
    var f5 = document.getElementById("shift").innerHTML = a + " = Shift method";
}

function pop() {
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();
    document.getElementById("pop").innerHTML = fruits;

}

function for_each() {
    let text = "";
    Cars = ["BMW", "Safari", "Mercedes"];
    Cars.forEach(myFunction);

    document.getElementById("for_each").innerHTML = text;

    function myFunction(item, index) {
        text += index + ": " + item + "<br>";
    }

}

function filter() {
    ages = [12, 19, 26, 8, 40];

    document.getElementById("xyz").innerHTML = ages.filter(checkAdult);

    function checkAdult(age) {
        return age >= 18;
    }

}