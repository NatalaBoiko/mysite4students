!function(){var e=document.querySelector(".about__moreBtn"),t=document.querySelector(".about p");e.addEventListener("click",(function(){t.className.includes("hideText")?(t.classList.remove("hideText"),t.classList.add("showText")):(t.classList.add("hideText"),t.classList.remove("showText"))}));var o=document.querySelector(".about__btn"),i=document.querySelector("#modal"),n=document.querySelector("#modalBackDrop"),s=document.body,d=document.querySelector(".modal__close"),c=function(){n.classList.remove("modal__backDrop-visible"),setTimeout((function(){i.classList.remove("modal__visible"),s.style.overflow="auto"}),1e3)};o.addEventListener("click",(function(){i.classList.add("modal__visible"),setTimeout((function(){n.classList.add("modal__backDrop-visible")}),100),s.style.overflow="hidden"})),d.addEventListener("click",c),n.addEventListener("click",(function(e){e.target===e.currentTarget&&c()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&c()})),new Swiper(".swiper-container",{loop:!0,slidesPerView:"auto",breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:40}},scrollbar:{el:".swiper-scrollbar"}});var r=document.querySelector(".swiper-container"),a=document.querySelector(".desktop-portfolio");window.addEventListener("load",(function(){window.innerWidth>=1200?r.classList.add("visually-hidden"):a.classList.add("visually-hidden")}));var l=document.getElementById("modalForm");l.addEventListener("submit",(function(e){e.preventDefault(),emailjs.sendForm("service_cknjun9","template_4w4291a",this).then((function(){alert("Sent!"),l.reset()}),(function(e){alert(JSON.stringify(e))}))}))}();
//# sourceMappingURL=index.b8d7601c.js.map
