setTimeout(function(){
  $('.loading-bg').fadeToggle();
}, 1500);
 
 const btn = document.querySelector('.btn');
        btn.onmousemove = function(e){
            const x = e.pageX - btn.offsetLeft;
            const y = e.pageY - btn.offsetTop;

            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        }



var typing = new Typed (".typing" ,{
  strings : ["Developer","Designer","Photographer"] ,
  typeSpeed: 100,
  backspaceSpeed: 60, 
  loop:true,
});

var typing = new Typed (".typing2" ,{
  strings : ["Developer","Designer","Photographer"] ,
  typeSpeed: 100,
  backspaceSpeed: 60, 
  loop:true,
});





let options = {
  startAngle: -1.55,
  size: 100,
  value: 0.75,
  fill: {gradient: ['#D112DE']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".ps .bar").circleProgress({
  value: 0.70
});

$(".wp .bar").circleProgress({
  value: 0.60
});

$(".wtc .bar").circleProgress({
  value: 0.75
});

$(document).ready(function(){
  $(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.fixed-nav').addClass("sticky");
    }else{
        $('.fixed-nav').removeClass("sticky");
    }
    
  });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
      $('.navbar .menu-toggle').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });
  

// owl carousel script
$('.carousel').owlCarousel({
margin: 20,
loop: true,
autoplayTimeOut: 2000,
autoplayHoverPause: true,
responsive: {
    0:{
        items: 1,
        nav: false
    },
    600:{
        items: 2,
        nav: false
    },
    1000:{
        items: 3,
        nav: false
    }
}
});



  });




  
(function($) { "use strict";

$(document).ready(function(){"use strict";

  //Scroll back to top
  
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);	
  var offset = 50;
  var duration = 0;
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });				
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
  
  
});

})(jQuery);