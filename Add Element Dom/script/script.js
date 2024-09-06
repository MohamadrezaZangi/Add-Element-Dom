const list = document.querySelector(".list");
const addInputText = document.querySelector(".addInputText");
const button = document.querySelector(".addButton");
const remove = document.querySelectorAll(".buttonRemoveLi");

button.addEventListener("click", () => {
  if (addInputText.value === "") return;

  const newListItem = document.createElement("li");
  list.prepend(newListItem);

  const newButtonRemove = document.createElement("button");
  newButtonRemove.innerHTML = "x";
  newButtonRemove.className = "buttonRemoveLi";
  newListItem.prepend(newButtonRemove);

  const newSpanNameList = document.createElement("span");
  newSpanNameList.innerHTML = addInputText.value + " ";
  newListItem.prepend(newSpanNameList);

  addInputText.value = null;
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("buttonRemoveLi")) {
    clickedItem = e.target;
    clickedItem.parentElement.remove();
  }
});
