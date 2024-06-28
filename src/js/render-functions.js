// Встановлення бібліотеки через npm install simplelightbox

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../main';



export function imageTemplate(imageObject) {
    const markup = imageObject
    .map(image => {
        return `<li class="gallery-item">
        <a class="gallery-link"
        href="${image.largeImageURL}">
        <image class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"/>
        </a>
        <div class="gallery-card-container">
        <p> <strong>Likes:</strong> ${image.likes}</p>
        <p> <strong>Views:</strong> ${image.views}</p>
        <p> <strong>Comments:</strong> ${image.comments}</p>
        <p> <strong>Downloads:</strong> ${image.downloads}</p>
        </div>
        </li>`;
    
    })
.join('');
    refs.gallery.innerHtml = markup;
    const lightbox = new SimpleLightbox('.gallyry a', {
        captions: true,
        captionsData: 'alt',
        captionsDelay: 250,

    })
        .refresh();
}
export function showLoader() {
    refs.loader.classList.remove('.hidden');
}
export function hideLoader() {
    refs.loader.classList.add('.hidden');
}

