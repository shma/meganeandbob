window.onload = function(){
  $(function() {
    $("#loading").fadeOut();
    $("#fullpage").fadeIn();
  });
}

$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        sectionsColor : ['none', '#fff', '#fff'],
        //autoScrolling: false,
        scrollOverflow: true,
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if(index == 2){
              $('.mb-about').show(); 
              $('.mb-about').addClass('animated bounceInDown'); 

              $('.mb-profile-image').show(); 
              $('.mb-profile-image').addClass('fadeIn'); 

              $('.mb-p').show(); 
              $('.mb-p').addClass('fadeIn'); 
            }
            if(index == 3){
              $('.mb-works').show(); 
              $('.mb-works').addClass('animated bounceInDown'); 

              $('.mb-col-1').show();
              //$('.mb-col-1').addClass('animated flipInX');

              $('.mb-col-2').show();
              // $('.mb-col-2').addClass('animated flipInX'); 
               
              $('.mb-col-3').show();
              //$('.mb-col-3').addClass('animated flipInX'); 
            }
        }
    });

});

