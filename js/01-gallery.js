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

galleryContainer.addEventListener('click', onLinkClick);

function onLinkClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`<img width='800' height='600' src="${event.target.dataset.source}">`)
  instance.show();

  window.addEventListener('keydown', onEscPress);
function onEscPress(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

}
// const backdrop = document.querySelector('.js-backdrop');
// const modalImg = document.querySelector('.modal__image');

// galleryContainer.addEventListener('click', e => {
//   e.preventDefault();

//   const { target } = e;

//   if (target.nodeName !== 'IMG') return;

//   const originalImgSrc = target.dataset.source;
//   const imgAlt = target.alt;

//   modalImg.src = originalImgSrc;
//   modalImg.alt = imgAlt;

//   backdrop.classList.add('show');
// });
// modalImg.addEventListener('click', e => {
//   if (e.target === e.currentTarget) {
//     backdrop.classList.remove('show');
//     modalImg.src = '';
//     modalImg.alt = '';
//   }
// });

// window.addEventListener('keydown', onEscPress);
// function onEscPress(e) {
//   if (e.code === 'Escape') {
//   backdrop.classList.remove('show');
//     modalImg.src = '';
//     modalImg.alt = '';  
//   }
// }

console.log(galleryItems);
