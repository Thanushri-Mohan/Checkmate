const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");

// --------------------
// TASK FUNCTIONALITY
// --------------------

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


// --------------------
// STUDY TIMER
// --------------------

let timeLeft = 25 * 60;
let timerInterval = null;

function updateTimer() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const formattedSeconds = seconds.toString().padStart(2, "0");

    timerDisplay.textContent = `${minutes}:${formattedSeconds}`;
}

startButton.addEventListener("click", function () {

    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function () {

        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }

    }, 1000);
});


resetButton.addEventListener("click", function () {

    clearInterval(timerInterval);

    timerInterval = null;
    timeLeft = 25 * 60;

    updateTimer();
});

updateTimer();
