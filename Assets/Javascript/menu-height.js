const navElement = document.getElementById("navigation")
const header = document.querySelector(".header")
const main = document.querySelector("main")

navElement.style.height = window.screen.height - header.offsetHeight + "px";
