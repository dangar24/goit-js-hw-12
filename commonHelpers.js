import{a as L,S as $,i as l}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const i={key:"43845947-8a1e30f8a3261d274f42ac52c",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1},S="https://pixabay.com/api/",y=async(t,r)=>{let s=`?key=${i.key}&q=${t}&image_type=${i.image_type}&orientation=${i.orientation}&safesearch=${i.safesearch}&per_page=${i.per_page}&page=${r}`;return await L.get(`${S}${s}`)},b=document.querySelector(".img-list"),v=t=>{const r=t.map(s=>`
                <li class="img-item">
                <a class="img-link" href=${s.largeImageURL}>
                <img src="${s.webformatURL}"
                alt="${s.tags}"
                data-source="${s.largeImageURL}" 
                class="img">
                </a>
                <div class="img-text-box">
                <div class="img-text">
                <h4 class="img-text-title">Likes</h4>
                <p class="img-text-par">${s.likes}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Views</h4>
                <p class="img-text-par">${s.views}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Comments</h4>
                <p class="img-text-par">${s.comments}</p>
                </div>
                <div class="img-text">
                <h4 class="img-text-title">Downloads</h4>
                <p class="img-text-par">${s.downloads}</p>
                </div>
                </div>
                </li>`).join("");b.insertAdjacentHTML("beforeend",r)},q=document.querySelector(".input");document.querySelector(".form-btn");const w=document.querySelector(".box"),E=document.querySelector(".img-list"),d=document.querySelector(".this"),a=document.querySelector(".load-more-btn");let x="",c=1,n="",p=null,f=null;const h=new $(".img-list a",{captionsData:"alt",captionsDelay:250,overlayOpacity:0}),P=t=>{a.addEventListener("click",g),a.classList.add("d-none"),c=1,E.innerHTML="",t.currentTarget.reset(),t.preventDefault(),n!==""&&(d.classList.add("loader"),y(n,c).then(r=>{if(d.classList.remove("loader"),p=Math.ceil(r.data.total/15),r.data.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"});return}v(r.data.hits),h.refresh(),p>1&&a.classList.remove("d-none")}).catch(r=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"})}),x=n,n="")};w.addEventListener("submit",P);const R=t=>{n=t.currentTarget.value};q.addEventListener("input",R);h.refresh();const M=()=>{f=document.querySelector(".img-item:last-child").getBoundingClientRect().height*2,window.scrollBy({top:f,left:0,behavior:"smooth"})},g=()=>{c+=1,a.classList.add("d-none"),d.classList.add("loader"),y(x,c).then(t=>{if(d.classList.remove("loader"),v(t.data.hits),a.classList.remove("d-none"),h.refresh(),M(),c===p){a.removeEventListener("click",g),a.classList.add("d-none"),l.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"300px"});return}}).catch(t=>{l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"300px"})})};a.addEventListener("click",g);
//# sourceMappingURL=commonHelpers.js.map
