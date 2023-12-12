//-------------------------selected-refine----------------------
let refine_item = document.querySelectorAll(".refine-child-list");
function selectedRefine(el) {
  let parentEl = el.parentNode;
  let allChilds = parentEl.getElementsByTagName("li");

  Array.from(allChilds).forEach((item) => {
    item.classList.remove("active-refine");
  });
  el.classList.add("active-refine");
}
let typeOfBook = document.querySelector(".book-type");
function selectedBookType(el) {
  Array.from(typeOfBook.getElementsByTagName("li")).forEach((item) => {
    item.classList.remove("active-book-type");
  });
  el.classList.add("active-book-type");
}
