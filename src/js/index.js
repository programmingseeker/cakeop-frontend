// This is a funtionality for scroll
const navbar = document.getElementsByClassName('navbar')[0];
const bannerSection = document.getElementsByClassName('banner')[0];

window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset);
  navbar.style.transition = '300ms';
  if (window.pageYOffset >= 150) {
    navbar.style.background = '#ffffff';
  } else {
    navbar.style.background = 'transparent';
  }
});

/////////////////////////////////////////////////////////////////

// This is a modal to view the Profile photo
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal, using its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById('imgUser');
var captionText = document.getElementById('caption');
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal, using its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById('imgUser');
var captionText = document.getElementById('caption');
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var close_icon = document.getElementsByClassName('close')[0];

close_icon.onclick = function () {
  modal.style.display = 'none';
};
