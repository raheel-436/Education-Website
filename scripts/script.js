//navbar styling on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0); //toggle this class on 0 pixel scroll at Y axis
});

//show or hide faq
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //for changing icon
    const faqIcon = faq.querySelector(".faq__icon i");
    if (faqIcon.className === "fa-solid fa-plus") {
      faqIcon.className = "fa-solid fa-minus";
    } else {
      faqIcon.className = "fa-solid fa-plus";
    }
  });
});

// show or hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
//close nav Menu

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);
