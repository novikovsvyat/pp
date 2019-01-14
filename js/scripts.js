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


