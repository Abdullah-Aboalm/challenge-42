let menuOpen = document.querySelector(".menuOpen");
let menu = document.querySelector(".mobileMenu");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("active");
  if (menuOpen.classList.contains("active")) {
    menuOpen.setAttribute("src", "./images/icon-close.svg");
    menu.style.top = "120px";
  } else {
    menuOpen.setAttribute("src", "./images/icon-hamburger.svg");
    menu.style.top = "-100%";
  }
});
