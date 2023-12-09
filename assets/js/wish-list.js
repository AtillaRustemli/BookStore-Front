//-------------------toggle-Content---------------------------

function toggleContent(selectedItem) {
  let listIems = document.getElementsByClassName("wish-list-item");
  Array.from(listIems).forEach((item) => {
    item.classList.remove("active");
  });
  selectedItem.classList.add("active");
}
//-------------------toggle-Content---------------------------
//---------------------submit-form----------------------------

function submitForm() {
  /*Burada istifade etdiyim list-de "form" tag-i yoxdur deye 
fetch-le formdata-ya append etdiyim datani backende gonderib responce aliram*/

  let formData = new FormData();

  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      formData.append(checkbox.name, checkbox.value);
    }
  });

  fetch("http://localhost:5262/api/Account", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  console.log("Form data:", formData);
}
//---------------------submit-form----------------------------
//---------------------select-all----------------------------

let checknoxInWhishList = document.getElementsByClassName(
  "checkbox-in-wish-list"
);
let selectAllBtn = document.querySelector(".select-all-btn-wish-list");

if (selectAllBtn.checked == true) {
}
function selectall(elem) {
  Array.from(checknoxInWhishList).forEach((item) => {
    item.checked = elem.checked;
  });
}
function checkSelectAll() {
  Array.from(checknoxInWhishList).forEach((item) => {
    if (!item.checked) {
      selectAllBtn.checked = false;
    }
  });
}
//----------------nav-list------------
let nav_list = document.getElementsByClassName("wish-list-nav-list-item");
function selectWishListNav(el) {
  Array.from(nav_list).forEach((item) => {
    item.classList.remove("wish-list-active");
  });
  el.classList.add("wish-list-active");
}
