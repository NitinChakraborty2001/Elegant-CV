$(document).ready(function () {
	$("#profile-ripples").ripples({
		resolution: 512,
		dropRadius: 10,
	});

	const bars = document.querySelectorAll(".progress-bar");

	bars.forEach(function (bar) {
		let percentage = bar.dataset.percent;

		let tooltip = bar.children[0];

		tooltip.innerText = percentage + "%";

		bar.style.width = percentage + "%";
	});

	const counters = document.querySelectorAll(".counter");

	function counter() {
		counters.forEach((counter) => {
			counter.innerText = 0;

			let target = +counter.dataset.count;

			let step = target / 100;

			let countIt = function () {
				let count = +counter.innerText;

				if (count < target) {
					counter.innerText = Math.ceil(count + step);

					setTimeout(countIt, 5);
				} else {
					counter.innerText = target;
				}
			};

			countIt();
		});
	}

	let counterSection = document.querySelector(".count-wrapper");

	let options = {
		rootMargin: "0px 0px -200px 0px",
	};

	let animation = 0;

	const sectionObserver = new IntersectionObserver(function (entries) {
		if (entries[0].isIntersecting && animation !== 1) {
			animation = 1;

			counter();
		}
	}, options);

	sectionObserver.observe(counterSection);

	var $wrapper = $(".portfolio-wrapper");

	$wrapper.isotope({
		filter: "*",

		layoutMode: "masonry",

		animationOptions: {
			duration: 750,

			easing: "linear",
		},
	});

	let links = document.querySelectorAll(".tabs a");

	links.forEach((link) => {
		let selector = link.dataset.filter;

		link.addEventListener("click", function (e) {
			e.preventDefault();

			$wrapper.isotope({
				filter: selector,

				layoutMode: "masonry",

				animationOptions: {
					duration: 750,

					easing: "linear",
				},
			});

			links.forEach((link) => {
				link.classList.remove("active");
			});

			e.target.classList.add("active");
		});
	});

	$(".popup").magnificPopup({
		type: "image",

		gallery: {
			enabled: true,
		},

		zoom: {
			enable: true,
		},
	});

	$(".slider").slick({
		arrows: false,

		autoplay: true,
	});
});
