import"./hoisted.0a78b458.js";document.addEventListener("DOMContentLoaded",()=>{Array.from(document.querySelectorAll(".website-card")).forEach(e=>{const s=e.querySelector(".overlay");Array.from(e.querySelectorAll("a")).forEach(t=>{t.addEventListener("touchend",l=>{l.stopPropagation()})}),e.addEventListener("touchend",t=>{t.preventDefault(),s?.classList.toggle("hidden")})})});class d extends HTMLElement{intervalId=null;slideIndex=0;connectedCallback(){const e=Array.from(this.querySelectorAll("li")),s=t=>{e.forEach(l=>{delete l.dataset.active}),t>=e.length&&(this.slideIndex=0),t<0&&(this.slideIndex=e.length-1),e[this.slideIndex].dataset.active="true"},n=()=>s(this.slideIndex+=1);this.intervalId=setInterval(n,2e3)}}document.addEventListener("astro:page-load",()=>{customElements.get("custom-carousel")||customElements.define("custom-carousel",d)});
