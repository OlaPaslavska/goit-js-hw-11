import{i,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(s){const o="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"44654317-b43c54b885daf7a418bb31fe3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${a}`;return fetch(e).then(t=>t.json()).catch(t=>{i.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})}function p(s){return s.map(r=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${r.largeImageURL}">
        <image class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"/>
        </a>
        <div class="gallery-card-container">
        <p> <strong>Likes:</strong> ${r.likes}</p>
        <p> <strong>Views:</strong> ${r.views}</p>
        <p> <strong>Comments:</strong> ${r.comments}</p>
        <p> <strong>Downloads:</strong> ${r.downloads}</p>
        </div>
        </li>`).join("")}const n={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.text.value.trim();if(o===""){n.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",position:"topRight"});return}f(),n.gallery.innerHTML=" ",d(o).then(r=>{if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),c(),n.form.reset();return}c(),n.form.reset(),p(r.hits)}).catch(r=>{i.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})});const g=new u(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});g.refresh();function f(){n.loader.classList.remove("hidden")}function c(){n.loader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
