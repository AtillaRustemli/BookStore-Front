//-------------------------selected-refine----------------------
let refine_item = document.querySelectorAll(".refine-child-list");
function selectedRefine(el) {
  Array.from(refine_item).forEach((item) => {
    item.classList.remove(".refine-child-list");
  });
  el.classList.add(".refine-child-list");
}
