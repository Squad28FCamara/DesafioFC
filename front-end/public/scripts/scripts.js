let floor = document.getElementById("floor");
function disable() {
  floor.value = "A1";
  floor.style.visibility = "hidden";
}

function able() {
  floor.disabled = false;
  floor.value = "";
}
