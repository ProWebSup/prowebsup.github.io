$(function() {

	// $('.main-header').height($(window).height());

  // $('.main-header').parallax({imageSrc: 'img/header/header1.jpg'});




  var $page = $('html, body');
  $('.main-header__btn a[href*="#"]').click(function() {
    $page.animate({
     scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
    return false;
  });




  // var $page = $('html, body');
  // $('.toggle-menu .toggle-menu-wrap a[href*="#"]').click(function() {
  //   $page.animate({
  //     scrollTop: $($.attr(this, 'href')).offset().top
  //   }, 1000);
  //   $('.toggle-menu').hide();
  //   $('.hamburger').removeClass('is-active');
  //   return false;
  // });



  // $( ".burger-btn" ).click(function() {
  //   $( ".toggle-menu" ).slideToggle();
  // });






  $(".main-testimonials .owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    items: 1,
    margin:130,
    stagePadding: 130,
    autoplayTimeout: 10000,
    fluidSpeed: 10000,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '#NavTestimonials',
    responsive: {
       // > 0
       0 : {
          dots: true,
          margin:30,
          stagePadding: 30,
      },
        // > 768
        768 : {
            margin:130,
            stagePadding: 130,
            dots: true,
        }
    }
});










  new WOW().init();


  // $("input, select, textarea").jqBootstrapValidation();
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  


  $("#modal-phone").mask("+7 (999) 999-99-99");




});



  // $(".main-testimonials .fancybox").fancybox();


  


/*---Preloader---*/
// $(window).on('load', function() { 
//   $(".loader_inner").fadeOut(); 
//   $(".loader").delay(400).fadeOut("slow"); 
// });

/*---End Preloader---*/