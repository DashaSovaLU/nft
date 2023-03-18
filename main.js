let flylink = document.querySelector("#slider__top");

const swiper = new Swiper(flylink, {
	// Optional parameters
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 22,

	navigation: {
		nextEl: ".top__arrow._right",
		prevEl: ".top__arrow._left",
	},
});
