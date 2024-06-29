// Встановлення бібліотеки через npm install simplelightbox

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// imageObject - це масив об'єктів з властивостями зображень, які отримані з API.

export function imagesTemplate(imagesObj) {
    // Метод map використовується для ітерації по кожному об'єкту image в масиві imageObject
    const markup = imagesObj.map(image => {
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
    return;
}
    

