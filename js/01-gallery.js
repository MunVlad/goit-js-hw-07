import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
      </a>
    </div>
  `;
}).join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  const instance = basicLightbox.create(`<img width='800' height='600' src="${e.target.dataset.source}">`)
  instance.show();

  window.addEventListener('keydown', onEscPress);
function onEscPress(e) {
  if (e.code === 'Escape') {
    instance.close(() => window.removeEventListener('keydown', onEscPress));
  } 
}
}
