const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");console.log(e),console.log(t),e.addEventListener("click",(function(){timerId=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(function(){clearInterval(timerId),e.disable=!1}));
//# sourceMappingURL=01-color-switcher.eceebacc.js.map