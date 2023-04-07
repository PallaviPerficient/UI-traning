var span_TextcontentId = document.getElementById("contentId").innerText;
var span_Textusername = document.getElementById("username").innerText;


if(span_TextcontentId === "" && span_Textusername === ""){
    document.getElementById("primaryContent").style.display ="none";
}else if(span_Textusername === ""){
    document.getElementById("usernameparent").style.display ="none";
}else if(span_TextcontentId === ""){
    document.getElementById("contentIdparent").style.display ="none";
}
