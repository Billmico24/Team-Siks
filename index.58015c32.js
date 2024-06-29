var scrollLinks=document.querySelectorAll("[data-scrollto]"),header=document.querySelector(".header");scrollLinks.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector("."+this.dataset.scrollto).offsetTop-header.getBoundingClientRect().height;window.scrollTo({top:t,left:0,behavior:"smooth"})}))}));
//# sourceMappingURL=index.58015c32.js.map
