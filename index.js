
var waittime = 6000;
var t = setTimeout(RightButton, waittime);


var slideIndex = 1;
document.getElementsByClassName("slide")[0].style.display = "inline";  

function LeftButton(){
	clearTimeout(t);
	t = setTimeout(RightButton, waittime);
	var n = slideIndex;
	slideIndex--;
	
	var x = document.getElementsByClassName("slide");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
		x[i].classList.remove("slideshow1");
		x[i].classList.remove("slideshow2");
		x[i].classList.remove("slideshow3");
		x[i].classList.remove("slideshow4");
	}
	if (slideIndex > x.length) 
	{
	  slideIndex = 1;
	}
	if (slideIndex < 1) {
	  slideIndex = x.length
	}
	
	x[slideIndex - 1].style.display = "inline"; 
	x[slideIndex - 1].style.left = "0%";	
	x[slideIndex - 1].classList.add("slideshow4");
	
	x[n - 1].style.display = "inline"; 
	x[n - 1].style.left = "100%";	
	x[n - 1].classList.add("slideshow3");
}
function RightButton(){
	clearTimeout(t);
	t = setTimeout(RightButton, waittime);
	var n = slideIndex;
	slideIndex++;

	var x = document.getElementsByClassName("slide");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
		x[i].classList.remove("slideshow1");
		x[i].classList.remove("slideshow2");
			x[i].classList.remove("slideshow3");
		x[i].classList.remove("slideshow4");
	}
	if (slideIndex > x.length) 
	{
	  slideIndex = 1;
	}
	if (slideIndex < 1) {
	  slideIndex = x.length
	}
	
	x[slideIndex - 1].style.display = "inline"; 
	x[slideIndex - 1].style.left = "0%";	
	x[slideIndex - 1].classList.add("slideshow1");
	
	x[n - 1].style.display = "inline"; 
	x[n - 1].style.left = "-100%";	
	x[n - 1].classList.add("slideshow2");
}
