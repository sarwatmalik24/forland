const subMenuBtn = document.querySelector(".sub-menu-btn");
const subMenuLinks = document.querySelector(".sub-menu-links");

subMenuBtn.addEventListener("click", ()=>{
    subMenuLinks.classList.toggle("open2");
})