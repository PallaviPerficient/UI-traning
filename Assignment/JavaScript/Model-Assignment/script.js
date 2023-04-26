var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

document.getElementById("modalbtn").addEventListener("click", myFunction);

function myFunction() {
    console.log("First");
    modal.style.display = "block";
}
 
span.onclick = function() {
    modal.style.display = "none";
}

