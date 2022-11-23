const transactionModal = document.querySelector(".transaction-modal1-box");
const clickOut = document.querySelector(".user-modal-box");
const table = document.querySelector(".transaction-table-output");
// console.log(transactionModal, clickOut, table);

table.addEventListener("click", function () {
  transactionModal.style.display = "block";
});
clickOut.addEventListener("click", function () {
  transactionModal.style.display = "block";
  transactionModal.style.display = "none";
});
