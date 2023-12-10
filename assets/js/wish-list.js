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

let selectSubmit = document.querySelector(".select-submit");

let checkboxInWhishList = document.getElementsByClassName(
  "checkbox-in-wish-list"
);
let allCheckbox = document.querySelectorAll('input[type="checkbox"]');
let selectAllBtn = document.querySelector(".select-all-btn-wish-list");

function selectall(elem) {
  Array.from(checkboxInWhishList).forEach((item) => {
    item.checked = elem.checked;
  });
  if (elem.checked) {
    selectSubmit.classList.add("select-submit-btn-open");
  } else {
    selectSubmit.classList.remove("select-submit-btn-open");
  }
}
function checkSelectAll() {
  let allCheckboxChecked = Array.from(checkboxInWhishList).every(function (
    item
  ) {
    return item.checked;
  });
  if (allCheckboxChecked) {
    selectAllBtn.checked = true;
  }
  Array.from(checkboxInWhishList).forEach((item) => {
    if (!item.checked) {
      selectAllBtn.checked = false;
    }
  });
  let isChecked = Array.from(allCheckbox).some((item) => {
    return item.checked;
  });
  console.log(isChecked);

  if (isChecked) {
    selectSubmit.classList.add("select-submit-btn-open");
  } else {
    selectSubmit.classList.remove("select-submit-btn-open");
  }
}

//----------------nav-list------------
let nav_list = document.getElementsByClassName("wish-list-nav-list-item");

function selectWishListNav(el) {
  Array.from(nav_list).forEach((item) => {
    item.classList.remove("wish-list-active");
  });
  el.classList.add("wish-list-active");
}

//--------------------------select-all---------------------------------
//---------------------select-submit-drawer----------------------------
function selectSubmitDrawer() {
  //   Array.from(checkboxInWhishList).forEach((item) => {
  //     if (item.checked || el.checked) {
  //       selectSubmit.classList.add("select-submit-btn-open ");
  //     } else {
  //       selectSubmit.classList.remove("select-submit-btn-open ");
  //     }
  //   });
}
