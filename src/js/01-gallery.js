// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
const galaryList = document.querySelector(".gallery")
const item = galleryItems.map((  {preview, original, description} ) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}">
</a>
</li>
  `).join("")

galaryList.insertAdjacentHTML("beforeend", item)

let gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt", overlayOpacity: 0.5});
console.log(galleryItems);
