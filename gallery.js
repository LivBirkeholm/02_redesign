function openModal(imgSrc) {
  var modal = document.getElementById("imageModal");
  var img = document.getElementById("enlargedImg");
  img.src = imgSrc;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
