document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('#create-task-form')
let newEnteredTask = document.getElementById('new-task-description')

  const newTask = (event) =>{
    event.preventDefault()
    let newTaskElement = document.createElement('li')
    const listOfTasks = document.querySelector("#tasks")
    listOfTasks.append(newTaskElement)
    newTaskElement.innerText = newEnteredTask.value
  }
  form.addEventListener("submit" , newTask)
})

