import generarfizzbuzz from "./fizzbuzz.js";

const number = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fbNumber = Number.parseInt(number.value);

  div.innerHTML = "<p>" + generarfizzbuzz(fbNumber) + "</p>";
});
