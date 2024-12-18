const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector(".burger");

  burgerIcon.addEventListener("click", () => {
      burgerIcon.classList.toggle("rotated");
  });
});
const modalWindow = document.querySelector('.modal-window');
const modalContent = document.querySelector('.window-content')
const contactSales1 = document.querySelector('.contact-sales')
const contactSales2 = document.querySelector('.footer-btn')
const contactSales3 = document.querySelector('.contact-sales2')
const closeBtn = document.querySelector('.close-btn')

contactSales1.addEventListener("click", () => {
 modalWindow.classList.remove("none")
});

contactSales2.addEventListener("click", () => {
  modalWindow.classList.remove("none")
 });

 contactSales3.addEventListener("click", () => {
  modalWindow.classList.remove("none")
 });
 
 closeBtn.addEventListener("click", () => {
  modalWindow.classList.add("none")
});