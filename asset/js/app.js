$(function(){
    //Toggle Search Modal js start
    $('#search_btn').on('click', function(){
        $('#search_modal').addClass('show');
    })
    $('#search_close_btn').on('click', function(){
        $('#search_modal').removeClass('show');
    })
    //Toggle Search Modal js end

    //banner_slider js start
    $('.banner_slider').slick({
        autoplay: true,
        autoplaySpeed:1500,
        dots:true,
        dotsClass:`slider_dot`,
        arrows:false,
      });
      //banner_slider js end

      //new_arrivals_products_slider js start
      $('.product_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });
      //new_arrivals_products_slider js end

      $('.Deals_Of_The_Days_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        dotsClass:`slider_dot`,
        arrows:false,
      }); 
      //new_arrivals_products_slider js start

      $('.Latest_News_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
})