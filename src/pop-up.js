const menu = document.querySelector('.pop-up-menu');
const header1 = document.querySelector('header');
const btn = header.querySelector('#borger-menu-icon');
const x = document.querySelector('.close-pop-up');

btn.addEventListener('click', () => {
  menu.style.right = '0';
  header1.style.opacity = '0';
})

x.addEventListener('click', () => {
  menu.style.right = '-' + window.getComputedStyle(menu).width;
  header1.style.opacity = '1';
});

window.addEventListener('resize', () => {
  menu.style.right = '-' + window.getComputedStyle(menu).width;
  header1.style.opacity = '1';
})