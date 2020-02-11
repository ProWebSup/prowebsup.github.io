$(function() {


  // $(".scroll-down span a").mPageScroll2id();
  $(".main-header .navbar li a").mPageScroll2id();

  new WOW().init();


  $(".main-services .owl-carousel").owlCarousel({
    loop: true,
    responsive : {
      0 : {
        items : 1,
        nav : true,
        dots : false
      }
    },
    navText : "",
    navClass : ["owl-prev", "owl-next"]
  });


// var scrolled;
// window.onscroll = function() {
//     scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     if(scrolled > 1){
//       $(".main-header .navbar").css({"background": "#0067ac"});
//       $(".main-header .scroll-down").css({"display": "none"});
//     }
//     if(1 > scrolled){
//         $(".main-header .navbar").css({"background": "none"});
//         $(".main-header .scroll-down").css({"display": "block"})       
//     }

// }



// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});


// $(".fancybox").fancybox();


/*---Resize Height---*/
  // function height_Detect() {
  //   $(".main_header").css("height", $(window).height());
  // };
  // height_Detect();
  // $(window).resize(function() {
  //   height_Detect();
  // });
  /*---End Resize Height---*/





  /* Start .main-faq */

 // $("a.collapsed").click(function(){
 //      $(this).find(".btn:contains('answer')").toggleClass("collapsed");
 //  });

 /* End .main-faq */



  // new WOW().init();


  $(".main-header input, select, textarea").jqBootstrapValidation();
  $(".main-header input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  

  $("#headerCall").mask("+7 (999) 999-99-99");
   $("#actionPhonel").mask("+7 (999) 999-99-99");
  // $("#yourtelabout").mask("+7 (999) 999-99-99");




});



// $(".main-testimonials .fancybox").fancybox();





/*---Preloader---*/
// $(window).on('load', function() { 
//   $(".loader_inner").fadeOut(); 
//   $(".loader").delay(400).fadeOut("slow"); 
// });

/*---End Preloader---*/