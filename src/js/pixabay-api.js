import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"


export  function getImages(inputValue) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44654317-b43c54b885daf7a418bb31fe3',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url)
        .then(data => data.json())
        .catch(err => {
            iziToast.error({
                title: 'Error',
                message: `${err}`,
                layout: 2,
                displayMode: 'once',
                backgroundColor: '#ef4040',
                progressBarColor: '#B51B1B',
                position: 'topRight'

            });
        });
}