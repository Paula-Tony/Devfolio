// Start of Navbar
let navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) navbar.classList.add("bg-dark");
  else navbar.classList.remove("bg-dark");
})
// End of Navbar

// Start of Scroll to Top
let scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > document.querySelector("#header").offsetHeight) {
    scrollToTop.style.setProperty("opacity", "1", "important");
  } else {
    scrollToTop.style.setProperty("opacity", "0", "important");
  }
});
// End of Scroll to Top