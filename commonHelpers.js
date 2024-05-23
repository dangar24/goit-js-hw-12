import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const i={key:"43845947-8a1e30f8a3261d274f42ac52c",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},p="https://pixabay.com/api/",g=o=>{let r=`?key=${i.key}&q=${o}&image_type=${i.image_type}&orientation=${i.orientation}&safesearch=${i.safesearch}`;return fetch(`${p}${r}`).then(t=>{if(!t.ok)throw new Error("Запит виконався з помилкою");return t.json()})},f=document.querySelector(".img-list"),h=o=>{const r=o.map(t=>`
                <li class="img-item">
                <a class="img-link" href=${t.largeImageURL}>
                <img src="${t.webformatURL}"
                alt="${t.tags}"
                data-source="${t.largeImageURL}" 
                class="img">
                </a>
                <div class="img-text-box">
                <div class="img-text">
                <h4 class="img-text-title">Likes</h4>
                <p class="img-text-par">${t.likes}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Views</h4>
                <p class="img-text-par">${t.views}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Comments</h4>
                <p class="img-text-par">${t.comments}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Downloads</h4>
                <p class="img-text-par">${t.downloads}</p>
                </div>
                </div>
                </li>`).join("");f.insertAdjacentHTML("beforeend",r)},y=document.querySelector(".input");document.querySelector(".form-btn");const v=document.querySelector(".box"),x=document.querySelector(".img-list"),l=document.querySelector(".this");let a="";const m=new u(".img-list a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}),L=o=>{x.innerHTML="",o.currentTarget.reset(),o.preventDefault(),a!==""&&(l.classList.add("loader"),g(a).then(r=>{if(l.classList.remove("loader"),r.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!"),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"});return}h(r.hits),m.refresh()}).catch(r=>{console.log(r)}),a="")};v.addEventListener("submit",L);const $=o=>{a=o.currentTarget.value};y.addEventListener("input",$);m.refresh();
//# sourceMappingURL=commonHelpers.js.map
