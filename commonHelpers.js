import{i as a}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function u(s){const t="https://pixabay.com",o="/api/",i=new URLSearchParams({key:"44654317-b43c54b885daf7a418bb31fe3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}?${i}`;return fetch(e).then(r=>r.json()).catch(r=>{a.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})}function d(){n.loader.classList.remove("hidden")}function l(){n.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.text.value.trim();if(t===""){n.gallery.innerHTML=" ",a.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",position:"topRight"});return}d(),n.gallery.innerHTML=" ",u(t).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),l(),n.form.reset();return}l(),n.form.reset(),imagesTemplate(o.hits)}).catch(o=>{a.error({title:"Error",message:`${o}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
