const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let n=null;t.addEventListener("click",(()=>{document.body.style.backgroundColor=d(),n=setInterval((()=>{document.body.style.background=d()}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(()=>{clearInterval(n),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.09d59a0a.js.map