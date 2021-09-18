$(document).ready(function() {
    
/*-----------------sticky-navigation------------------*/
    
  $('.js--admission-open').waypoint(function(direction) {
    if (direction=="down")
        {
            $('nav').addClass('sticky');
        }
      else
      {
          $('nav').removeClass('sticky');
      }
  },{
      offset:'60px'
  }
     );
    
 
/*-----------------css-animation------------------*/    
    
    $('.js--admission-open').waypoint(function (direction) {
        $('.js--admission-open h1').addClass('animated bounceIn');
        $('.js--admission-open h3').addClass('animated bounceInUp');
    },{
      offset:'50%'
  });
    $('.js--block2').waypoint(function(direction) {
        $('.js--block2').addClass('animated bounceInRight');
    },{
        offset:'50%'
    }
     );
    $('.js--nav-icon').click(function() {
        $('.js--menu').slideToggle(400);
    
    })
    $('.js--admission-open').waypoint(function (direction) {
        $('.js--admission-open h1').addClass('animated bounceIn');
        $('.js--admission-open h3').addClass('animated bounceInUp');
    },{
      offset:'50%'
  });
});