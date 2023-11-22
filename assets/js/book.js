//------------------new-releases-----------------------
$(document).ready(function () {
  $(".new-releases-books").slick({
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

//------------------new-releases-----------------------
//---------------------drawer--------------------------

let body = document.querySelector("body");
let drawer = document.querySelector(".drawer");
let drawerOpenBtn = document.querySelector(".drawer-open-btn");
let drawerCloseBtn = document.querySelector(".drawer-cancel-btn");
drawerOpenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  drawer.classList.add("drawer-open");
  body.classList.add("body-bg-black");
});
drawerCloseBtn.addEventListener("click", (e) => {
  e.preventDefault;
  e.stopPropagation;
  drawer.classList.remove("drawer-open");
  body.classList.remove("body-bg-black");
});
drawer.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.addEventListener("click", (e) => {
  drawer.classList.remove("drawer-open");
  body.classList.remove("body-bg-black");
});
