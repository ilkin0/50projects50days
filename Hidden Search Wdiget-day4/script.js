const search = document.querySelector(".search");
const btnButton = document.querySelector(".btn");
const inputButton = document.querySelector(".input");

btnButton.addEventListener("click", () => {
  search.classList.toggle("ative");
  console.log("reea");
  inputButton.focus();
});
