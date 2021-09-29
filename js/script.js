const burger = document.querySelector('.burger');
const nav = document.querySelector('.hidden');

burger.addEventListener('click', function(event) {
    nav.classList.toggle('active');
});