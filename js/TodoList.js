TodoListBox = document.querySelector(".todolist");
TodoListUl = document.querySelector(".todolist ul");
TodoListForm = document.querySelector(".todolistForm");
TodoListInput = document.querySelector(".todolistForm input");
let todoes=[];
let nickname;

LoginCheck();
Todoinit();
function LoginCheck() {
    if (localStorage.getItem("Login") === null)
    {
        TodoListBox.hidden=true;
    }
    else {
        TodoListBox.hidden=false;
    }
    nickname = localStorage.getItem("Login");
}

function SpawnTodo(event) {
    event.preventDefault();
    let TodoObj = {
        id : new Date().getTime(),
        value : TodoListInput.value
    }
    todoes.push(TodoObj);
    console.log("dd");
    localStorage.setItem(nickname, JSON.stringify(todoes));

    SpawnLi(TodoObj);
    TodoListInput.value = "";
}

function TodoDelete(event) {
    event.preventDefault();
    let tm = JSON.parse(localStorage.getItem(nickname));
    let result = tm.filter((t) => {
        return String(t.id) !== String(event.path[1].id)
    })
    todoes = result;
    localStorage.setItem(nickname, JSON.stringify(todoes));
    event.path[1].remove();
}
function SpawnLi(obj) {
    let doBox = document.createElement("li");
    let doText = document.createElement("span");
    let btn = document.createElement("button");
    btn.addEventListener("click", TodoDelete);
    doBox.id = obj.id;
    doText.innerText = obj.value;
    btn.innerText = "❌"
    doBox.appendChild(doText);
    doBox.appendChild(btn);
    TodoListUl.appendChild(doBox);
}
function Todoinit() {
    TodoListUl.innerHTML = null;
    if (localStorage.getItem(nickname) === null ) {return};
    JSON.parse(localStorage.getItem(nickname)).forEach(element => {
        SpawnLi(element);
    });
}
TodoListForm.addEventListener("submit", SpawnTodo);