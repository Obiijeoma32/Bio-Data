const userTable = document.querySelector(".user1-table-output");
// console.log(userTable);
userTable.addEventListener("click", tableHandler);
function tableHandler() {
  window.location.href = "./user1.html";
}
const tableContent = document.querySelector(".table-content");
const userButton = document.querySelector(".user-form-button-submit");
const userBox1 = document.querySelector(".user-modal-form2");
const userBox2 = document.querySelector(".user-modal-form-box1");
const userBox3 = document.querySelector(".user-modal-form3");
const firstModal = document.querySelector(".user-modal1");
const addUser = document.querySelector(".user-export-button");
const outClick = document.querySelector(".user-modal-box");
const userPage = document.querySelector(".user-page-button");
const userModalForm = document.querySelector(".user-modal-form");
const userButton2 = document.querySelector(".user-form-button2-submit");

console.log(outClick);
userPage.addEventListener("click", function () {
  userBox1.style.display = "block";
});
userModalForm.addEventListener("click", function () {
  if ((userBox1.style.display = "block")) {
    userBox1.style.display = "none";
  }
});
userButton.addEventListener("click", function () {
  userBox1.style.display = "none";
  userBox2.style.display = "block";
});
userButton2.addEventListener("click", function () {
  userBox1.style.display = "none";
  userBox2.style.display = "none";
  userBox3.style.display = "block";
});
const tableModalHandler = () => {
  firstModal.style.display = "block";
};

addUser.addEventListener("click", tableModalHandler);
outClick.addEventListener("click", function () {
  if ((firstModal.style.display = "block")) {
    firstModal.style.display = "none";
  }
});

// tableContent.addEventListener("click");

// console.log(userButton);
// const buttonHandler = () => {
//   userBox1.style.display = "none";
//   userBox2.style.display = "block";

//   console.log("i got clicked");
// };
// console.log(buttonHandler);
// userButton.addEventListener("click", buttonHandler());
