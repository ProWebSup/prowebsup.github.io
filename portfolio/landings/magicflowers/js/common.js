$(function() {

	// $('.main-header').height($(window).height());


	var $page = $('html, body');
	$('.top_mnu a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});

	/*---Toggle Menu---*/
	$(".toggle_mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});


	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	/*---End Toggle Menu---*/


$(".eTimer").eTimer({
      etType: 0,
      etDate: "30.07.2019.0.0",
      etTitleText: "До окончания акции осталось:",
      etTitleSize: 26,
      etShowSign: 1,
      etSep: ":",
      etFontFamily:"Roboto",
      etTextColor: "#fff",
      etPaddingTB: 15,
      etPaddingLR: 15,
      etBackground: "#ff9999",
      etBorderSize: 0,
      etBorderRadius: 2,
      etBorderColor: "white",
      etShadow: " 0px 0px 00px 0px #ff9999",
      etLastUnit: 4,
      etNumberFontFamily: "Roboto",
      etNumberSize: 42,
      etNumberColor: "white",
      etNumberPaddingTB: 0,
      etNumberPaddingLR: 8,
      etNumberBackground: "#990000",
      etNumberBorderSize: 0,
      etNumberBorderRadius: 5,
      etNumberBorderColor: "white",
      etNumberShadow: "inset 0px 0px 0px 0px rgba(0, 0, 0, 0)"
    });




	new WOW().init();


$("input, select, textarea").jqBootstrapValidation();


	$("#input-phone-id").mask("+7 (999) 999-99-99");
	$("#input-phone-action").mask("+7 (999) 999-99-99");
	$("#input-phone-header").mask("+7 (999) 999-99-99");
	$("#input-phone-flower").mask("+7 (999) 999-99-99");
	// $("#input-email-id").inputmask("email");

});
