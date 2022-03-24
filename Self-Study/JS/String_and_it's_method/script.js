let text="ABC";
document.getElementById("length").innerHTML = text.length;

let str="Apple, mango ,banana"
document.getElementById("slice").innerHTML= str.slice(4,8)
document.getElementById("one-count").innerHTML= str.slice(8)
document.getElementById("negative-index").innerHTML = str.substr(-8);


// replace

function replace(){
   let text= document.getElementById("replace").innerHTML;
   document.getElementById("replace").innerHTML=text.replace("kanfade" ,"here")
}

//Uppercase

function Uppercase(){
    let uppercase =document.getElementById("upper-case").innerHTML;
    document.getElementById("upper-case").innerHTML= uppercase.toUpperCase();
}

//ToLowercase

function lowercase(){
    let lowercase = document.getElementById("lowercase").innerHTML;
    document.getElementById("lowercase").innerHTML=lowercase.toLowerCase();
}

//Concat

let text1= "Hello";
let text2= "World"; 
let text3= text1.concat("  " ,text2);
document.getElementById("concat").innerHTML=text3;


//ChaAt

var char = "helloWorld";
document.getElementById("charat").innerHTML=char.charAt(7);

// CharcodeAt

var charcodeAt ="helloworld";
document.getElementById('charcodeat').innerHTML=charcodeAt.charCodeAt(4);

//Split

let split = "a,b,c,d,e,f";
const myArray = split.split(",");
document.getElementById("split").innerHTML = myArray[0];
