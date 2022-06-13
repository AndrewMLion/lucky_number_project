const scrollUp = document.querySelector('.scroll-top');
scrollUp.addEventListener('click', function (e) {
  document.querySelector('#header').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

window.addEventListener('scroll', function (e) {
  var topOffset = window.pageYOffset;
  if (topOffset < 100) {
    scrollUp.classList.add('is-hidden');
  } else {
    scrollUp.classList.remove('is-hidden');
  }
});
