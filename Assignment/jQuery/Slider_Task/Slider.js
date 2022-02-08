	var slideIndex = 1;
	function moveSlides(n) {
		displaySlide(slideIndex += n);
	}

	function activeSlide(n) {
		displaySlide(slideIndex = n);
	}
	$(document).ready(function(){
		var slideList = [
			{
				"Image": "Image/img0.jpg" 
			},
		 
			{
				"Image": "Image/img1.jpg" 
			},
		  
			{
				"Image": "Image/img4.jpg" 
			},
		 
			{
				"Image": "Image/img5.jpg" 
			},
	
			{
				"Image": "Image/img7.jpg" 
			},
			{
				"Image": "Image/img8.jpg" 
			},
			{
				"Image": "Image/img9.jpg" 
			},
			{
				"Image": "Image/tiger1.jpg" 
			}
			
		]
		var slideHtml = "";
		var slideDots = "";
		slideList.map(function(slides, index){
			slideHtml += '<div class="slide"><img src="'+slides.Image+'"></div>';
			slideDots += '<span class="footerdot" onclick="activeSlide('+index+1+')"></span>'
		})
		$('.slides').html(slideHtml);
		$('.slidedots').html(slideDots);
		var totalslides = document.getElementsByClassName("slide");
		for (i = 1; i < totalslides.length; i++) {
			totalslides[i].style.display = "none";
		}
		var totaldots = document.getElementsByClassName("footerdot");
		totaldots[0].className += " active";
	})
	function displaySlide(n) {
		var i;
		var totalslides = document.getElementsByClassName("slide");
		var totaldots = document.getElementsByClassName("footerdot");
		
		if (n > totalslides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = totalslides.length;
		}
		for (i = 0; i < totalslides.length; i++) {
			totalslides[i].style.display = "none";
		}
		for (i = 0; i < totaldots.length; i++) {
			totaldots[i].className = totaldots[i].className.replace(" active", "");
		}
		totalslides[slideIndex - 1].style.display = "block";
		totaldots[slideIndex - 1].className += " active";
	}