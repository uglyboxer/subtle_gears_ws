$(".letter").hover(function(){
	$(this).fadeToggle("slow");
});


$("a").on('click', function(){
	event.preventDefault();
	if ($(this).attr("id") == "about_link") {
		$("#fade_wrapper_2").fadeOut("slow");
		$("#fade_wrapper_1").fadeIn("slow");
	}
	if ($(this).attr("id") == "contact_link") {
		$("#fade_wrapper_1").fadeOut("slow");
		$("#fade_wrapper_2").fadeIn("slow");
	}
	if ($(this).attr("id") == "home_link") {
		$("#fade_wrapper_1").fadeOut("slow");
		$("#fade_wrapper_2").fadeOut("slow");
	}
});