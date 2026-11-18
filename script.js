
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// CREATE operation
addBtn.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.type = "button";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.type = "button";

    const buttonDiv = document.createElement("div");

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";

});


// UPDATE and DELETE operations
taskList.addEventListener("click", function (event) {

    // EDIT operation
    if (event.target.classList.contains("edit-btn")) {

        const li = event.target.closest("li");
        const span = li.querySelector("span");

        const updatedTask = prompt(
            "Edit your task:",
            span.textContent
        );

        if (updatedTask !== null && updatedTask.trim() !== "") {
            span.textContent = updatedTask.trim();
        }

    }

    // DELETE operation
    if (event.target.classList.contains("delete-btn")) {

        const li = event.target.closest("li");

        li.remove();

    }

    // MARK AS COMPLETED
    if (event.target.tagName === "SPAN") {

        event.target.classList.toggle("completed");

    }

});
