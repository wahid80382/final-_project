$(function(){
    //Toggle Search Modal
    $('#search_btn').on('click', function(){
        $('#search_modal').addClass('show');
    })
    $('#search_close_btn').on('click', function(){
        $('#search_modal').removeClass('show');
    })

    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed:1500,
        dots:true,
        dotsClass:`slider_dot`,
        arrows:false,
      });
    

    
          
})