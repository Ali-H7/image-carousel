import { imageList } from '.';
import { currentImage, setCurrentImage } from '.';
export default class image {
  constructor(imageUrl, text1, text2) {
    this.imageUrl = imageUrl;
    this.text1 = text1;
    this.text2 = text2;
  }

  addImg() {
    imageList.push(this);
  }

  static render() {
    const text = document.querySelector('.text');
    const navIcons = document.querySelector('.icons');
    const displayedImage = document.querySelector('img');
    const text1 = document.createElement('h2');
    const text2 = document.createElement('h3');

    text.textContent = '';
    navIcons.textContent = '';
    displayedImage.src = '';

    for (let i = 0; i < imageList.length; i++) {
      const icon = document.createElement('i');
      if (i === currentImage) {
        icon.classList.add('fa-solid');
        icon.classList.add('fa-circle');
        icon.addEventListener('click', () => {
          setCurrentImage(i);
          this.render();
        });
        navIcons.appendChild(icon);
      } else {
        icon.classList.add('fa-regular');
        icon.classList.add('fa-circle');
        icon.addEventListener('click', () => {
          setCurrentImage(i);
          this.render();
        });
        navIcons.appendChild(icon);
      }
    }

    displayedImage.src = imageList[currentImage].imageUrl;
    text1.textContent = imageList[currentImage].text1;
    text2.textContent = imageList[currentImage].text2;

    text.appendChild(text1);
    text.appendChild(text2);
  }
}
