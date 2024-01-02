const HEADER = document.querySelector("header")
window.addEventListener("scroll", () => {HEADER.classList.toggle("sticky", window.scrollY > 60)})
const MENU = document.querySelector("#menu-icon")
const NAVBAR = document.querySelector(".navbar")
MENU.onclick = () => {
  MENU.classList.toggle("bx-x")
  NAVBAR.classList.toggle("open")
}