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