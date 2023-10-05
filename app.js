let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add");
console.log(addToCartBtns);

// function clickButton() {
//   console.log("clicked");
// }
// addToCartBtns.forEach((btn) => btn.addEventListener("click", clickButton));   /*---> при натисканні на кнопку в консоль  виводиться текст

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
); /*---> лічильник товарів в кошику */

// -------------------------------------------------------------------------

let like = document.querySelectorAll(".icon5");
console.log(like);

// function changeLike(item) {
//   let likeAtr = item.getAttribute("class");
//   if (likeAtr === "icon5") {
//     item.setAttribute("class", "icon5-active");
//   } else {
//     item.setAttribute("class", "icon5");
//   }
// }

// like.forEach((item) => item.addEventListener("click", changeLike(item)));

// like.forEach((item) =>
//   item.addEventListener("click", function () {
//     item.classList.toggle("icon5-active");
//   })
// );

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
