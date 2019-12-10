$(function() {


  $(".navbar li a").mPageScroll2id();

  new WOW().init();


  $('.carousel').carousel({
    interval: 3000
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


  // $("input, select, textarea").jqBootstrapValidation();
  // $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  

  $("#yourtelmodal").mask("+7 (999) 999-99-99");
  $("#yourtelabout").mask("+7 (999) 999-99-99");




});



// $(".main-testimonials .fancybox").fancybox();





/*---Preloader---*/
// $(window).on('load', function() { 
//   $(".loader_inner").fadeOut(); 
//   $(".loader").delay(400).fadeOut("slow"); 
// });

/*---End Preloader---*/