let flylink = document.querySelector("#slider__top");

const swiper = new Swiper(flylink, {
	// Optional parameters
	loop: false,
	slidesPerView: "5",
	spaceBetween: 22,

	navigation: {
		nextEl: ".top__arrow._right",
		prevEl: ".top__arrow._left",
	},
});

const heartLikeList = document.querySelectorAll(".heart__like");
console.log(heartLikeList);

for (const iterator of heartLikeList) {
	iterator.addEventListener("click", () => {
		iterator.classList.toggle("_active");
	});
}
