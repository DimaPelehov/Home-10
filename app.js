let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add");
// console.log(addToCartBtns);

// function clickButton() {
//   console.log("clicked");
// }
// addToCartBtns.forEach((btn) => btn.addEventListener("click", clickButton));   /*---> при натисканні на кнопку в консоль  виводиться текст

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
); /*---> лічильник товарів в кошику */

// ---------------реалізація лайк----------------------------------------------------------

let like = document.querySelectorAll(".icon5");
// console.log(like);

// ----------------------варіант рішення № 1 --------------

// function changeLike(item) {
//   let likeAtr = item.getAttribute("class");
//   if (likeAtr === "icon5") {
//     item.setAttribute("class", "icon5-active");
//   } else {
//     item.setAttribute("class", "icon5");
//   }
// }

// like.forEach((item) =>
//   item.addEventListener("click", () => {
//     changeLike(item);
//   })
// );

// ------------------ варіант рішення № 2 ----------------

// like.forEach((item) =>
//   item.addEventListener("click", function () {
//     item.classList.toggle("icon5-active");
//   })
// );

// -----------------варіант рішення № 3 ----------------

like.forEach((item) =>
  item.addEventListener("click", function () {
    let iconAtr = item.getAttribute("class");
    if (iconAtr === "icon5") {
      item.setAttribute("class", "icon5-active");
    } else {
      item.setAttribute("class", "icon5");
    }
  })
);
// ---------------------- експеримент --------
// like.forEach((item) =>
//   item.addEventListener("click", function () {
//     let iconAtr = item.getAttribute("class");
//     if (iconAtr === "icon5") {
//       like.innerHTML(<div class="icon5-active"></div>);
//     } else {
//       like.innerHTML(<div class="icon5"></div>);
//     }
//   })
// );

// ----------------------------

// ----------------вспливаюча форма---------------
let moreDetailsBtns = document.querySelectorAll(".btn-more");
console.log(moreDetailsBtns);
let modal = document.querySelector(".modal");
console.log(modal);
let closeBtn = document.querySelector(".btn-close");
console.log(closeBtn);

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // modal.style.display = "block";
    // просто вручну змінюємо властивість класу .modal
    // modal.style.backgroundColor = "red";
    // Правильне рішення
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hide");
  modal.classList.remove("show");
});
// Або коротше
// closeBtn.addEventListener("click", closeModal);
// функція closeModal прописана нижче

// зробимо закривання форми при кліку поза формою
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
  // ПРИНЦИП ДІЇ: функція closeModal додає клас для modal, ховаючи його.
  // Event (у нас e) - об'єкт події.
  //  e.target - показує той елемент, по якому ми клікаємо
  // ми пишемо: якщо e.target===modal(а в нас вони дорівнюють, оскільки затемнення- це modal) то сховати modal )

  if (e.target === document.querySelector(".form-more-details h3")) {
    let modalH_3 = document.querySelector(".form-more-details h3");
    modalH_3.style.backgroundColor = "green";
    // це для зразка
  }
});

//-------------------слайдер----------------------------------

$(".slider-block").slick({
  dots: true,
  infinite: true,
});
