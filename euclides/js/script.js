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
	//burger menu
	const burger = document.querySelector(".header-burger");
	const navBar = document.querySelector(".nav-list");

	burger.addEventListener("click", (e) => {
		navBar.classList.toggle("nav-list_active");
		burger.classList.toggle("header-burger_active");
	});
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
	//swiper code end
});
