"use strict";

const submitBtn = document.querySelector("#submit-btn");
const input = document.querySelector("#input-field");
const errorMessage = document.createElement("p");

input.addEventListener("input", (event) => {
  if (input.validity.valueMissing) {
    errorMessage.textContent = "Please provide an email address";
    event.target.after(errorMessage);
  } else if (input.validity.typeMismatch || input.validity.patternMismatch) {
    errorMessage.textContent = "Please provide a valid email address";
    event.target.after(errorMessage);
  } else {
    if(event.target.nextElementSibling.tagName === "P") {
      event.target.nextElementSibling.remove();
    }
  }
});
