const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const tododiv = document.getElementById("todo")
const todolist = document.getElementById("todo-list")
const TODO_KEY = "todos"

const savedTodos = localStorage.getItem(TODO_KEY)


let todoDoc = []

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");    
    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    button.innerText = "X";
    button.addEventListener("click" , deleteTodo);
    todolist.appendChild(li);
}


function deleteTodo(event){
    const li = event.target.parentElement;
    todoDoc =  todoDoc.filter(item => item.id !== parseInt(li.id));
    li.remove();
    saveTodo();
}


function saveTodo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(todoDoc));
}

function submitHandler(event) {
    event.preventDefault();
    const todoitem = {
         "id": Date.now(), 
         "text": todoInput.value
        };
    todoInput.value = ""
    todoDoc.push(todoitem);
    paintTodo(todoitem);
    saveTodo();
}
if (savedTodos !== null ){
    const parseSaveTodos = JSON.parse(savedTodos)
    console.log(parseSaveTodos);
    todoDoc = parseSaveTodos;
    parseSaveTodos.forEach((item) =>{
        paintTodo(item)
    })

}
todoForm.addEventListener("submit" , submitHandler)
