"use strict";
const stars = document.querySelectorAll(".star");
let maxInd = 0;
const rating = function (index) {
  maxInd = maxInd < index ? index : maxInd;
  for (let i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.add(`rate${i + 1}`);
    } else {
      stars[i].classList.remove(`rate${i + 1}`);
    }
  }
};
stars.forEach((star, index) => {
  star.addEventListener("click", () => rating(index));
});
