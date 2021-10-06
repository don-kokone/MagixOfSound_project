const menu = () => {

const nav = document.querySelector(".navigation");
const burger = document.querySelector(".burger-button");

burger.addEventListener("click", ()=>{

    nav.classList.toggle("active")

})};

menu();


const navElement = document.getElementById("navigation")
const header = document.querySelector(".header")
const main = document.querySelector("main")

navElement.style.height = window.screen.height - header.offsetHeight + "px";







