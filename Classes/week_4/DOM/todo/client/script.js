async function addTask(){
  const task = document.getElementById("task").value;
  const time = document.getElementById("time").value;
  const list = document.querySelector(".todoList")
  // console.log(task,time)
  const response = await fetch(`http://localhost:3000/todo/addtask?task=${task}&time=${time}`,{method:"POST"});
  const text = await response.text();
  console.log(task)
  if(text){
    const listTask = document.createElement('div');
    listTask.innerHTML = task;
    const listTime = document.createElement('div');
    listTime.innerHTML = time;
    const listButton = document.createElement('button');
    listButton.innerHTML = "Not Complete";
    listButton.setAttribute('onclick',`doneButton(${task})`)
    listButton.setAttribute('id',task)
    list.appendChild(listTask);
    list.appendChild(listTime);
    list.appendChild(listButton);
  }
  else {
    list.innerHTML = "Task not added!!"
  }
}

function doneButton(element){
  console.log(element)
  const id = element.id;
  console.log(id)
  const button = document.getElementById(`${id}`).innerHTML = "Done"
}