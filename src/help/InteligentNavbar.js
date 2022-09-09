// defining variables and constants
let prevScrollPos = window.pageYOffset;
let scroll_change = 0;
const menuContainer = document.querySelector("#menu-container");
const mobileMenu = document.querySelector("#mobile-menu");
const iconClose = document.querySelector("#icon-close");
const iconMenu = document.querySelector("#icon-menu");

//go to top of the page after clicking the menu
menuContainer.addEventListener("click", goToTop);
function goToTop() {
  const bannerId = document.querySelector("#banner");
  bannerId.scrollIntoView();
}

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  //hiding mobile menu: hiding menu for mobile
  if (prevScrollPos < currentScrollPos) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");

    iconClose.classList.add("hide-icon-close");
    iconClose.classList.remove("show-icon-close");

    iconMenu.classList.add("show-icon-menu");
    iconMenu.classList.remove("hide-icon-menu");
  }

  //un-fix the menu if currentScrollPos < 108.5
  if (currentScrollPos < 108.5) {
    menuContainer.classList.remove("fix-menu-container");
    menuContainer.classList.remove("hide-menu-container");
  }

  //hide the menu if prevScrollPos < currentScrollPos && currentScrollPos > 200
  if (prevScrollPos < currentScrollPos && currentScrollPos > 250) {
    menuContainer.classList.remove("fix-menu-container");
    menuContainer.classList.add("hide-menu-container");
  }

  //define scrollChange and count it
  //when you go up
  if (prevScrollPos > currentScrollPos) {
    scroll_change = scroll_change + (prevScrollPos - currentScrollPos);
  }
  // when you go down
  if (prevScrollPos < currentScrollPos) {
    scroll_change = 0;
  }

  // when you go up and scroll change > 300 and currentScrollPos > 300
  if (
    prevScrollPos > currentScrollPos &&
    scroll_change > 250 &&
    currentScrollPos > 300
  ) {
    menuContainer.classList.add("fix-menu-container");
    menuContainer.classList.remove("hide-menu-container");
  }
  console.log("předchozi " + prevScrollPos);
  console.log("soucasna " + currentScrollPos);
  console.log("scroll_change " + scroll_change);

  prevScrollPos = currentScrollPos;
};
