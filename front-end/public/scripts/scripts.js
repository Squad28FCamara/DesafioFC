let floor = document.getElementById("floor");
function disable() {
  floor.setAttribute("disabled", "true");
  floor.value = "A1";
}

function able() {
  floor.disabled = false;
  floor.value = "";
}
