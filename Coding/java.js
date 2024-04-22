// Scrolling
const container = document.querySelector('.scroll-container');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});
container.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});
container.addEventListener('mouseup', () => {
  isDown = false;
});
container.addEventListener('touchend', () => {
  isDown = false;
});
container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 3; 
  container.scrollLeft = scrollLeft - walk;
});
container.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - container.offsetLeft;
  const walk = (x - startX) * 3; 
  container.scrollLeft = scrollLeft - walk;
});

// click left or right on shoes

var swiper = new Swiper('.swiper-container', {
  // Your other swiper configuration options...

  // Navigation module
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true, // Toggle navigation buttons visibility after click on Slider's container
  },
});

// Optional: Add event listeners for navigation events
swiper.on('navigationHide', function () {
  console.log('Navigation hidden');
});

swiper.on('navigationShow', function () {
  console.log('Navigation shown');
});

swiper.on('navigationNext', function () {
  console.log('Next button clicked');
});

swiper.on('navigationPrev', function () {
  console.log('Previous button clicked');
});

