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
      '<button type="button" class="gallery-slick-prev"><span class="arrow-left"></span></button>',
    nextArrow:
      '<button type="button" class="gallery-slick-next"><span class="arrow-right"></span></button>',
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
      '<button type="button" class="books-slick-prev"><span class="arrow-left"></span></button>',
    nextArrow:
      '<button type="button" class="books-slick-next"><span class="arrow-right"></span></button>',
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
          placeholder: true,
          placeholderValue: "Категории",
        }
      );
    }
  };
  const tooltipCloser = () => {
    let width = window.innerWidth;
    let tooltipBtn = document.querySelectorAll(".projects-tooltip");

    tooltipBtn.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        if (width <= 480) {
          e.target.classList.toggle("tooltip-close");
        }
      });
    });
  };
  tooltipCloser();
  getFilters();

  //logotype slider in Projects
  //projects-slider
  $(".projects-slider").slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow:
      '<button type="button" class="projects-slick-prev"><span class="arrow-left"></span></button>',
    nextArrow:
      '<button type="button" class="projects-slick-next"><span class="arrow-right"></span></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const projectsNext = document.querySelector(".projects-slick-next");
  const projectsPrev = document.querySelector(".projects-slick-prev");

  //map
  var myMap;

  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(init);

  function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map("map", {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [55.75, 37.6], // Москва
      zoom: 14,
    });
    myMap.behaviors
      // Отключаем часть включенных по умолчанию поведений:
      //  - drag - перемещение карты при нажатой левой кнопки мыши;
      //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
      .disable(["drag", "rightMouseButtonMagnifier", "scrollZoom"])
      // Включаем линейку.
      .enable("ruler");

    myMap.controls
      .remove("trafficControl")
      .remove("mapTools")
      .remove("typeSelector")
      .remove("mapTools");
    var myPlacemark1 = new ymaps.Placemark(
      [55.75, 37.6],
      {
        hintContent: "A custom placemark icon with contents",
        balloonContent: "This one — for Christmas",
        iconContent: "12",
      },
      {
        /**
         * Options.
         * You must specify this type of layout.
         */
        iconLayout: "default#imageWithContent",
        // Custom image for the placemark icon.
        iconImageHref: "../img/placemark.png",
        // The size of the placemark.
        iconImageSize: [20, 20],
        /**
         * The offset of the upper left corner of the icon relative
         * to its "tail" (the anchor point).
         */
        iconImageOffset: [-24, -24],
        // Offset of the layer with content relative to the layer with the image.
        iconContentOffset: [15, 15],
        // Content layout.
      }
    );
    myMap.geoObjects.add(myPlacemark1);
  }
  //galery modal script
  let galeryModals = document.querySelectorAll(".galery-modal");
  let galeryImg = document.querySelectorAll(".hover-img");
  const sliderGalery = document.querySelector(".slider-gallery");
  let modalWrapper = document.querySelector(".modal-wrapper");
  let modalImg = document.querySelector(".modalImg");
  sliderGalery.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("galery-hover")) {
      modalWrapper.classList.toggle("modal-active");
      let galSrc = e.target.nextElementSibling.src;
      modalImg.src = galSrc;
    }
  });
  modalWrapper.addEventListener("click", (e) => {
    e.preventDefault();
    modalWrapper.classList.remove("modal-active");
  });

  //languages tabs
  const lang = document.querySelector(".lang");
  let langLinks = document.querySelectorAll(".lang-link");
  let tabActive = document.querySelector(".tab-active");
  let tab = document.querySelectorAll(".catalog-tab");
  let divWrap = document.querySelectorAll(".divWrap");

  const tabfunction = (el) => {
    let tar = document.querySelectorAll(el);
    tar.forEach((elem) => {
      elem.classList.toggle("catalog-active");
    });
  };

  lang.addEventListener("click", (e) => {
    divWrap.forEach((elem) => {
      elem.classList.remove("outline-active");
    });

    if (e.target.classList.contains("lang-ru")) {
      tab.forEach((elem) => {
        elem.classList.remove("catalog-active");
      });
      tabfunction(".catalog-ru");
      e.target.parentNode.classList.toggle("outline-active");
    } else if (e.target.classList.contains("lang-fr")) {
      tab.forEach((elem) => {
        elem.classList.remove("catalog-active");
      });
      tabfunction(".catalog-fr");
      e.target.parentNode.classList.toggle("outline-active");
    } else if (e.target.classList.contains("lang-de")) {
      tab.forEach((elem) => {
        elem.classList.remove("catalog-active");
      });
      tabfunction(".catalog-de");
      e.target.parentNode.classList.toggle("outline-active");
    } else if (e.target.classList.contains("lang-it")) {
      tab.forEach((elem) => {
        elem.classList.remove("catalog-active");
      });
      tabfunction(".catalog-it");
      e.target.parentNode.classList.toggle("outline-active");
    } else if (e.target.classList.contains("lang-bl")) {
      tab.forEach((elem) => {
        elem.classList.remove("catalog-active");
      });
      tabfunction(".catalog-bl");
      e.target.parentNode.classList.toggle("outline-active");
    } else if (
      !e.target.classList.contains("lang-ru") ||
      !e.target.classList.contains("lang-fr") ||
      e.target.classList.contains("lang-de") ||
      e.target.classList.contains("lang-it") ||
      e.target.classList.contains("lang-bl")
    ) {
      console.log("misclicked");
      return;
    }
  });
});
