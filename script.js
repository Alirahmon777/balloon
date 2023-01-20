// massivdagi sonlarni musbatga va butun songa aylantirish

// let numbers = [3.02, -3.65, 5, -9];
// let result = [];

// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i];
//   if (numbers[i] < 0) {
//     num = -1 * numbers[i];
//   }

//   result.push(Math.round(num));
// }

// console.log(result);

// console.log(numbers);

// ikkiga bo'linadigan sonlar

// for (let i = 0; i < 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// massivdagi sonlarni yig'indisi

// let numbers = [1, 3, 5, 9];
// let num;
// let result = 0;

// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i];
//   if (numbers[i] < 0) {
//     num = -1 * numbers[i];
//   }

//   result = result + num;
// }
// console.log(result);

//  sharlar

const elForm = document.querySelector("#form");
const elPurple = document.querySelector(".purple");
const elYellow = document.querySelector(".yellow");
const elInputBox = document.querySelector(".form-box");
const elInput = document.querySelector("#input");
const elBtnZero = document.querySelector("#btn-zero");
const elBtnOne = document.querySelector("#btn-one");
const elBtnTwo = document.querySelector("#btn-two");
const elBtnThree = document.querySelector("#btn-three");
const elBtnFour = document.querySelector("#btn-four");
const elBtnFive = document.querySelector("#btn-five");
const elBtnSix = document.querySelector("#btn-six");
const elBtnSeven = document.querySelector("#btn-seven");
const elBtnEight = document.querySelector("#btn-eight");
const elBtnNine = document.querySelector("#btn-nine");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  elYellow.classList.remove("purple-after");
  elYellow.classList.remove("yellow-after");
  elInputBox.style.cssText = "margin-top: 20px;";
  if (elInput.value == 1) {
    elInputBox.style.cssText = "margin-top: 20px;";
    elPurple.classList.add("purple-after");
    elYellow.classList.remove("yellow-after");
  } else if (elInput.value < 10 && elInput.value >= 0) {
    elYellow.classList.remove("yellow-after");
    elPurple.classList.add("purple-after");
    elInputBox.style.cssText += "background-color: red;";
  } else if (elInput.value >= 10) {
    elYellow.classList.add("yellow-after");
    elPurple.classList.remove("purple-after");
  }
  console.log(elInput.value);
});

elBtnZero.addEventListener("click", () => {
  elInput.value = 0;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnOne.addEventListener("click", () => {
  elInput.value = 1;
  elInputBox.style.cssText = "";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
  elInput.focus();
});
elBtnTwo.addEventListener("click", () => {
  elInput.value = 2;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnThree.addEventListener("click", () => {
  elInput.value = 3;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnFour.addEventListener("click", () => {
  elInput.value = 4;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnFive.addEventListener("click", () => {
  elInput.value = 5;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnSix.addEventListener("click", () => {
  elInput.value = 6;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnSeven.addEventListener("click", () => {
  elInput.value = 7;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnEight.addEventListener("click", () => {
  elInput.value = 8;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
elBtnNine.addEventListener("click", () => {
  elInput.value = 9;
  elInputBox.style.cssText += "background-color: red;";
  elYellow.classList.remove("yellow-after");
  elPurple.classList.add("purple-after");
});
