$(window).load(function() {
	$('#s_title').fadeIn("slow");
});


// Fades out individual letters of Title in page 

$(".letter").hover(function(){
	$(this).fadeToggle("slow");
});


// Fades out content section in upper right of screen based on nav selection 
// Fades selected links out, unselected links in
// Fades title in lower left in/out based on selection

$(".nav_link").on('click', function(){
	event.preventDefault();
	if ($(this).attr("id") == "about_link") {
		$(this).attr("class", "selected");
		$(this).animate({opacity: .25}, 1250);
		$('#s_title').fadeOut("slow");
		$('#c_title').fadeOut("slow");
		$('#p_title').fadeOut("slow");
		$('#a_title').fadeIn("slow");
		$("#home_link").removeAttr("class");
		$("#home_link").animate({opacity: 1}, 1250);
		$("#contact_link").removeAttr("class");
		$("#contact_link").animate({opacity: 1}, 1250);
		$("#projects_link").removeAttr("class");
		$("#projects_link").animate({opacity: 1}, 1250);
		$("#contact_fade_wrapper").fadeOut("slow");
		$("#about_fade_wrapper").fadeIn("slow");
	}
	if ($(this).attr("id") == "contact_link") {
		$(this).attr("class", "selected");
		$(this).animate({opacity: .25}, 1250);
		$('#s_title').fadeOut("slow");
		$('#a_title').fadeOut("slow");
		$('#p_title').fadeOut("slow");
		$('#c_title').fadeIn("slow");
		$("#home_link").removeAttr("class");
		$("#home_link").animate({opacity: 1}, 1250);
		$("#about_link").removeAttr("class");
		$("#about_link").animate({opacity: 1}, 1250);
		$("#projects_link").removeAttr("class");
		$("#projects_link").animate({opacity: 1}, 1250);
		$("#about_fade_wrapper").fadeOut("slow");
		$("#contact_fade_wrapper").fadeIn("slow");
	}
	if ($(this).attr("id") == "home_link") {
		$(this).attr("class", "selected");
		$(this).animate({opacity: .25}, 1250);
		$('#a_title').fadeOut("slow");
		$('#c_title').fadeOut("slow");
		$('#p_title').fadeOut("slow");
		$('#s_title').fadeIn("slow");
		$("#about_link").removeAttr("class");
		$("#about_link").animate({opacity: 1}, 1250);
		$("#contact_link").removeAttr("class");
		$("#contact_link").animate({opacity: 1}, 1250);
		$("#projects_link").removeAttr("class");
		$("#projects_link").animate({opacity: 1}, 1250);
		$("#about_fade_wrapper").fadeOut("slow");
		$("#contact_fade_wrapper").fadeOut("slow");
	}
	if ($(this).attr("id") == "projects_link") {
		$(this).attr("class", "selected");
		$(this).animate({opacity: .25}, 1250);
		$('#a_title').fadeOut("slow");
		$('#c_title').fadeOut("slow");
		$('#s_title').fadeOut("slow");
		$('#p_title').fadeIn("slow");
		$("#about_link").removeAttr("class");
		$("#about_link").animate({opacity: 1}, 1250);
		$("#contact_link").removeAttr("class");
		$("#contact_link").animate({opacity: 1}, 1250);
		$("#about_fade_wrapper").fadeOut("slow");
		$("#contact_fade_wrapper").fadeOut("slow");
	}
});