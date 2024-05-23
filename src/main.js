import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// -----------------------------
const inputEl = document.querySelector('.input');
const buttonEL = document.querySelector('.form-btn');
const formEl = document.querySelector('.box');
const listEl = document.querySelector('.img-list');
const loader = document.querySelector('.this')
let valueImp = "";
const lightBox = new SimpleLightbox('.img-list a', {
    captionsData: 'alt',
    captionsDelay: 250,
    overlayOpacity: 0,
  });
// ----------------------------
// const options = {
//     key: '43845947-8a1e30f8a3261d274f42ac52c',
//     q: '',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
// };
// const BASE_URL = 'https://pixabay.com/api/';
import { fetchPick } from "./js/pixabay-api";
import { marcup } from "./js/render-functions";
// ----------------------------


const sendForm = (event) => {
    listEl.innerHTML = "";
    event.currentTarget.reset();
    event.preventDefault();
    if (valueImp === "") {
        return
    };
    // let params = `?key=${options.key}&q=${options.q}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}`
    
    // const fetchPick = () => {
    //     return fetch(`${BASE_URL}${params}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Запит виконався з помилкою")
    //             };
    //             return response.json();
    //         })
    // };
    loader.classList.add('loader')
    fetchPick(valueImp)
        .then(imgs => {
            loader.classList.remove('loader')
            if (imgs.hits.length === 0) {
                console.log("Sorry, there are no images matching your search query. Please try again!");
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    maxWidth: '300px',
                });
                return
            }
            marcup(imgs.hits);
            lightBox.refresh();
            // const marcup = imgs.hits.map(img => {
            //     return `
            //     <li class="img-item">
            //     <a class="img-link" href=${img.largeImageURL}>
            //     <img src="${img.webformatURL}"
            //     alt="${img.tags}"
            //     data-source="${img.largeImageURL}" 
            //     class="img">
            //     </a>
            //     <div class="img-text-box">
            //     <div class="img-text">
            //     <h4 class="img-text-title">Likes</h4>
            //     <p class="img-text-par">${img.likes}</p>
            //     </div>
            //     <div class="img-text">
            //     <h4 class="img-text-title">Views</h4>
            //     <p class="img-text-par">${img.views}</p>
            //     </div>
            //     <div class="img-text">
            //     <h4 class="img-text-title">Comments</h4>
            //     <p class="img-text-par">${img.comments}</p>
            //     </div>
            //     <div class="img-text">
            //     <h4 class="img-text-title">Downloads</h4>
            //     <p class="img-text-par">${img.downloads}</p>
            //     </div>
            //     </div>
            //     </li>`
            // }).join('');
            // listEl.insertAdjacentHTML('beforeend', gallery);
        })
        .catch(error => {
            console.log(error);
        });
    
valueImp = "";
};
formEl.addEventListener("submit", sendForm);


const giveValue = (event) => {
    valueImp = event.currentTarget.value;
};
inputEl.addEventListener("input", giveValue);
lightBox.refresh();
// const openModal = (event) => {
//     if (event.target === event.currentTarget) {
//         return
//     };
//     lightBox.create(`
//     <img
//       src=${event.target.dataset.source}
//       alt=${event.target.alt}
//     />
// `);
//     instance.show();
//     event.preventDefault();
// };
// listEl.addEventListener("click", openModal);
