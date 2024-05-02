//* Start of Nav
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav-item .nav-link");

window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`.nav-link[href="#${section.id}"]`)
        .classList.add("active");
    }
  });
});
//* End of Nav

//* Start of Typer Animation
let typerElement = document.querySelector("#typer span:first-child");
let typerCursor = document.querySelector("#typer .typed-cursor");

function addCharacters(word) {
  let n = 0;
  let typer = setInterval(function () {
    typerElement.textContent += word[n];
    n++;

    if (n >= word.length) {
      clearInterval(typer);
      typerCursor.classList.add("blink");
      setTimeout(function () {
        removeCharacters();
      }, 2000);
    }
  }, 100);
}

function removeCharacters(word) {
  typerCursor.classList.remove("blink");
  let typer = setInterval(function () {
    typerElement.textContent = typerElement.textContent.slice(0, -1);

    if (typerElement.textContent.length <= 0) {
      clearInterval(typer);
      if (gen.next().done) {
        gen = generator();
        gen.next();
      }
    }
  }, 100);
}

function* generator() {
  yield addCharacters("Freelancer");
  yield addCharacters("Photographer");
  yield addCharacters("Designer");
  yield addCharacters("Developer");
}

let gen = generator();
gen.next();
//* End of Typer Animation

//* Start of Counter
let counterSection = document.querySelector(".counter");
let nums = document.querySelectorAll(".counter .counter-num");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= counterSection.offsetTop - 800) {
    if (!started) nums.forEach((num) => startCount(num));
    started = true;
  }
});

function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) clearInterval(count);
  }, 2000 / goal);
}
//* End of Counter

//* Start of Carousel
let imgs = document.querySelectorAll(".card .card-img-top-custom");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    let imgsSource = [...imgs]
      .map((img) => img.src)
      .filter((img) => img !== this.src);
    const popup = document.createElement("div");
    popup.classList.add(
      "popup",
      "d-flex",
      "align-items-center",
      "justify-content-center",
      "bg-dark",
      "position-fixed",
      "start-0",
      "end-0",
      "top-0",
      "bottom-0",
      "p-3",
      "p-md-5"
    );
    const popupContent = `
      <button class="close p-0 bg-transparent border-0 text-light position-absolute"><i class="fa-solid fa-xmark fa-2xl pe-none"></i></button>
      <div id="carouselExample" class="carousel custom-carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${this.src}" class="d-block w-100" alt="work">
          </div>
          <div class="carousel-item">
            <img src="${imgsSource[0]}" class="d-block w-100" alt="work">
          </div>
          <div class="carousel-item">
            <img src="${imgsSource[1]}" class="d-block w-100" alt="work">
          </div>
          <div class="carousel-item">
            <img src="${imgsSource[2]}" class="d-block w-100" alt="work">
          </div>
          <div class="carousel-item">
            <img src="${imgsSource[3]}" class="d-block w-100" alt="work">
          </div>
          <div class="carousel-item">
            <img src="${imgsSource[4]}" class="d-block w-100" alt="work">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon position-relative" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon position-relative" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`;
    popup.innerHTML = popupContent;
    document.body.appendChild(popup);
    popup.addEventListener("click", (event) => {
      if (event.target.classList.contains("close")) popup.remove();
    });
  });
});

document.addEventListener("keydown", function (event) {
  if (
    (event.key === "Escape" || event.code === "Escape") &&
    document.querySelector(".popup")
  ) {
    document.querySelector(".popup").remove();
  }
});
//* End of Carousel

//* Start of Testimonial
let paginationBullets = document.querySelectorAll(".pagination span");

paginationBullets.forEach((bullet) =>
  bullet.addEventListener("click", function () {
    paginationBullets.forEach((bullet) => bullet.classList.remove("active"));
    this.classList.add("active");
    document.querySelector(".carousel-control-next").click();
  })
);
//* End of Testimonial

//* Start of Scroll to Top
let scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > document.querySelector(".header").offsetHeight) {
    scrollToTop.style.setProperty("opacity", "1", "important");
  } else {
    scrollToTop.style.setProperty("opacity", "0", "important");
  }
});
//* End of Scroll to Top
