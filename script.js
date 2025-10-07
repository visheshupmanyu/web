// script.js
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
const yearEl = document.querySelector('#year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}
