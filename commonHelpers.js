import{i as a,S as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(n){const r="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44654317-b43c54b885daf7a418bb31fe3",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${i}`;return fetch(e).then(t=>t.json()).catch(t=>{a.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})}function g(n){n.map(r=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${r.largeImageURL}">
        <image 
        width=360;
        height=200;
         class="gallery-image"
        src="${r.webformatURL}"
        alt="${r.tags}"/>
        </a>
        <div class="gallery-card-container">
        <p> <strong>Likes:</strong> ${r.likes}</p>
        <p> <strong>Views:</strong> ${r.views}</p>
        <p> <strong>Comments:</strong> ${r.comments}</p>
        <p> <strong>Downloads:</strong> ${r.downloads}</p>
        </div>
        </li>`).join("")}const f=new d(".gallery li",{captions:!0,captionsData:"alt",captionsDelay:250});f.refresh();const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",n=>{n.preventDefault();const r=s.input.value.trim();if(r===""){s.gallery.innerHTML=" ",a.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",position:"topRight"});return}m(),s.gallery.innerHTML=" ",p(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),c(),u();return}c(),u(),g(o.hits)}).catch(o=>{a.error({title:"Error",message:`${o}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})});s.gallery.innerHtml=markup;function m(){s.loader.classList.remove("hidden")}function c(){s.loader.classList.add("hidden")}function u(){s.formSearch.reset()}
//# sourceMappingURL=commonHelpers.js.map
