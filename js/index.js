const HEADER = document.querySelector("header")
window.addEventListener("scroll", () => {HEADER.classList.toggle("sticky", window.scrollY > 60)})