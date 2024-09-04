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
