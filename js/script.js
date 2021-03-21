document.addEventListener("DOMContentLoaded", () => {
	let tabBtn = document.querySelectorAll(".how-button");
	let tab = document.querySelectorAll(".how-listitem");
	tabBtn.forEach((tabsBtn) => {
		tabsBtn.addEventListener("click", (e) => {
			e.preventDefault();
			const path = e.currentTarget.dataset.path;
			console.log(path);
			tabBtn.forEach((tab) => {
				tab.classList.remove("tab-button-active");
			});
			tab.forEach((tabContent) => {
				tabContent.classList.remove("tab-content-active");
			});
			//вот так сделал я
			e.target.classList.add("tab-button-active");
			//а это я адаптировал из того что делал учитель на уроке - его код не закомментирован ниже
			// document
			// 	.querySelector(`[data-path="${path}"]`)
			// 	.classList.add("tab-button-active");
			document
				.querySelector(`[data-target="${path}"]`)
				.classList.add("tab-content-active");
		});
	});

	// /* Swiper
	//  **************************************************************/
	// var swiper = Swiper;
	// var init = false;

	// /* Which media query
	//  **************************************************************/
	// function swiperMode() {
	// 	let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
	// 	let tablet = window.matchMedia(
	// 		"(min-width: 769px) and (max-width: 1024px)"
	// 	);
	// 	let desktop = window.matchMedia("(min-width: 1025px)");

	// 	// Enable (for mobile)
	// 	if (mobile.matches) {
	// 		swiper.destroy();
	// 		init = false;
	// 	}

	// 	// Disable (for tablet)
	// 	else if (tablet.matches) {
	// 		if (!init) {
	// 			init = true;
	// 			swiper = new Swiper(".swiper-container", {
	// 				slidesPerView: 1,
	// 				Slides: true,
	// 				loop: true,
	// 				spaceBetween: 10,
	// 				direction: "horizontal",
	// 				effect: "coverflow",

	// 				navigation: {
	// 					nextEl: ".swiper-button-next",
	// 					prevEl: ".swiper-button-prev",
	// 				},

	// 				coverflowEffect: {
	// 					rotate: 0,
	// 					stretch: 0,
	// 					depth: 0,
	// 					modifier: 0,
	// 					slideShadows: false,
	// 				},

	// 				// breakpoints: {

	// 				// 		767: {
	// 				// 				slidesPerView: 1,
	// 				// 				spaceBetween: 0,
	// 				// 				effect: 'coverflow',

	// 				// 				coverflowEffect: {
	// 				// 						rotate: 0,
	// 				// 						stretch: 20,
	// 				// 						depth: 120,
	// 				// 						modifier: 3,
	// 				// 						slideShadows: false,
	// 				// 				}
	// 				// 		}

	// 				// }
	// 			});
	// 		}
	// 	}

	// 	// Disable (for desktop)
	// 	else if (desktop.matches) {
	// 		if (!init) {
	// 			init = true;
	// 			swiper = new Swiper(".swiper-container", {
	// 				slidesPerView: 1,
	// 				centeredSlides: true,
	// 				loop: true,
	// 				spaceBetween: 10,
	// 				direction: "horizontal",
	// 				effect: "coverflow",

	// 				navigation: {
	// 					nextEl: ".swiper-button-next",
	// 					prevEl: ".swiper-button-prev",
	// 				},

	// 				coverflowEffect: {
	// 					rotate: 0,
	// 					stretch: 0,
	// 					depth: 0,
	// 					modifier: 0,
	// 					slideShadows: false,
	// 				},

	// 				// breakpoints: {

	// 				// 		767: {
	// 				// 				slidesPerView: 1,
	// 				// 				spaceBetween: 0,
	// 				// 				effect: 'coverflow',

	// 				// 				coverflowEffect: {
	// 				// 						rotate: 0,
	// 				// 						stretch: 20,
	// 				// 						depth: 120,
	// 				// 						modifier: 3,
	// 				// 						slideShadows: false,
	// 				// 				}
	// 				// 		}

	// 				// }
	// 			});
	// 		}
	// 	}
	// }

	// /* On Load
	//  **************************************************************/
	// window.addEventListener("load", function () {
	// 	swiperMode();
	// });

	// /* On Resize
	//  **************************************************************/
	// window.addEventListener("resize", function () {
	// 	swiperMode();
	// });

	//initialize swiper
	const swiper = new Swiper(".swiper-container", {
		// Optional parameters
		direction: "horizontal",
		loop: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
		},
		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});
	$(function () {
		$("#accordion").accordion({
			collapsible: true,
			active: false,
			heightStyle: "content",
		});
	});
	document.querySelectorAll(".faq-link").forEach((el) => {
		el.addEventListener("click", (e) => {
			e.target.classList.toggle("faq-link_clicked");
		});
	});
});
