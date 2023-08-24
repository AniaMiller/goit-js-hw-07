import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function importImages(image) {
  return image
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
      </li>
      `
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", importImages(galleryItems));
const simpleLightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});