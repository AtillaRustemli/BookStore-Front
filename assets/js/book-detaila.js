try {
  $(document).ready(function () {
    console.log("salam");
    
    $(".scroller-book").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 6,
      prevArrow:
        ' <span class="priv-arrow"><i class="fa-solid fa-angle-left" style="color: #000000;"></i></span>',
      nextArrow:
        '<span class="next-arrow"><i class="fa-solid fa-angle-right" style="color: #000000;"></i></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
} catch (error) {
  console.log("An error occurred:", error.message);
}

//------------------slider-in-book-detail-----------------------
