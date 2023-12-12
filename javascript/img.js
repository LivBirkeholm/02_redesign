var currentImageIndex = 0;
var imageSources = ["img/foto1.webp", "img/foto2.webp", "img/foto3.webp", "img/foto4.webp", "img/foto5.webp", "img/foto6.webp", "img/foto7.webp", "img/foto8.webp", "img/foto9.webp", "img/foto10.webp", "img/foto11.webp", "img/foto12.webp"];

function openModal(imgSrc) {
  if (window.matchMedia("(min-width: 800px)").matches) {
    var modal = document.getElementById("imageModal");
    var img = document.getElementById("enlargedImg");
    img.src = imgSrc;
    modal.style.display = "block";
    currentImageIndex = imgIndex;
    updateModalImage();
  }
}
function updateModalImage() {
  var img = document.getElementById("enlargedImg");
  img.src = imageSources[currentImageIndex];
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = imageSources.length - 1;
  } else if (currentImageIndex >= imageSources.length) {
    currentImageIndex = 0;
  }
  updateModalImage();
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
