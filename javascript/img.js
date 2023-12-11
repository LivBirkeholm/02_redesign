function openModal(imgSrc) {
  if (window.matchMedia("(min-width: 800px)").matches) {
    var modal = document.getElementById("imageModal");
    var img = document.getElementById("enlargedImg");
    img.src = imgSrc;
    modal.style.display = "block";
  }
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 800) {
    closeModal();
  }
});
