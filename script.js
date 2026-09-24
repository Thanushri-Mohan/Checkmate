const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    listItem.addEventListener("click", function () {
        listItem.style.textDecoration = "line-through";
    });

    taskList.appendChild(listItem);

    taskInput.value = "";
});
