const test = document.querySelector(".confirmation");
const modalOverlay = document.querySelector(".modal-overlay");

test.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  window.location.href = "/";
});
