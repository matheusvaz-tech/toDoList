const buttonCTA = document.querySelector(".buttonCTA");
const capturedText = document.querySelector(".inputSearch");

buttonCTA.addEventListener("click", (event) => {
  const listItems = document.querySelector(".listItems");
  const item = document.createElement("li");

  const check = document.createElement("svg");
  const toDo = document.createElement("p");
  const remove = document.createElement("svg");

  check.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#787491" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.563 9.75C12.9927 11.1342 11.8114 12.9047 11.136 14.886L9 12.75" stroke="#787491" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  toDo.innerText = capturedText.value;
  check.style.height = "24px";
  remove.style.height = "24px";
  remove.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 18L18 6M6 6L18 18" stroke="#FF497D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  check.style.cursor = "pointer";
  item.style.alignItems = "center";
  item.style.position = "relative";
  remove.style.position = "absolute";
  remove.style.right = "24px";
  remove.style.cursor = "pointer";

  item.appendChild(check);
  item.appendChild(toDo);
  item.appendChild(remove);

  listItems.appendChild(item);

  remove.onclick = function () {
    item.remove();
  };

  check.addEventListener("click", function () {
    check.classList.toggle("active");
    toDo.classList.toggle("active");
  });

  capturedText.value = "";

  event.preventDefault();
});
