/*Funções implementadas */
const addTask = (event) => {
    event.preventDefault() // método para que o funcionamento normal(Direcionamento de página) do form não aconteça.
    /**
     Eu tenho que criar a seguinte estrutura dinamicamente para aparecer a task:
    <div class="todo">
        <li class="todo-list">
            <button class="btn-completed">
                <i class="fa-solid fa-circle-check icon-btn-completed"></i>    
            </button>
            <button class="btn-todo-remove">
                <i class="fa-solid fa-trash-can icon-btn-trash"></i>    
            </button>
        </li>
    </div>
     */
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")

    const todoLi = document.createElement("li")
    todoLi.classList.add("todo-list")
    todoLi.innerText = `${todoInput.value}` //Adicionando o valor digitado ao texto exibido
    todoInput.value = "" //Resetando o texto do campo digitado após clicar no botão de add

    todoDiv.appendChild(todoLi) //adicionando o li dentro da div

    const trashBtn = document.createElement("button")
    trashBtn.innerHTML = `<i class="fa-solid fa-trash-can icon-btn-trash"></i>`
    trashBtn.classList.add("btn-todo-remove")


    todoDiv.appendChild(trashBtn)//adicionando o button dentro da div

    todoList.appendChild(todoDiv)//adicionando a estrutura completa dentro da minha ul do index dinamicamente

}

const checkAndDelete = (event) => {
    const element1 = document.querySelector(".btn-todo-remove")
    const item = event.target

    if (element1.classList.contains("btn-todo-remove") === true) {
        const itemTodo = item.parentElement.parentElement
        itemTodo.remove()
    }


}

/*Seleção de elementos HTML pelo DOM */
const todoInput = document.getElementById("input-task")
const todoBtn = document.getElementById("btn-task")
const todoList = document.getElementById("list-task")
/*Eventos */
todoBtn.addEventListener("click", addTask)
todoList.addEventListener("click", checkAndDelete)