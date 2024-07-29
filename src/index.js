import './style.css';
import 'animate.css';
import taylorAlbums from './taylor-albums';
import image from './images';

export const imageList = [];
const firstImage = 0;
const lastImage = 14;
export let currentImage = 6;

taylorAlbums();

function slideShow() {
  nextImage();
  setTimeout(slideShow, 5000);
}

slideShow();

export function setCurrentImage(imgIndex) {
  currentImage = imgIndex;
}

function nextImage() {
  currentImage += 1;
  if (currentImage > lastImage) currentImage = firstImage;
  image.render();
}

function previousImage() {
  currentImage -= 1;
  if (currentImage < 0) currentImage = lastImage;
  image.render();
}

const nextImgBtn = document.querySelector('.next-img');
const previousImgBtn = document.querySelector('.previous-img');

nextImgBtn.addEventListener('click', () => {
  nextImage();
});

previousImgBtn.addEventListener('click', () => {
  previousImage();
});
