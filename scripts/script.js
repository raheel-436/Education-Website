//navbar styling on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0); //toggle this class on 0 pixel scroll at Y axis
});
