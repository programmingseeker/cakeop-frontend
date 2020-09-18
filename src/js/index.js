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
