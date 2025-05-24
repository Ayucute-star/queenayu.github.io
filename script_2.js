
  let quotes = document.querySelectorAll('.quote');
  let index = 0;

  setInterval(() => {
    quotes[index].classList.remove('active');
    index = (index + 1) % quotes.length;
    quotes[index].classList.add('active');
  }, 3000); // Ganti quote tiap 4 detik
