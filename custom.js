$(document).ready(function(){
   /*===== header js start=========== */
    $('.menu-bar span').click(function(){
        $('nav').slideDown(1000);
    })

    $('#cross').click(function(){
    $('nav').slideUp(1000);
    });
 /*===== header js start=========== */

 $('.icon-hoverr').click(function(){
    $('.hide-img').show();
 });
$('.open-box').click(function(){
    $('.hide-img').hide();
});



// owl carousel 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  // owl carousel 

// $('.name-input [type="text"]').click(function(){
// $(this).addClass(' ball', 'tall:focus');
// });
 
});


//=========== owl carousel============= js 
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:1,
        },
        750:{
            items:2,
          
        },
        1150:{
            items:3,
          
        }
    },
   
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
    
// })

//=========== owl carousel============= js 