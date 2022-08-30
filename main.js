const toogleClick = document.querySelector("#toogleNav");
const asideNav = document.querySelector(".toogle-nav");
const body = document.querySelector("body");
const overLay = document.querySelector(".overlay");
const illustImage = document.querySelector(".illust-image");

toogleClick.addEventListener("click", () => {
  asideNav.classList.toggle("active");
  body.classList.toggle("no-scroll");
  overLay.classList.toggle("active");
  // illustImage.classList.toggle("active");
});
