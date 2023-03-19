document.querySelectorAll(".fmc-dialog__close").forEach((td) => td.addEventListener("click", closeModal));
document.querySelectorAll(".fmc-click-enlarge-image").forEach((td) => td.addEventListener("click", openModal));
function closeModal() {
  document.querySelector(".fmc-dialog").classList.remove("fmc-dialog--opened");
}
function openModal() {
  document.querySelector(".fmc-dialog").classList.add("fmc-dialog--opened");
}
let outerDialog = document.querySelectorAll(".fmc-dialog");
let innerDialog = document.querySelectorAll(".fmc-dialog__content"); 
outerDialog.forEach((outerDialoges) => { 
  outerDialoges.addEventListener("click", function () { 
    innerDialog.forEach((event) => { 
      closeModal();
      }); 
    }); 
});
    