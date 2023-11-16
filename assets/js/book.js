//------------------new-releases-----------------------
$(document).ready(function () {
  $(".new-releases-books").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 10,
    prevArrow:
      ' <span class="priv-arrow"><i class="fa-solid fa-angle-left" style="color: #000000;"></i></span>',
    nextArrow:
      '<span class="next-arrow"><i class="fa-solid fa-angle-right" style="color: #000000;"></i></span>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
