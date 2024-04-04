"use strict";

const navLink = document.querySelectorAll(".nav_link");
const card = document.querySelectorAll(".card");
const btnTh = document.querySelectorAll(".btn_th");

navLink.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const a = tabTarget.dataset.a;

  navLink.forEach(function (item) {
    item.classList.remove("nav_link-active");
  });

  card.forEach(function (item) {
    item.classList.remove("content-item--active");
  });

  tabTarget.classList.add("nav_link-active");
  document.querySelector(`#${a}`).classList.add("content-item--active");

  btnTh.forEach((btnEl) => {
    btnEl.addEventListener("click", () => {
      btnEl.classList.toggle("btn_th-active");
      btnEl.textContent = btnEl.classList.contains("btn_th-active")
        ? "Active"
        : "Inactive";
    });
  });
}

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText =
      accordeonTitle.parentElement.querySelector(".accordeon__text");

    accordeonTitle.classList.toggle("accordeon__title-active");
    currentText.classList.toggle("accordeon__text-visible");

    if (currentText.classList.contains("accordeon__text-visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
