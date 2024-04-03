'use strict'

const navLink = document.querySelectorAll(".nav_link");

navLink.forEach(function (element) {
  element.addEventListener("click", active);
});

function active(evt) {
  const tabTarget = evt.currentTarget;

  navLink.forEach(function (item) {
    item.classList.remove("nav_link-active");
  });

  tabTarget.classList.add("nav_link-active");
}

const btnTh = document.querySelector(".btn_th");

btnTh.addEventListener("click", () => {
    btnTh.classList.toggle("btn_th-activ");
});

