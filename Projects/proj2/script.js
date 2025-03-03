const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");
addTaskBtn.addEventListener("click", () => {
  const input = prompt("What is the task");
  if (!input) return;

  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  taskCard.innerText = input;
  taskCard.setAttribute("draggable", true);
  attachDragEvent(taskCard);

  todoBoard.appendChild(taskCard);
});

const allBoards = document.querySelectorAll("board");
const allItems = document.querySelectorAll(".item");

allItems.forEach(attachDragEvent);

allBoards.forEach((board) => {
  board.addEventListener("dragover", () => {
    const flyingEleent = document.querySelector(".item");
    console.log(`${board} kuch to mere uper se gaya`);

    board.appendChild(flyingEleent);
  });
});

function attachDragEvent(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}
