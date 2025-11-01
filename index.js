let currentPage = 0;
const main = document.getElementById('main');

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < 1) currentPage++;
  main.style.transform = `translateX(-${currentPage * 100}vw)`;
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 0) currentPage--;
  main.style.transform = `translateX(-${currentPage * 100}vw)`;
});

main.scrollTo({
  left: window.innerWidth,
  behavior: 'smooth'
});