"use strict";

const form = document.querySelector("form");
const input = document.querySelector("#input-field");

const errorMessage = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent = "Please provide a valid email address";

input.value = "";

form.addEventListener("submit", (event) => {
  if (
    input.validity.valueMissing ||
    input.validity.typeMismatch ||
    input.validity.patternMismatch
  ) {
    input.style.setProperty("border-color", "var(--red-400)");
    input.style.setProperty("outline-color", "var(--red-400)");
    input.after(errorMessage);
  } else {
    form.reset();
  }
  event.preventDefault();
});

input.addEventListener("input", (event) => {
  if (
    input.validity.valueMissing ||
    input.validity.typeMismatch ||
    input.validity.patternMismatch
  ) {
    input.style.setProperty("border-color", "var(--red-400)");
    input.style.setProperty("outline-color", "var(--red-400)");
    event.target.after(errorMessage);
  } else if (event.target.nextElementSibling.tagName === "P") {
    input.style.setProperty("border-color", "var(--blue-500)");
    input.style.setProperty("outline-color", "var(--blue-500)");
    event.target.nextElementSibling.remove();
  }
});
