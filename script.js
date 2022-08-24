"use strict";

// Assign Variables
const submit = document.querySelector(".submit-btn");
const containerRateCard = document.querySelector(".container");
const containerThanksCard = document.querySelector(".container-thank-you");
const ratingNumberContainer = document.querySelectorAll(".rating-container");
const ratingToBeShowed = document.querySelector(".rating-number");
const ratingNumber = document.querySelectorAll(".rating");
let ratingPicked;
let isRated = false;

// Event for Ratings
for (let i = 0; i < ratingNumberContainer.length; i++) {
  ratingNumberContainer[i].addEventListener("click", function () {
    isRated = true;
    console.log("clicked");
    ratingPicked = ratingNumber[i].textContent;
    console.log(ratingPicked);
  });
}

// Event for Submit button

submit.addEventListener("click", function () {
  if (isRated) {
    console.log("clicked");
    containerRateCard.classList.add("hidden");
    containerThanksCard.classList.remove("hidden");
    ratingToBeShowed.textContent = ratingPicked;
  }
});
