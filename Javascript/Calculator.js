function addition() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById("result").value = result;
}

function substraction() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result = num1 - num2;
    document.getElementById("result").value = result;
}

function Multiply() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result = num1 * num2;
    document.getElementById("result").value = result;
}

function Divide() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var result = num1 / num2;
    document.getElementById("result").value = result;
}

function Clear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";

}