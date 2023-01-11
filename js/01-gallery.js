import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgConteiner = document.querySelector (".gallery");
const imgMarkup = createPictureGallery(galleryItems);
imgConteiner.insertAdjacentHTML ("beforeend", imgMarkup);

function createPictureGallery (galleryItems) {
    return galleryItems.map ( ({preview, original, description})=> {
        return `<div class="gallery__item">
        <a class="gallery__link" href="$(original)">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    }).join ("")
}
imgConteiner.addEventListener("click", (eve) => {
    eve.preventDefault();
    if (eve.target.nodeName !=="IMG") {
        return;
    }
});
const urlLargeImage = eve.target.dataset.source;

const instance = basicLightbox.create(' <img src="${urlLargeImage}" width = "800" heigth = "600">'
 );
    instance.show();

// window.addEventListener("keydown", e => {
//   if (e.code === "Escape") {
//     instance.close();
//   }
//   window.removeEventListener("keydown", e => {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   });
// });
