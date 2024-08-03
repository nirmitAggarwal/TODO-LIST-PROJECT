document.getElementById("add-button").addEventListener("click", function () {
  const taskText = document.getElementById("todo-input").value;
  if (taskText === "") return;

  const listItem = document.createElement("li");
  listItem.className = "todo-item";
  listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;
  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  document.getElementById("todo-list").appendChild(listItem);
  document.getElementById("todo-input").value = "";
});

function deleteTask(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
