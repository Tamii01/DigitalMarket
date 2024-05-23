document.addEventListener('DOMContentLoaded', () => {
	iniciarCarouselOwl();
});

function iniciarCarouselOwl(){
	var owl = $(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		slideTransition: "linear",
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			1000: {
				items: 3,
			},
			1400: {
				items: 4,
			}
		},
  });
}