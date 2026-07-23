const quickMenu = document.querySelector(".quick-menu");
const footer = document.querySelector(".footer");
window.addEventListener("scroll", function () {
   const scrollBottom = window.scrollY + window.innerHeight;
   const footerTop = footer.offsetTop;
   if (scrollBottom > footerTop) {
      quickMenu.classList.add("footer-position");
   } else {
      quickMenu.classList.remove("footer-position");
   }
});
