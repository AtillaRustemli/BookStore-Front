let targetSection = document.querySelector(".basket-cart");
let totalCount = document.querySelector(".total-count-fixed");
let sectionRect = targetSection.getBoundingClientRect();
let totalCountRect = targetSection.getBoundingClientRect();

function startFunction() {
  console.log(totalCountRect.bottom);
  console.log(sectionRect.bottom);
  totalCount.classList.add("foxed-p-for-total-count");
}

function endFunction() {
  console.log("Leaving the section");
  targetSection.style.background = "white";
  totalCount.classList.remove("foxed-p-for-total-count");
}

window.addEventListener("scroll", () => {
  if (sectionRect.top <= 0 && totalCountRect.bottom != sectionRect.bottom) {
    startFunction();
  } else {
    endFunction();
  }
});

window.addEventListener("scroll", (e) => {});
