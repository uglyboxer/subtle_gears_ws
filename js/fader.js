// Fades out individual letters of Title in page 

$(".letter").hover(function(){
	$(this).fadeToggle("slow");
});


// Fades out conent section in upper right of screen based on nav selection 

$(".nav_link").on('click', function(){
	event.preventDefault();
	if ($(this).attr("id") == "about_link") {
		$("#contact_fade_wrapper").fadeOut("slow");
		$("#about_fade_wrapper").fadeIn("slow");
	}
	if ($(this).attr("id") == "contact_link") {
		$("#about_fade_wrapper").fadeOut("slow");
		$("#contact_fade_wrapper").fadeIn("slow");
	}
	if ($(this).attr("id") == "home_link") {
		$("#about_fade_wrapper").fadeOut("slow");
		$("#contact_fade_wrapper").fadeOut("slow");
	}
});