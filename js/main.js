const buttonCTA = document.querySelector(".buttonCTA");
const capturedText = document.querySelector(".inputSearch");
const imputedText = document.querySelector(".imputedText");
const listItem = document.querySelector(".listItem");
const checked = document.querySelector(".checked svg");
const remove = document.querySelector(".remove");

buttonCTA.addEventListener("click", (event) => {
  let capturedTextValue = capturedText.value;
  imputedText.textContent = capturedTextValue;
  listItem.classList.add("active");

  checked.addEventListener("click", () => {
    listItem.style.border = "2px solid #02b553";
    imputedText.style.textDecoration = "line-through";
    imputedText.style.color = "#02b553";
    imputedText.style.fontWeight = "700";

    checked.classList.add("active");
  });

  event.preventDefault();
});

remove.addEventListener("click", () => {
  listItem.classList.remove("active");
});
