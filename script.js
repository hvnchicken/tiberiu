const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 18) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('request-form');
const message = document.getElementById('form-message');
if (form && message) {
  form.addEventListener('submit', () => {
    message.textContent = 'Ihre Anfrage wird übermittelt …';
  });
}
