"use strict";
window.addEventListener("load", function () {
	AOS.init({ duration: 1e3, disable: "mobile" }),
		(document.querySelector(".out-hero").style.maxHeight =
			document.querySelector(".hero").getBoundingClientRect().height + "px"),
		this.document.querySelector(".hero__button").addEventListener("click", function () {
			var e = document.querySelector(".out-hero"),
				t =
					(e.classList.add("changed"),
					document.querySelector(".upper-hero").getBoundingClientRect());
			e.style.maxHeight = t.height + "px";
		}),
		this.document.querySelector(".upper-hero__button").addEventListener("click", function () {
			var e = document.querySelector(".out-hero"),
				t =
					(e.classList.remove("changed"),
					document.querySelector(".hero").getBoundingClientRect());
			e.style.maxHeight = t.height + "px";
		});
});
