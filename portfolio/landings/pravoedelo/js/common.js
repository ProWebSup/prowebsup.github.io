$(function() {

	// $('.main-header').height($(window).height());


  /*---Resize Height---*/
  function height_Detect() {
    $(".main-header").css("height", $(window).height());
  };
  height_Detect();
  $(window).resize(function() {
    height_Detect();
  });
  /*---End Resize Height---*/



	var $page = $('html, body');
	$('.top-left .nav a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});


  var $page = $('html, body');
  $('.footer-left .nav a[href*="#"]').click(function() {
      $page.animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
      return false;
  });



  $(".main-reviews .owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    items: 1,
    margin:130,
    stagePadding: 130,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '#customNavReviews',
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


  $(".main-team .owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    items: 4,
    margin:130,
    stagePadding: 130,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '#customNavTeam',
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
            stagePadding: 30,
            dots: true,
        },
        992 : {
          items: 3,
          dots: true,
          margin:30,
          stagePadding: 30,
      },
        1200 : {
            items: 4,
            margin: 60,
            stagePadding: 60,
            dots: true,
        },
    }
});



  $(".main-partners .owl-carousel").owlCarousel({
    loop:true,
    autoplay: true,
    items: 4,
    margin:130,
    stagePadding: 130,
    autoplayTimeout: 10000,
    fluidSpeed: 10000,
    dots: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '#customNavPartners',
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
            items: 4,
            margin: 30,
            stagePadding: 30,
            dots: true,
        },
    }
});




  new WOW().init();


  $("input, select, textarea").jqBootstrapValidation();


  $("#action-phone").mask("+7 (999) 999-99-99");
  $("#action-phone2").mask("+7 (999) 999-99-99");
  $("#modal-phone").mask("+7 (999) 999-99-99");



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
        'background-color': '#fff'
    }
}

], $('body'));


});
