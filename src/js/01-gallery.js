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
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
    </li>
    `
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", importImages(galleryItems));
gallery.addEventListener("click", previewImage);

function previewImage(e) {
  e.preventDefault();

  const source = e.target.dataset.source;
  if (!source) {
    return
  }

  const instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
    `,
    {
      onShow: () => window.addEventListener("keydown", closeWhenEsc),
      onClose: () => window.removeEventListener("keydown", closeWhenEsc),
    }
  );

  instance.show();
  function closeWhenEsc(e) {
    if (e.code === "Escape") instance.close();
  }
}