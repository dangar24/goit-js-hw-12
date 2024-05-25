import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// -----------------------------
const inputEl = document.querySelector('.input');
const buttonEL = document.querySelector('.form-btn');
const formEl = document.querySelector('.box');
const listEl = document.querySelector('.img-list');
const loader = document.querySelector('.this');
const showMoreEl = document.querySelector('.load-more-btn');
let showMoreValue = '';
let currentPage = 1;
let valueImp = "";
let allPages = null;
let scrollHeight = null;
const lightBox = new SimpleLightbox('.img-list a', {
    captionsData: 'alt',
    captionsDelay: 250,
    overlayOpacity: 0,
  });

import { fetchPick } from "./js/pixabay-api";
import { marcup } from "./js/render-functions";


const sendForm = (event) => {
    showMoreEl.addEventListener('click', showMore);
    showMoreEl.classList.add('d-none');
    currentPage = 1;
    listEl.innerHTML = "";
    event.currentTarget.reset();
    event.preventDefault();
    if (valueImp === "") {
        return
    };


    loader.classList.add('loader')
    fetchPick(valueImp, currentPage)
    .then (
        imgs =>{ 
            loader.classList.remove('loader')
            allPages = Math.ceil(imgs.data.total / 15);
            if (imgs.data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    maxWidth: '300px',
                });
                return
            }
            marcup(imgs.data.hits);
            lightBox.refresh();
            if (allPages > 1) {
                showMoreEl.classList.remove('d-none')
            };
        })
        .catch(error => {
            iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    maxWidth: '300px',
                });
        });
showMoreValue = valueImp;   
valueImp = "";
};
formEl.addEventListener("submit", sendForm);


const giveValue = (event) => {
    valueImp = event.currentTarget.value;
};
inputEl.addEventListener("input", giveValue);
lightBox.refresh();

const scrollDown = () => {
    const lastImg = document.querySelector('.img-item:last-child')
    let rect = lastImg.getBoundingClientRect();
    scrollHeight = rect.height * 2;
    window.scrollBy({
        top: scrollHeight,
        left: 0,
        behavior: "smooth",
    });
};

const showMore = () => {
    
    currentPage += 1;
    showMoreEl.classList.add('d-none');
    loader.classList.add('loader');
    fetchPick(showMoreValue, currentPage)
    .then(imgs => {
        loader.classList.remove('loader');
        marcup(imgs.data.hits);
        showMoreEl.classList.remove('d-none');
        lightBox.refresh();
        scrollDown();
        if (currentPage === allPages) {
            showMoreEl.removeEventListener('click', showMore)
            showMoreEl.classList.add('d-none');
            iziToast.error({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
                maxWidth: '300px',
            });
            return;
        };
    }).catch(error => {
        iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    maxWidth: '300px',
                });
    });
        
        
}
showMoreEl.addEventListener('click', showMore);