const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector(
  '.menu-btn-open',
);
const menuBtnClose = document.querySelector(
  '.menu-btn-close',
);

const toggleMenu = () =>
  mobileMenu.classList.toggle('is-open');
const closeMenu = () =>
  mobileMenu.classList.remove('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

const menuLinks = mobileMenu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
