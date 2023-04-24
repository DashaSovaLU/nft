// Swiper START \\

let flylink = document.querySelector("#slider__top");

const swiper = new Swiper(flylink, {
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 10,

	navigation: {
		nextEl: ".top__arrow._right",
		prevEl: ".top__arrow._left",
	},

	breakpoints: {
		800: {
			slidesPerView: "5",
			spaceBetween: 22,
		},
	},
});

swiper.slides.forEach((element, index) => {
	const numberEl = element.querySelector("[data-number]");

	numberEl.innerHTML = index + 1;
});

// Swiper END \\

// Like START \\

const heartLikeList = document.querySelectorAll("[data-btn-like]");

for (const btn of heartLikeList) {
	let number = +btn.dataset.btnLike;
	btn.innerHTML = number;

	btn.addEventListener("click", () => {
		if (btn.classList.contains("_active")) {
			number = number - 1;
		} else {
			number = number + 1;
		}
		btn.innerHTML = number;

		btn.classList.toggle("_active");
	});
}

// Like END \\

// Burger START \\

const btnburgerEl = document.querySelector("[data-burger]");
const headMenu = document.querySelector("[data-menu]");

btnburgerEl.addEventListener("click", () => {
	btnburgerEl.classList.toggle("_active");
	headMenu.classList.toggle("_active");
});

// Burger END \\
