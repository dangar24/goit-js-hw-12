import{a as x,S as $,i as f}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const i={key:"43845947-8a1e30f8a3261d274f42ac52c",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1},b="https://pixabay.com/api/",y=async(t,s)=>{let r=`?key=${i.key}&q=${t}&image_type=${i.image_type}&orientation=${i.orientation}&safesearch=${i.safesearch}&per_page=${i.per_page}&page=${s}`;return await x.get(`${b}${r}`)},w=document.querySelector(".img-list"),v=t=>{const s=t.map(r=>`
                <li class="img-item">
                <a class="img-link" href=${r.largeImageURL}>
                <img src="${r.webformatURL}"
                alt="${r.tags}"
                data-source="${r.largeImageURL}" 
                class="img">
                </a>
                <div class="img-text-box">
                <div class="img-text">
                <h4 class="img-text-title">Likes</h4>
                <p class="img-text-par">${r.likes}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Views</h4>
                <p class="img-text-par">${r.views}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Comments</h4>
                <p class="img-text-par">${r.comments}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Downloads</h4>
                <p class="img-text-par">${r.downloads}</p>
                </div>
                </div>
                </li>`).join("");w.insertAdjacentHTML("beforeend",s)},S=document.querySelector(".input");document.querySelector(".form-btn");const q=document.querySelector(".box"),E=document.querySelector(".img-list"),c=document.querySelector(".this"),a=document.querySelector(".load-more-btn");let L="",n=1,l="",u=null,h=null;const p=new $(".img-list a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}),P=t=>{a.addEventListener("click",g),a.classList.add("d-none"),n=1,E.innerHTML="",t.currentTarget.reset(),t.preventDefault(),l!==""&&(c.classList.add("loader"),y(l,n).then(s=>{if(c.classList.remove("loader"),u=Math.ceil(s.data.total/15),s.data.hits.length===0){console.log("Sorry, there are no images matching your search query. Please try again!"),f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"});return}v(s.data.hits),p.refresh(),u>1&&a.classList.remove("d-none")}).catch(s=>{console.log(s)}),L=l,l="")};q.addEventListener("submit",P);const M=t=>{l=t.currentTarget.value};S.addEventListener("input",M);p.refresh();const O=()=>{h=document.querySelector(".img-item:last-child").getBoundingClientRect().height*2,window.scrollBy({top:h,left:0,behavior:"smooth"})},g=()=>{n+=1,a.classList.add("d-none"),c.classList.add("loader"),y(L,n).then(t=>{if(c.classList.remove("loader"),v(t.data.hits),a.classList.remove("d-none"),p.refresh(),O(),n===u){a.removeEventListener("click",g),a.classList.add("d-none"),f.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"300px"});return}}).catch(t=>{console.log(t)})};a.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
