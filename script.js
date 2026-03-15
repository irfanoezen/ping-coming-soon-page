"use strict";

const form = document.querySelector("form");
const input = document.querySelector("#input-field");

const errorMessage = document.createElement("p");
errorMessage.textContent = "Please provide a valid email address";

form.addEventListener("submit", (event) => {
  if (input.validity.valueMissing || input.validity.typeMismatch || input.validity.patternMismatch) {
    input.after(errorMessage);
  }
  event.preventDefault();
});

input.addEventListener("input", (event) => {
  if (input.validity.valueMissing || input.validity.typeMismatch || input.validity.patternMismatch) {
    event.target.after(errorMessage);
  } else if (event.target.nextElementSibling.tagName === "P") {
    event.target.nextElementSibling.remove();
  }
});
