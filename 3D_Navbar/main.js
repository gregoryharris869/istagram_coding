"use strict";

const toggleBtn = qs(".toggle-btn");
const ul = qs("nav .link");
const header = qs(".header");

function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  ul.classList.toggle("active");
  header.classList.toggle("skew");
});
