
$(document).ready(function() {
	/*navbar*/
	document.addEventListener("scroll", function (e) {
		if (window.pageYOffset > 150) {
			if ($(window).width() >= 990)
				{ 	  $('.nav').addClass('nav--show'); }
		} else {
			$('.nav').removeClass('nav--show');
		}
	}, { passive: true });


$(".fancybox").fancybox();


  $(".eTimer").eTimer({
    etType: 0, etDate: "19.06.2020.0.0", etTitleText: "До открытия гостиницы осталось:", etTitleSize: 20, etShowSign: 1, etSep: ":", etFontFamily: "Trebuchet MS", etTextColor: "#a3a3a3", etPaddingTB: 15, etPaddingLR: 15, etBackground: "white", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "white", etShadow: " 0px 0px 10px 0px white", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 35, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#ffcc33", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
  });


	/*scroll to anchor*/
	$('.scrollTo').on('click', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 40
		}, 500);
	});

	/*scroll to top*/
	$('.nav__logo').on('click', function () {
		$("html, body").animate({ scrollTop: 0 }, 500);
		return false;
	});




  // $(".modal .modal-body .form-group input, select, textarea").jqBootstrapValidation();
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  

  $("#modal-phone").mask("+7 (999) 999-99-99");
   // $("#actionPhonel").mask("+7 (999) 999-99-99");
  // $("#yourtelabout").mask("+7 (999) 999-99-99");



	/*requisites*/
	// $('.footer__requisites').append('<p>ООО «СибСваи»</p><p>ИНН 5410065473</p><p>ОГРН 1175476019025</p>');





});
