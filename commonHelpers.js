import{i}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();async function c(e){const o="https://pixabay.com",s="/api",a=new URLSearchParams({key:"44654317-b43c54b885daf7a418bb31fe3",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${o}${s}?{params}`;return fetch(r,{params:a}).then(t=>t.json()).catch(t=>{i.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})}const n={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",e=>{e.preventDefault();const o=e.target.elements.text.value.trim();if(o===""){n.gallery.innerHTML=" ",i.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",position:"topRight"});return}showLoader(),n.gallery.innerHTML=" ",c(o).then(s=>{if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),hideLoader(),n.form.reset();return}hideLoader(),n.form.reset(),imagesTemplate(s.hits)}).catch(s=>{i.error({title:"Error",message:"${err}",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})});c().then(e=>{const o=p(e);n.gallery.innerHtml=o});function u(e){return`<li class="gallery-item">
        <a class="gallery-link"
        href="${e.largeImageURL}">
        <image class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"/>
        </a>
        <div class="gallery-card-container">
        <p> <strong>Likes:</strong> ${e.likes}</p>
        <p> <strong>Views:</strong> ${e.views}</p>
        <p> <strong>Comments:</strong> ${e.comments}</p>
        <p> <strong>Downloads:</strong> ${e.downloads}</p>
        </div>
        </li>`}function p(e){return e.map(u).join("")}
//# sourceMappingURL=commonHelpers.js.map
