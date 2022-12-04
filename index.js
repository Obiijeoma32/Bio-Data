const addTerminal = document.querySelector(".terminal-page-button");
const terminalTable = document.querySelector(".user1-table-output");
const terminalModal = document.querySelector(".terminal-modal1");
const terminalForm = document.querySelector(".terminal-form2");

addTerminal.addEventListener("click", function () {
  terminalForm.style.display = "block";
});
const clickOut = document.querySelector(".terminal-modal-box");
const buttonClose = document.querySelector(".user-button-handle-close");
// console.log(clickOut);
clickOut.addEventListener("click", function () {
  terminalForm.style.display = "none";
});

terminalTable.addEventListener("click", function () {
  terminalModal.style.display = "block";
});
const outClick = document.querySelector(".user-modal-box");
// console.log(clickOut);
outClick.addEventListener("click", function () {
  terminalModal.style.display = "none";
});
buttonClose.addEventListener("click", function () {
  terminalModal.style.display = "none";
});
