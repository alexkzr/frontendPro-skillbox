document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.querySelector(".main-search");
  const headerCont = document.querySelector(".header .container");
  const loginBtn = document.querySelector(".login");
  const headerList = document.querySelector(".header_list");
  const listItem = document.createElement("li");
  const burgetBtn = document.querySelector(".burger");
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");

  listItem.classList.add("header_listitem");

  const element = document
    .querySelectorAll(".dropdown-list")
    .forEach((elem) => {
      const choices = new Choices(elem, {
        searchEnabled: false,
        placeholder: true,
        itemSelectText: "",
        placeholderValue: null,
      });
    });
  const element2 = document
    .querySelectorAll(".galery-select")
    .forEach((elem) => {
      const choices = new Choices(elem, {
        searchEnabled: false,
        placeholder: true,
        itemSelectText: "",
        placeholderValue: null,
      });
    });

  //SWIPER FOR HERO SECTION
  const swiper = new Swiper(".swiper-container_hero", {
    // Optional parameters
    autoplay: true,
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  searchButton.addEventListener("click", (e) => {
    searchInput.classList.toggle("search-input_active");
  });
  burgetBtn.addEventListener("click", (e) => {
    headerList.classList.toggle("header_list-active");
  });

  $(".slider-gallery").slick({
    infinite: false,
    slidesPerRow: 3,
    rows: 2,
    prevArrow:
      '<button type="button" class="gallery-slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="gallery-slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesPerRow: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  });
  const gallerySlide = document.querySelectorAll(
    ".slider-gallery .slick-slide"
  );
  function slideClass() {
    gallerySlide.forEach((elem) => {
      elem.classList.add("galery-slide");
    });
  }
  slideClass();
  const pagination = document.querySelector(".pagination-gallery");
  const owlNext = document.querySelector(".gallery-slick-next");
  const owlPrev = document.querySelector(".gallery-slick-prev");
  const galerySlides = document.querySelector(".gallery-slides");
  let pageNumber = document.querySelector(".pagination_gallery");
  let slides = document.querySelectorAll(".galery-slide");
  pagination.appendChild(owlPrev);
  pagination.appendChild(owlNext);
  pagination.insertBefore(pageNumber, owlNext);
  owlNext.textContent = ">";
  owlPrev.textContent = "<";
  var numberFunction = function () {
    var numbers = Array.from(
      document.getElementsByClassName("galery-slide")
    ).indexOf(document.querySelector(".slick-active"));
    pageNumber.textContent = `${numbers + 1} / ${slides.length}`;
    slideClass();
  };
  numberFunction();

  owlNext.addEventListener("click", () => {
    var divnumber = Array.from(
      document.getElementsByClassName("galery-slide")
    ).indexOf(document.querySelector(".slick-active"));
    pageNumber.textContent = `${divnumber + 1} / ${slides.length}`;
    slideClass();
  });

  owlPrev.addEventListener("click", () => {
    var divnumber = Array.from(
      document.getElementsByClassName("galery-slide")
    ).indexOf(document.querySelector(".slick-active"));
    pageNumber.textContent = `${divnumber + 1} / ${slides.length}`;
    slideClass();
  });

  $(".slider-gallery").on("swipe", function () {
    let pageNumber = document.querySelector(".pagination_gallery");
    let slides = document.querySelectorAll(".galery-slide");
    var numbersCount = Array.from(
      document.getElementsByClassName("galery-slide")
    ).indexOf(document.querySelector(".slick-active"));
    pageNumber.textContent = `${numbersCount + 1} / ${slides.length}`;
    pagination.appendChild(owlPrev);
    pagination.appendChild(owlNext);
    pagination.insertBefore(pageNumber, owlNext);
    owlNext.textContent = ">";
    owlPrev.textContent = "<";
    slideClass();
  });
  //change position of the pagination in the DOM tree on certain breakpoints
  const paginationAppend = () => {
    let width = window.innerWidth;
    if (width <= 576) {
      galerySlides.appendChild(pagination);
    }
    slideClass();
  };
  //change position of the gallery descriptiuon text
  const textAppend = () => {
    let width = window.innerWidth;
    const descr = document.querySelector(".bottom");
    if (width <= 768) {
      galerySlides.appendChild(descr);
    }
    slideClass();
  };
  window.addEventListener("resize", paginationAppend());
  window.addEventListener("resize", textAppend());

  //set up accordion for the catalog section
  $("#accordion").accordion({
    active: 0,
    collapsible: true,
  });

  //script to show more events on button click
  const eventsCards = document.querySelectorAll(".events-switch");
  const eventsBtn = document.querySelector(".events-btn");
  eventsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    eventsCards.forEach((elem) => {
      elem.classList.toggle("events-hidden");
    });
    if (eventsBtn.textContent === "Все события") {
      eventsBtn.textContent = "Скрыть";
    } else {
      eventsBtn.textContent = "Все события";
    }
  });

  //books slider
  $(".books-slides").slick({
    infinite: false,
    slidesToShow: 3,
    prevArrow:
      '<button type="button" class="books-slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="books-slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: "unslick",
      },
    ],
  });
  //indexing of slides
  const booksSlide = document.querySelectorAll(".books-slides .slick-slide");
  const booksActive = document.querySelector(".books-slides .slick-active");
  function slideClass2() {
    booksSlide.forEach((elem) => {
      elem.classList.add("books-slide");
    });
    let width = window.innerWidth;
    if (width >= 480) {
      booksActive.classList.add("books-active");
    }
  }
  slideClass2();
  const paginationBooks = document.querySelector(".books-pagination");
  const booksNext = document.querySelector(".books-slick-next");
  const booksPrev = document.querySelector(".books-slick-prev");
  const booksSlides = document.querySelector(".books-slides");
  let bookNumber = document.querySelector(".pagination_books");
  let slides2 = document.querySelectorAll(".books-slide");
  let width = window.innerWidth;

  if (width >= 480) {
    paginationBooks.appendChild(booksPrev);
    paginationBooks.appendChild(booksNext);
    paginationBooks.insertBefore(bookNumber, booksNext);
    booksNext.textContent = ">";
    booksPrev.textContent = "<";
  }
  var numberFunction = function () {
    var numbers = Array.from(
      document.getElementsByClassName("books-slide")
    ).indexOf(document.querySelector(".slick-active.books-slide"));
    bookNumber.textContent = `${numbers + 1} / ${slides2.length}`;
    slideClass2();
  };
  numberFunction();
  if (width >= 480) {
    booksNext.addEventListener("click", () => {
      var divnumber = Array.from(
        document.getElementsByClassName("books-slide")
      ).indexOf(document.querySelector(".slick-active.books-slide"));
      bookNumber.textContent = `${divnumber} / ${slides2.length}`;
      slideClass2();
      console.log("numbers: ", divnumber);
    });

    booksPrev.addEventListener("click", () => {
      var divnumber = Array.from(
        document.getElementsByClassName("books-slide")
      ).indexOf(document.querySelector(".slick-active.books-slide"));
      bookNumber.textContent = `${divnumber} / ${slides2.length}`;
      slideClass2();
      console.log("numbers: ", divnumber);
    });
  }

  $(".books-slides").on("swipe", function () {
    let bookNumber = document.querySelector(".pagination_books");
    let slides2 = document.querySelectorAll(".slide-books");
    var numbers = Array.from(
      document.getElementsByClassName("books-slide")
    ).indexOf(document.querySelector(".slick-active.books-slide"));
    bookNumber.textContent = `${numbers + 1} / ${slides2.length}`;
    paginationBooks.appendChild(booksPrev);
    paginationBooks.appendChild(booksNext);
    paginationBooks.insertBefore(bookNumber, booksNext);
    booksNext.textContent = ">";
    booksPrev.textContent = "<";
    slideClass2();
  });
  //custom checkbox for books filters
  let booksLabel = document.querySelectorAll(".filters-label");
  let booksCheckbox = document.querySelectorAll(".filters-checkbox");
  booksLabel.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      booksCheckbox.forEach((elem) => {
        if (elem.checked) {
          elem.parentNode.classList.toggle("filters-checked");
        }
      });
    });
  });
  // apply choices below 480px to filter categories
  const getFilters = () => {
    let width = window.innerWidth;
    if (width <= 480) {
      var multipleCancelButton = new Choices(
        "#choices-multiple-remove-button",
        {
          removeItemButton: true,
        }
      );
    }
  };
  getFilters();
});
