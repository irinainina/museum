const toggleNav = document.querySelector('.toggle');
const nav = document.querySelector('.header-nav');

toggleNav.addEventListener('click', () => {
  toggleNav.classList.toggle('collapsed');
	nav.classList.toggle('hidden');
});

const slider = tns({
	container: '.my-slider',
	items: 3,
	slideBy: 1,
	autoplay: false,
	gutter: 60,
	controlsPosition: 'bottom',
	loop: true,
	nav: true,
	navPosition: 'bottom',
	navAsThumbnails: true,
  controlsContainer: ".pagination",
  navContainer: ".dots",
	responsive: {
		120: {
			gutter: 20,
			items: 2
		},
		796: {
			items: 3,
			gutter: 40,
		}
	}
});

const welcomeSlider = tns({
	container: '.welcome-slider',
	items: 1,
	slideBy: 1,
	autoplay: false,
	controlsPosition: 'bottom',
	preventActionWhenRunning: true,
	loop: true,
	nav: true,
	navPosition: 'bottom',
	navAsThumbnails: true,
  controlsContainer: ".welcome-pagination",
  navContainer: ".welcome-dots",
	mouseDrag: true
});

const currentSlide = document.querySelector('.current-slide');
const welcomeDots = document.querySelectorAll('.welcome-dots li');
const welcomePrev = document.querySelector('.welcome-prev');
const welcomeNext = document.querySelector('.welcome-next');

welcomeDots.forEach((el, index) => el.addEventListener('click', function(event) {
	if(el === event.target) {
		currentSlide.textContent = `0${index + 1}`
	}
}));

function getCurrentSlideControls(num) {
	welcomeDots.forEach((el, index) => {
		if(el.classList.contains('tns-nav-active')) {
			let currentNum;
			if(index + 1 + num === 0) {
				currentNum = 5;
			} else if(index + 1 + num === 6) {
				currentNum = 1;
			} else {
				currentNum = index + 1 + num;
			}
			currentSlide.textContent = `0${currentNum}`
		}
	})
}
welcomePrev.addEventListener('click', () => getCurrentSlideControls(-1));
welcomeNext.addEventListener('click', () => getCurrentSlideControls(1));

// let docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth || el.parentElement && el.offsetWidth > el.parentElement.offsetWidth) {
//       console.log(el);
//     }
//   }
// );