"use strict";

const taskInput = document.querySelector(".taskInput");
const taskList = document.querySelector(".taskList");
const taskButton = document.querySelector(".taskButton");

const tasksArray = [];

const newTask = () => {
  const taskValue = taskInput.value;
  tasksArray.push(taskValue);
  printTasks();
};

const printTasks = () => {
  taskList.innerHTML = "";
  for (let i = 0; i < tasksArray.length; i++) {
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    const newTask = document.createTextNode(tasksArray[i]);
    newLi.appendChild(newTask);
    newLi.appendChild(newButton);
    newLi.classList.add("list-group-item");
    newLi.classList.add("align-items-center");
    newLi.classList.add("d-inline-flex");
    newLi.classList.add("justify-content-between");
    newButton.classList.add("btn-close");
    newButton.onclick = function (ev) {
      removeTask(ev);
    };
    newButton.id = tasksArray[i];
    taskList.appendChild(newLi);
  }
};

const removeTask = (ev) => {
  const task = ev.target.id;
  const index = tasksArray.indexOf(task);
  tasksArray.splice(index, 1);
  printTasks();
};

taskButton.addEventListener("click", newTask);
