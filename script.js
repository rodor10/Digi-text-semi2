const cover = document.querySelector('.cover');
const coverContent = document.querySelector('.cover-content');

if (cover && coverContent) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    const speed = 0.35;
    const textSpeed = 0.15;

    cover.style.backgroundPositionY = `${offset * speed}px`;
    coverContent.style.transform = `rotate(11deg) translateY(${offset * textSpeed}px)`;
  });
}
