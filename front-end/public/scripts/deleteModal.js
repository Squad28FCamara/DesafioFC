const cancelbtn = document.getElementById("delete");
const modalOverlay = document.querySelector(".modal-overlay");

cancelbtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});
