const elModalOpenBtn = document.querySelector(".ask-question-btn");
const elModal = document.querySelector(".modal");
const elModalCloseBtn = document.querySelector(".modal__close");
// const elLinkBtn = document.querySelectorAll(".item-intro__link");
// const elLinkTitle = document.querySelectorAll(".item-intro__title");
// const elTitleNew = document.querySelector(".info-open__title");

elModalOpenBtn.addEventListener("click", function () {
  elModal.classList.add("modal-open");
});

elModalCloseBtn.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});

elModal.addEventListener("click", function () {
  elModal.classList.remove("modal-open");
});

// elLinkBtn.forEach((item, index) => {
//   item.addEventListener("click", function (event) {
//     event.preventDefault();
//     location.href = "./open.html";
//     // window.stop();
//     elLinkTitle.forEach((title) => {
//       if (index == title.getAttribute("dataset")) {
//         arr.push(title.innerHTML);
//       }
//     });
//   });
// });
