
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from './js/pixabay-api';
import { showLoader,hideLoader } from './js/render-functions';

export const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('.input'),
    button: document.querySelector('button'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
};
refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = e.target.elements.text.value.trim();
    if (inputValue === '') { 
        refs.gallery.innerHTML = ' ';
        iziToast.warning({
            title: 'Warning',
            message: 'Please, enter the query',
            layout: 2,
            displayMode: 'once',
            backgroundColor: '#ef4040',
            position:'topRight',
        });
        return;
    }

    showLoader();
    refs.gallery.innerHTML = ' ';
    getImages(inputValue)
    .then(data => {
        if(data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                layout: 2,
                displayMode: 'once',
                backgroundColor: '#ef4040',
                progressBarColor: '#B51B1B',
                position:'topRight',
            });
            hideLoader();
            refs.form.reset();
            return;
        }
        hideLoader();
        refs.form.reset();
        imagesTemplate(data.hits);
    })
    .catch(err => {
        iziToast.error({
            title: 'Error',
            message: '${err}',
            layout: 2,
            displayMode: 'once',
            backgroundColor: '#ef4040',
            progressBarColor: '#B51B1B',
            position:'topRight',   
        });
    });
});