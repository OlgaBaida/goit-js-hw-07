import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgConteiner = document.querySelector (".gallery");


function createPictureGallery (galleryItems) {
    return galleryItems.map ( ({preview, original, description})=> {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join ("")
}

const imgMarkup = createPictureGallery(galleryItems);
imgConteiner.insertAdjacentHTML ("afterbegin", imgMarkup);

imgConteiner.addEventListener("click", (eve) => {
  
    if (eve.target.nodeName !=="IMG") {
        return;
    }  eve.preventDefault();

const urlLargeImage = eve.target.dataset.source;

const instance = basicLightbox.create(`<img src="${urlLargeImage}" width = "800" heigth = "600">`
 );
instance.show();
})
