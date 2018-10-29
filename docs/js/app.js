//Select DOM Items
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuPicture = document.querySelector(".menu-picture");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State Of Menu
let showMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuPicture.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuPicture.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}
