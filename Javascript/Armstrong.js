function armstrong_number() {
    var num, num1, sum = 0,
        // var rem;
        num = document.getElementsByClassName("num")[0].value;
    for (num1 = num; num != 0; num = parseInt(num / 10)) {
        rem = num % 10;
        sum = sum + (rem * rem * rem);
    }
    console.log(sum);

    if (num1 == sum) {
        document.getElementById("xyz").innerText = num1 + " is Armstrong";
    } else {
        document.getElementById("xyz").innerText = num1 + " is Not Armstrong";

    }
}