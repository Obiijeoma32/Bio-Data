const settlementButton = document.querySelector(".settlement-modal1-box");
const clickOut = document.querySelector(".user-modal-box");
const settlementTable = document.querySelector(".transaction-table-output");
const outClick = document.querySelector(".settlement-close-button");

console.log(settlementTable);
settlementTable.addEventListener("click", function () {
  settlementButton.style.display = "block";
});
clickOut.addEventListener("click", function () {
  if ((settlementButton.style.display = "block")) {
    settlementButton.style.display = "none";
  }
});
outClick.addEventListener("click", function () {
  if ((settlementButton.style.display = "block")) {
    settlementButton.style.display = "none";
  }
});
