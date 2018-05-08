$(function() {

	$(".navbar-nav a").mPageScroll2id();
	$(".footer-menu a").mPageScroll2id();

	/*--- Start PopUp ---*/
	$(".fancybox").fancybox();
	/*--- End Popup ---*/


	$("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
	$("#client-phone").mask("+7 (999) 999-99-99");

});
