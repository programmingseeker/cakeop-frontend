const navbar = document.getElementsByClassName('navbar')[0];
const bannerSection = document.getElementsByClassName('banner')[0];

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  navbar.style.transition = '300ms';
  if (window.pageYOffset >= 150) {
    navbar.style.background = '#ffffff';
  } else {
    navbar.style.background = 'transparent';
  }
});
