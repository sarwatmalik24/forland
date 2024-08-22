const menuBtn = document.querySelector(".menu__btn");
const navLinks = document.querySelector(".nav__links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtnIcon.setAttribute("class", isOpen? "fa-solid fa-xmark" :"fa-solid fa-bars");

    if (!isOpen) {
        dropDownContent.classList.remove("dropdown-drop");
        dropDownMenuIcon.setAttribute("class", "fa-solid fa-plus");
    }
})


const dropDownMenu = document.querySelector(".dropdown");
const dropDownContent = document.querySelector(".dropdown-content");
const dropDownMenuIcon = dropDownMenu.querySelector("i");

dropDownMenu.addEventListener("click", ()=>{
  dropDownContent.classList.toggle("dropdown-drop");

  const isDrop = dropDownContent.classList.contains("dropdown-drop");

  dropDownMenuIcon.setAttribute("class", isDrop? "fa-solid fa-minus" : "fa-solid fa-plus");
})




const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 30,
  clickable: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },

    620: {
      slidesPerView: 2
    },

    768: {
      slidesPerView: 2
    },

    992: {
      slidesPerView: 2
    },

    1200: {
      slidesPerView: 3
    },
  }
});



const btn = document.querySelector(".play__btn");
const videoOverlay = document.querySelector(".video__overlay")
const closeVideo = document.querySelector(".close-video");
const videoOverlay2 = document.querySelector(".video__overlay2")
const closeVideo2 = document.querySelector(".close-video2");
const btn2 = document.querySelector(".play__btn2");

btn.addEventListener("click", ()=>{
  btn.classList.add("open");
  videoOverlay.classList.add("open");
  closeVideo.style.transform = "scale(1)";
  console.log("clicked");
});

closeVideo.addEventListener("click", ()=>{
  btn.classList.remove("open");
  videoOverlay.classList.remove("open");
  closeVideo.style.transform = "scale(0)";
});

btn2.addEventListener("click", ()=>{
  btn2.classList.add("open");
  videoOverlay2.classList.add("open");
  closeVideo2.style.transform = "scale(1)";
});

closeVideo2.addEventListener("click", ()=>{
  btn2.classList.remove("open");
  videoOverlay2.classList.remove("open");
  closeVideo2.style.transform = "scale(0)";
});



