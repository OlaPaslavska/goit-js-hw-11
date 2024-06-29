import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from './js/pixabay-api';
import { imagesTemplate} from './js/render-functions';

 const lightbox = new SimpleLightbox('.gallery li', {
        captions: true,
        captionsData: 'alt',
        captionsDelay: 250,

 })
    lightbox.refresh();
export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('.input'),
    button: document.querySelector('button'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', e => {
    // Зупиняє стандартну поведінку форми, щоб сторінка не перезавантажувалась
    e.preventDefault();
    // Отримує значення введеного тексту з поля форми
    const inputValue = refs.input.value.trim();
    // Перевіряє, чи введено значення
    if (inputValue === '') { 
        // Очищає вміст галереї
        refs.gallery.innerHTML = ' ';
        iziToast.warning({
            title: 'Warning',
            message: 'Please, enter the query',
            layout: 2,
            displayMode: 'once',
            backgroundColor: '#ef4040',
            position:'topRight',
        });
        // Завершує обробку події
           return;
    }
        // Показує завантажувач
    showLoader();
        // Очищає вміст галереї перед завантаженням нових зображень
    refs.gallery.innerHTML = ' ';
     // Викликаємо функцію, яка отримує зображення з API
    getImages(inputValue)
        .then(data => {
        // Перевіряємо, чи є отримані зображення
        if(data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                layout: 2,
                displayMode: 'once',
                backgroundColor: '#ef4040',
                progressBarColor: '#B51B1B',
                position:'topRight',
            });
            //  ховає завантажувач після завершення отримання зображень.
            hideLoader();
            formReset();
            return;
        }
        hideLoader();
        formReset();
        imagesTemplate(data.hits);
        })
        //  обробляється помилка під час отримання зображень з API, яка виводить повідомлення про помилку
    .catch(err => {
        iziToast.error({
            title: 'Error',
            message: `${err}`,
            layout: 2,
            displayMode: 'once',
            backgroundColor: '#ef4040',
            progressBarColor: '#B51B1B',
            position:'topRight',   
        });
    });
});
refs.gallery.innerHtml = markup;

 
export function showLoader() {
    refs.loader.classList.remove('hidden');
}
export function hideLoader() {
    refs.loader.classList.add('hidden');
}
export function formReset() {
    refs.formSearch.reset();
}
