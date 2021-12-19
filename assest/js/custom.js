$(document).ready(
   function(){
       $(".header-carousel").owlCarousel({
           items:1,
           nav:true,
           autoplay:true,
           autoplayTimeout:3000,
           smartSpeed:1000,
           navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
           loop:true,
        });

        $(".carousel-one").owlCarousel({
            items:3,
            autoplay:true,
            autoplayTimeout:6000,
            smartSpeed:1000,
            navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            loop:true,
            responsive:{
                0:{
                    items:2,
                    nav:false
                },
                600:{
                    items:3,
                    nav:true
                },
               1000:{
                   items:3,
                   nav:true
               }
            }
        });

        $(".carousel-two").owlCarousel({
            items:3,
        })

    



    });

   