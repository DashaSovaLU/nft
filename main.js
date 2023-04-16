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

const btnburgerEl = document.querySelector("[data-burger]");
const headMenu = document.querySelector("[data-menu]");

btnburgerEl.addEventListener("click", () => {
	btnburgerEl.classList.toggle("_active");
	headMenu.classList.toggle("_active");
});

// значения по умолчанию(старославянский)
function likeHuike(number, humber = 10) {
	const result = humber + number;
	console.log(result);
}
// likeHuike(5, 8);
// likeHuike(7);

// современный синтаксис
const justHui = (number, humber = 10) => {
	console.log(number + humber);
};
// justHui(25, 6);
// justHui(6);

// функция возвращает результат
const prostoVagina = (chislo) => {
	const result = chislo - 2;
	return result;
};
// console.log(prostoVagina(12));

// переменная, которую можно  переопределять
let prima = "pkok";
// console.log(prima);
prima = 48;
// console.log(prima);
