import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImages = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
    </a>
</li>`).join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', galleryImages);

const lightbox = new SimpleLightbox('.gallery__link', { captionsData: "alt", captionDelay: "250" });
