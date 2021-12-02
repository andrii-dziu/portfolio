const burger = document.querySelector(".burger");
const menu = document.querySelector(".hidden-menu");
let linkItem = document.querySelectorAll(".link-hide");

burger.addEventListener("click", function (event) {
  menu.classList.toggle("active");
});

linkItem.forEach((link) =>
  link.addEventListener("click", function (event) {
    menu.classList.toggle("active");
  })
);
