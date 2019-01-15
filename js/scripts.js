var newItemsLink = document.querySelector(".new-items-link");
var bestSellerLink = document.querySelector(".best-seller-link");

newItemsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bestSellerLink.classList.remove("toggle__item--active");
  newItemsLink.classList.add("toggle__item--active");
});

bestSellerLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bestSellerLink.classList.add("toggle__item--active");
  newItemsLink.classList.remove("toggle__item--active");
});

/* main page tabs */
document.getElementById("defaultOpen").click();

function openCat(evt, catName) {
  evt.preventDefault();
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("pop-categories__r-list");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("pop-categories__f-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" pop-categories__f-link--active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(catName).style.display = "flex";
  evt.currentTarget.className += " pop-categories__f-link--active";
}

var mainMenu_button = document.querySelector(".main-menu__toogle");
var userMenu_button = document.querySelector(".user-menu__toogle");
var menu = document.querySelector(".main-menu");

if (!menu.classList.contains("user-menu--hide") || !menu.classList.contains("user-menu--show")) {
  menu.classList.add("user-menu--hide");
}

if (!menu.classList.contains("main-menu--hide") || !menu.classList.contains("main-menu--show")) {
  menu.classList.add("main-menu--hide");
}

mainMenu_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menu.classList.contains("user-menu--show")) {
    menu.classList.remove("user-menu--show");
    menu.classList.add("user-menu--hide");
  }
  if (menu.classList.contains("main-menu--hide")) {
    menu.classList.remove("main-menu--hide");
    menu.classList.add("main-menu--show");
  } else {
    menu.classList.remove("main-menu--show");
    menu.classList.add("main-menu--hide");
  }
});

userMenu_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (menu.classList.contains("main-menu--show")) {
    menu.classList.remove("main-menu--show");
    menu.classList.add("main-menu--hide");
  }
  if (menu.classList.contains("user-menu--hide")) {
    menu.classList.remove("user-menu--hide");
    menu.classList.add("user-menu--show");
  } else {
    menu.classList.remove("user-menu--show");
    menu.classList.add("user-menu--hide");
  }
});



