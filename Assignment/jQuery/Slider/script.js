let slideIndex = 5;
let r=0;
function moveSlides(n) {
    k=n;
    displaySlide(slideIndex += n,k);
}
$(document).ready(function(){
    var slideList = [
        {
            "ID": "001"
        },
     
        {
            "ID": "002" 
        },
        {
            "ID": "003"
        },
     
        {
            "ID": "004" 
        },
        {
            "ID": "005"
        },
     
        {
            "ID": "006" 
        },
        {
            "ID": "007"
        },
     
        {
            "ID": "008" 
        },
        {
            "ID": "009"
        },
     
        {
            "ID": "010" 
        },
        {
            "ID": "011" 
        },
      
        
    ]
    let slideHtml = "";
    if(slideList.length>5)
    {
    for(let i=1;i<=slideList.length;i++){
        slideHtml += '<div class="item">'+i+'</div>';
    }
    $(".MS-content").html(slideHtml);
    for (let i = 5; i <$('.item').length; i++) {
        $('.item').eq(i).hide();
    }
}
else{
    for(let i=1;i<=slideList.length;i++){
        slideHtml += '<div class="item" >'+i+'</div>';
    }
    $(".MS-content").html(slideHtml);

}
})


function displaySlide(n,j) {
    if (n > $('.item').length) {
        slideIndex = $('.item').length;
    }
    
    else if (n < 5) {
        slideIndex =5;
    }
    else if(j==1){
        r +=280;
        $('.item').animate({right:r});
        $('.item').eq(slideIndex-1).show();

    }
    else if(j==-1){
        $('.item').animate({right:'-=280px'});
        $('.item').eq(slideIndex - 5).show();

    }
    if(slideIndex==$('.item').length)
    {
        $(".next").hide();
    }
    if(slideIndex==5)
    {
        $(".pervious").hide();
    }
	if(slideIndex>5 && slideIndex<$(".item").length)
    {
        $(".pervious").show();
		$(".next").show();
    }
    
}