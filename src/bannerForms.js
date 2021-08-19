const dark = document.querySelector('.dark-banner');

const header = document.querySelector('header');
const logInIcon = header.querySelector('#log-in-icon');
const signUpIcon = header.querySelector('#sign-up-icon');
const closeButtons = document.querySelectorAll('.close');

const banner = document.querySelector('.banner');
const bannerForms = {
  logIn: banner.querySelector('.log-in'),
  signUp: banner.querySelector('.sign-up'),
  content: banner.querySelector('.content'),
};
const logInLink = document.querySelector('#go-to-log-in');
const signUpLink = document.querySelector('#go-to-sign-up');

function showForm(form) {
  for (const form in bannerForms) {
    bannerForms[form].classList.add('hidden');
  }

  bannerForms[form].classList.remove('hidden');
}

function makeDarkScreen(flag) {
  flag
    ? dark.classList.remove('hidden')
    : dark.classList.add('hidden');
}

logInIcon.addEventListener('click', () => {
  showForm('logIn')
  makeDarkScreen(true);
})

logInLink.addEventListener('click', () => {
  showForm('logIn');
  makeDarkScreen(true);
})

signUpIcon.addEventListener('click', () => {
  showForm('signUp');
  makeDarkScreen(true);
})

signUpLink.addEventListener('click', () => {
  showForm('signUp');
  makeDarkScreen(true);
})

closeButtons.forEach(btn => btn.addEventListener('click', () => {
  showForm('content');
  makeDarkScreen(false);
}))