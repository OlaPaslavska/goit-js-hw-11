// Встановлення бібліотеки через npm install simplelightbox

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../main';

getImages().then(data => {
    const markup = imagesTemplate(data);
    refs.gallery.innerHtml = markup;
});
function imageTemplate(image) {
    return`<li class="gallery-item">
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
}


function imagesTemplate(images) { 
    return images.map(imageTemplate).join('');
}


