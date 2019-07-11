$(function() {

	// $('.the_menu').height($(window).height());

  // $('.main-header').parallax({imageSrc: 'img/header/header1.jpg'});




  var $page = $('html, body');
  $('.main-navbar .nav a[href*="#"], .main-about__btns a[href*="#"]').click(function() {
    $page.animate({
     scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
    return false;
  });






$('.portfolio-list .owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    stagePadding: 30,
    items: 3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});



$('.portfolio-index .owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    // stagePadding: 30,
    items: 4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});










  // $(".main-technologies .owl-carousel").owlCarousel({
  //   loop:true,
  //   autoplay: true,
  //   items: 3,
  //   margin:130,
  //   stagePadding: 130,
  //   autoplayTimeout: 5000,
  //   fluidSpeed: 5000,
  //   dots: false,
  //   nav: false,
  //   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  //   navContainer: '#TechNav',
  //   responsive: {
  //      // > 0
  //      0 : {
  //       items: 1,
  //       dots: true,
  //       margin:30,
  //       stagePadding: 30,
  //     },
  //     320 : {
  //       items: 1,
  //       dots: true,
  //       margin:30,
  //       stagePadding: 30,
  //     },
  //     480 : {
  //       items: 2,
  //       dots: true,
  //       margin:30,
  //       stagePadding: 30,
  //     },
  //       // > 768
  //       768 : {
  //         items: 2,
  //         margin: 0,
  //         stagePadding: 60,
  //         dots: true,
  //       },
  //       992 : {
  //         items: 3,
  //         dots: true,
  //         margin:30,
  //         stagePadding: 30,
  //       },
  //       1200 : {
  //         items: 6,
  //         margin: 60,
  //         stagePadding: 60,
  //         dots: true,
  //       },
  //     }
  //   });









/* Start .main-faq */

 // $("a.collapsed").click(function(){
 //      $(this).find(".btn:contains('answer')").toggleClass("collapsed");
 //  });

/* End .main-faq */



  new WOW().init();


  // $("input, select, textarea").jqBootstrapValidation();
  // $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  


  // $("#modal-phone").mask("+7 (999) 999-99-99");






});



  // $(".main-testimonials .fancybox").fancybox();


  


/*---Preloader---*/
// $(window).on('load', function() { 
//   $(".loader_inner").fadeOut(); 
//   $(".loader").delay(400).fadeOut("slow"); 
// });

/*---End Preloader---*/