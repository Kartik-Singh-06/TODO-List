let todos = [];
let taskContainer = document.getElementById("hideDisplay");
let todosContainer = document.getElementById("todos-container");
taskContainer.classList.add("d-none");

addtask = ()=>{
    let textArea = document.getElementById("text-area");
    let dateArea = document.getElementById("date-input");

    let temptodo = {
        task : textArea.value,
        date : dateArea.value,
        completed: false, // Initialize completed state as false
    }
  
    taskContainer.classList.add("d-none");
    todos.push(temptodo);
    render();
    console.log(todos)
}

render=()=>{
  todosContainer.innerHTML = " ";
  todos.map((todo,index)=>{

    let container  = document.createElement("div");
    container.classList.add("container2");

    let task2 = document.createElement("div");
    task2.classList.add('task-2');

    let task1 = document.createElement('div');
    task1.classList.add('task-1');

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = todo.completed;
    // change color after clicked on checkbox shows complete task.
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;// Set the checkbox state based on completed state
      if (todo.completed) {
        container.classList.add("complete");
         } else {
        container.classList.remove("complete");
        }
      render(); // Re-render the list to reflect the updated state
    });
         // Add the "complete" class based on the completed state
    if (todo.completed) {
      container.classList.add("complete");
     }
    
    
    let text = document.createElement("input");
    text.classList.add("task");
    text.value = todo.task;
    text.addEventListener("input", (e) => {
        todo.task = e.target.value}) //modify the task input which you edit in the todo List

    let dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    // formate date style
    const date1 = new Date(todo.date);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const fdate = date1.toLocaleDateString("eng",options);
    dueDate.innerText = fdate;

    let delete1 = document.createElement("button");
    delete1.classList.add('delete');
    delete1.innerHTML = '<i class="ri-delete-bin-6-fill"></i>';

    delete1.addEventListener("click",()=>{
      todos.splice(index,1);
      render(); //re-render refect the update which you change
    });

    todosContainer.appendChild(container);
    container.appendChild(task2)
    task2.appendChild(task1);
    task1.appendChild(checkbox);
    task1.appendChild(text);
    task2.appendChild(dueDate);
    container.appendChild(delete1);

  })
   

}
// + button area show input field 
hide =()=>{
  taskContainer.classList.remove('d-none')
 
}