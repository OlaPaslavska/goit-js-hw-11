// Встановлення бібліотеки через npm install simplelightbox

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../main';
 const lightbox = new SimpleLightbox('.gallery li', {
        captions: true,
        captionsData: 'alt',
        captionsDelay: 250,

    })
// imageObject - це масив об'єктів з властивостями зображень, які отримані з API.

export function imagesTemplate(imagesObj) {
    const markup = imagesObj.map(image => {
            return `<li class="gallery-item">
        <a class="gallery-link"
        href="${image.largeImageURL}">
        <image 
        width=360;
        height=200;
         class="gallery-image"
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
    lightbox.refresh();
}
export function showLoader() {
    refs.loader.classList.remove('hidden');
}
export function hideLoader() {
    refs.loader.classList.add('hidden');
}
export function formReset() {
    refs.formSearch.reset();
}
    

