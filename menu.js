const button = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

button.addEventListener('click',()=>{
    menu.classList.toggle('active');
    console.log("e")
})