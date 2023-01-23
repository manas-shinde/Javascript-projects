"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
function keyPressed(e) {
  console.log(e);
}
for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", openModal);
}

btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
