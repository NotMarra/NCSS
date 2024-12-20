const menu = document.querySelector(".menu");
const menuBtnClose = document.querySelector("#menu-close");
const menuBtnOpen = document.querySelector("#menu-open");

menuBtnOpen.addEventListener("click", () => {
  menu.classList.add("open");
  menuBtnOpen.classList.toggle("show");
  menuBtnClose.classList.toggle("show");
});

menuBtnClose.addEventListener("click", () => {
  menu.classList.remove("open");
  menuBtnOpen.classList.toggle("show");
  menuBtnClose.classList.toggle("show");
});
