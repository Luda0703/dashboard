'use strict'

const navLink = document.querySelectorAll(".nav_link");
const card = document.querySelectorAll(".card");

navLink.forEach(function (element) {
  element.addEventListener("click", active);
});

function active(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  navLink.forEach(function (item) {
    item.classList.remove("nav_link-active");
  });

  card.forEach(function (item) {
    item.classList.remove("content-item--active");
  });

  tabTarget.classList.add("nav_link-active");
  document
    .querySelector(`#${button}`)
    .classList.add("content-item--active");
}

const btnTh = document.querySelector(".btn_th");

btnTh.addEventListener("click", () => {
    btnTh.classList.toggle("btn_th-activ");
});

