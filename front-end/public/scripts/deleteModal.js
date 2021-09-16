const modalOverlay = document.querySelector(".modal-overlay");

document.querySelectorAll(".delete").forEach((item) => {
  item.addEventListener("click", () => {
    modalOverlay.classList.add("active");
  });
});
