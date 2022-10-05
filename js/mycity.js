jQuery(document).ready(function ($) {

  // NAVBAR SHOW
  if ($('.navbar').length > 0) {

    $(window).on('scroll', function () {

      if ($(window).scrollTop() >= 250) {
          $('.header').addClass('sticky');
          $('#btn-logo').removeClass('mx-auto');
          $('#logo').css("width","150px");
          $('.link-sosmed').css("width","30px");
          $('.link-sosmed').css("height","30px");
          $('.fab').css("font-size","18px");
          $('.fab').css("line-height","30px");
          $('.container-header').css("justify-content","flex-start");
      }
      else {
          $('.header').removeClass('sticky');
          $('#btn-logo').addClass('mx-auto');
          $('#logo').css("width","800px");
          $('.link-sosmed').css("width","40px");
          $('.link-sosmed').css("height","40px");
          $('.fab').css("font-size","25px");
          $('.fab').css("line-height","40px");
          $('.container-header').css("justify-content","center");
      }
    });

    var previousScroll = 0,
        stickyNav = $('.navbar'),
        stickyNavHeight = stickyNav.outerHeight(),
        menuOffset = stickyNav.offset().top, // position of menu (once scroll passed it, menu is hidden)
        menuOffsetBottom = (menuOffset + stickyNavHeight),
        detachPoint = menuOffsetBottom, // point of detach (after scroll passed it, menu is fixed)
        hideShowOffset = 1; // scrolling value after which triggers hide/show menu

    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop(),
          scrollDifference = Math.abs(currentScroll - previousScroll); 
      if (currentScroll > menuOffset) {
        if (currentScroll > (detachPoint + (stickyNavHeight*2)) ) {
          if (!stickyNav.hasClass('detached'))
            stickyNav.addClass('detached');
        }
        if (scrollDifference >= hideShowOffset) {
          if ( currentScroll > previousScroll && $(window).scrollTop() >= menuOffsetBottom ) {
            if (!stickyNav.hasClass('invisible'))
              stickyNav.addClass('invisible');
          } else {
            if (stickyNav.hasClass('invisible'))
              stickyNav.removeClass('invisible');
          }
        }
      } else {
        if (currentScroll <= menuOffsetBottom){
          stickyNav.removeClass('detached');
        }
      }
      previousScroll = currentScroll;
    })

  }
  $('#news').hover(function() {
    if ($('#news-dropdown').css('display') == 'block'){
      $('#news').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#news').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $('#cityview').hover(function() {
    if ($('#cityview-dropdown').css('display') == 'block'){
      $('#cityview').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#cityview').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $('#investment').hover(function() {
    if ($('#investment-dropdown').css('display') == 'block'){
      $('#investment').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#investment').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $('#culture').hover(function() {
    if ($('#culture-dropdown').css('display') == 'block'){
      $('#culture').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#culture').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $('#lifestyle').hover(function() {
    if ($('#lifestyle-dropdown').css('display') == 'block'){
      $('#lifestyle').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#lifestyle').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $('#property').hover(function() {
    if ($('#property-dropdown').css('display') == 'block'){
      $('#property').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#property').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $('#hangout').hover(function() {
    if ($('#hangout-dropdown').css('display') == 'block'){
      $('#hangout').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#hangout').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $('#technology').hover(function() {
    if ($('#technology-dropdown').css('display') == 'block'){
      $('#technology').css("box-shadow","inset 0 0 0 transparent");
    } 
    else{
      $('#technology').css("box-shadow","inset 0 -5px 0 black");
    } 
  });

  $(".dropdown").hover(            
    function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
        $(this).toggleClass('open');        
    },
    function() {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
        $(this).toggleClass('open');       
    }
  );

  var menubcg = document.getElementById('navbar-toggle');

  document.getElementById('navbar-toggle').onclick = function(){
      MenuIcon.reversed() ? MenuIcon.play() : MenuIcon.reverse();
      HoverMenuIcon.kill();
  };
    
  var span1 = document.querySelector('.navbar-toggle .icon-bar:nth-child(2)');
  var span2 = document.querySelector('.navbar-toggle .icon-bar:nth-child(3)');
  var span3 = document.querySelector('.navbar-toggle .icon-bar:nth-child(4)');
  var removeActive = document.getElementById('navbar-middle');      
  
  var MenuIcon = new TimelineMax({paused:true, reversed:true});
  MenuIcon
  .to(span1,1,{x:2, width:'40px',rotation:45,transformOrigin:'8px 50%', ease: Elastic.easeInOut.config(0.6, 0.3)},span1)
  .to(span3,1,{x:2, width:'40px',rotation:-45, transformOrigin:'8px 50%', ease: Elastic.easeInOut.config(0.6, 0.3)},span1)
  .to(span2,1,{x:50, ease: Elastic.easeInOut.config(0.6, 0.3)},span1);



  var spanOne = document.querySelector('.navbar-toggle .icon-bar:nth-child(2)');
  var spanThree = document.querySelector('.navbar-toggle .icon-bar:nth-child(4)');
      
  var HoverMenuIcon = new TimelineMax({paused:true, reversed:true});
      HoverMenuIcon
      .to(spanOne, .2, {width:40, ease: Power1.easeOut },'spanOne')
      .to(spanThree, .2, {width:40, ease: Power1.easeOut },'spanOne');

    /*  document.getElementById('ButtonBox').onmouseover = function(){
          HoverMenuIcon.play();
      }
      document.getElementById('ButtonBox').onmouseout = function(){
          HoverMenuIcon.reverse();
      }  */ 

  
      $(".owl-carousel").owlCarousel({
        loop: true,
        items : 3,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true,
                touchDrag: true
            },
            800: {
                items: 2,
                mouseDrag: true,
                touchDrag: true
            },
            1200: {
                items: 4,
                mouseDrag: true,
                touchDrag: true
            }
        }
    });
});
/*------------------------------------*\
 * jQuery CLOSING
\*------------------------------------*/
