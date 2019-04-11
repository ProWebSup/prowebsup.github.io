$(function() {

	// $('.main-header').height($(window).height());

  // $('.main-header').parallax({imageSrc: 'img/header/header1.jpg'});




/*---Resize Height---*/
  // function height_Detect() {
  //   $(".main_header").css("height", $(window).height());
  // };
  // height_Detect();
  // $(window).resize(function() {
  //   height_Detect();
  // });
  /*---End Resize Height---*/


  var $page = $('html, body');
  $('.main-navbar .nav a[href*="#"], .main-about__btns a[href*="#"]').click(function() {
    $page.animate({
     scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
    return false;
  });




  var $page = $('html, body');
  $('.toggle-menu .toggle-menu-wrap a[href*="#"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    $('.toggle-menu').hide();
    $('.hamburger').removeClass('is-active');
    return false;
  });



  $( ".burger-btn" ).click(function() {
    $( ".toggle-menu" ).slideToggle();
  });




/**
   * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
   *
   * @private
   * @author Todd Motto
   * @link https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
   * @callback requestCallback      callback   - Callback function for each iteration.
   * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
   * @returns {}
   */
   var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

   var hamburgers = document.querySelectorAll(".hamburger");
   if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }




  $(".main-technologies .owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    items: 4,
    margin:130,
    stagePadding: 130,
    autoplayTimeout: 5000,
    fluidSpeed: 5000,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '#TechNav',
    responsive: {
       // > 0
       0 : {
        items: 1,
        dots: true,
        margin:30,
        stagePadding: 30,
      },
      320 : {
        items: 1,
        dots: true,
        margin:30,
        stagePadding: 30,
      },
      480 : {
        items: 2,
        dots: true,
        margin:30,
        stagePadding: 30,
      },
        // > 768
        768 : {
          items: 2,
          margin: 0,
          stagePadding: 60,
          dots: true,
        },
        992 : {
          items: 3,
          dots: true,
          margin:30,
          stagePadding: 30,
        },
        1200 : {
          items: 6,
          margin: 60,
          stagePadding: 60,
          dots: true,
        },
      }
    });







  // $(".main-partners .owl-carousel").owlCarousel({
  //   loop:true,
  //   autoplay: true,
  //   items: 4,
  //   margin:130,
  //   stagePadding: 130,
  //   autoplayTimeout: 10000,
  //   fluidSpeed: 10000,
  //   dots: true,
  //   nav: true,
  //   navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  //   navContainer: '#NavPartners',
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
  //         items: 4,
  //         margin: 30,
  //         stagePadding: 30,
  //         dots: true,
  //       },
  //     }
  //   });



/* Start .main-faq */

 $("a.collapsed").click(function(){
      $(this).find(".btn:contains('answer')").toggleClass("collapsed");
  });

/* End .main-faq */



  new WOW().init();


  // $("input, select, textarea").jqBootstrapValidation();
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  


  $("#modal-phone").mask("+7 (999) 999-99-99");

    $("#action-phone").mask("+7 (999) 999-99-99");

  $("#brief-phone").mask("+7 (999) 999-99-99");




  $('.progress_bar').scroolly([
  {
//                    from: 'top',
//                    to: 'doc-bottom'
cssFrom:{
  width: '0.0%'
},
cssTo:{
  width: '100%'
}
},
{
  from: 'doc-top',
  to: 'doc-top 16%',
  cssFrom:{
    'background-color': '#00f'
  },
  cssTo:{
    'background-color': '#0f0'
  }
},
{
  from: 'doc-top 16%',
  to: 'doc-top 33%',
  cssFrom:{
    'background-color': '#0f0'
  },
  cssTo:{
    'background-color': '#0ff'
  }
},
{
  from: 'doc-top 33%',
  to: 'doc-top 50%',
  cssFrom:{
    'background-color': '#0ff'
  },
  cssTo:{
    'background-color': '#f00'
  }
},
{
  from: 'doc-top 50%',
  to: 'doc-top 66%',
  cssFrom:{
    'background-color': '#f00'
  },
  cssTo:{
    'background-color': '#f0f'
  }
},
{
  from: 'doc-top 66%',
  to: 'doc-top 84%',
  cssFrom:{
    'background-color': '#f0f'
  },
  cssTo:{
    'background-color': '#ff0'
  }
},
{
  from: 'doc-top 84%',
  to: 'doc-bottom',
  cssFrom:{
    'background-color': '#ff0'
  },
  cssTo:{
    'background-color': '#ff0'
  }
}

], $('body'));


});



  $(".main-testimonials .fancybox").fancybox();


  


/*---Preloader---*/
// $(window).on('load', function() { 
//   $(".loader_inner").fadeOut(); 
//   $(".loader").delay(400).fadeOut("slow"); 
// });

/*---End Preloader---*/