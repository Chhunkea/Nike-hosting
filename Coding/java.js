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
