const listEl = document.querySelector('.img-list');

export const marcup = (array) => {
    const gallery = array.map(img => {
        return `
                <li class="img-item">
                <a class="img-link" href=${img.largeImageURL}>
                <img src="${img.webformatURL}"
                alt="${img.tags}"
                data-source="${img.largeImageURL}" 
                class="img">
                </a>
                <div class="img-text-box">
                <div class="img-text">
                <h4 class="img-text-title">Likes</h4>
                <p class="img-text-par">${img.likes}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Views</h4>
                <p class="img-text-par">${img.views}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Comments</h4>
                <p class="img-text-par">${img.comments}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Downloads</h4>
                <p class="img-text-par">${img.downloads}</p>
                </div>
                </div>
                </li>`
    }).join('');
    listEl.insertAdjacentHTML('beforeend', gallery);

}