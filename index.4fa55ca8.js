var slideCounter=document.querySelector(".slide-first"),swiper=new Swiper(".hero-slider",{speed:600,loop:!0,autoplay:{enabled:!0,delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-next",prevEl:".swiper-back"}});swiper.on("slideChange",(function(){var e=this.realIndex+1;slideCounter.innerHTML="0"+e}));
//# sourceMappingURL=index.4fa55ca8.js.map
