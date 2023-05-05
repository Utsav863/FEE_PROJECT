let query = document.querySelector(".querys");
let searchBtn = document.querySelector(".searchBtn");
document.getElementById("inputBox").focus();
searchBtn.onclick = function () {
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_self");
};
const dropdownButton = document.getElementById("dropdownButton");
const dropdownTwo = document.getElementById("dropdown_background");

function handleDropdown() {
  if (dropdownTwo.style.display === "none") {
    dropdownTwo.style.display = "block";
  } else dropdownTwo.style.display = "none";
}

document.addEventListener("keydown", function handleEnter(event) {
  let keyCode = event.keyCode;
  if (keyCode == 13) {
    let url = "https://www.google.com/search?q=" + query.value;
    window.open(url, "_self");
  }
});

