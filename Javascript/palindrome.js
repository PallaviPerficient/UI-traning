function palindrome() {

    var num, rev = 0,
        num1, i;

    num = document.getElementsByClassName('number')[0].value;

    num1 = num;

    for (; num > 0;) {

        a = num % 10;

        num = parseInt(num / 10);

        rev = rev * 10 + a;

    }

    if (rev == num1)

        document.getElementById('palin').innerText = num1 + " is Palindrome";

    else

        document.getElementById('palin').innerText = num1 + " is Not Palindrome";

}