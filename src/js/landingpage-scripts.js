$(document).ready(function(){
    $('#services-carousel.owl-carousel').owlCarousel({
      margin: 10,
          loop: true,
          dots:true,
          dotsEach: 1,
          responsive: {
            0: {
              items: 1.3
            },
            300:{
              items: 1.3
            },
            800: {
              items: 1.5
            },
            1000: {
              items: 2.1
            }
          }
        });
})  