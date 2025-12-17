let todos = []

function addTodo(){
    const input = document.getElementById("todoInput")
    const text = input.value.trim();
      
    if(text === "") return 

    todos.push({
        id:Date.now(),
        text:text 
    })
    input.value = ""
    renderTodos();
}

function deleteTodo(id){
      todos = todos.filter(t => t.id !== id);
      renderTodos();
}

function renderTodos(){
    const list = document.getElementById("todoList");
    list.innerHTML="";
    todos.forEach(todo => {
        list.innerHTML += `
        <li>
        ${todo.text}
        <button onClick="deleteTodo(${todo.id})" >Delete </button>
        </li>
        `
    })
}