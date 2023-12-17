// Write code related to Board page here
let todosData = JSON.parse(localStorage.getItem("todos"))||[]

let todoData = document.getElementById('todo')
todosData.forEach((element)=>{
    let div = document.createElement("div")
    let name = document.createElement("h3")
    name.innerText=element.name;
    let description = document.createElement("p")
    description.innerText=element.description;
    let addDate = document.createElement("p")
    addDate.innerText=element.addDate;
    let deadLine = document.createElement("p")
    deadLine.innerText = element.deadLine;
    let priority = document.createElement("p")
    priority.innerText= element.priority;
    let todOption = document.createElement("select")
    todOption.innerHTML=`
    
    <option value="todo" id="opt1">todo</option>
    <option value="progress" id="opt2">progress</option>
    <option value="stuck" id="opt3">stuck</option>
    <option value="copleted" id="opt4">completed</option>
    `
    let progress = document.getElementById("opt2")
   
    let stuck = document.getElementById("opt3")
    let copleted = document.getElementById("opt4")
    let delButton = document.createElement("button")
    delButton.innerText="Delete"


    div.append(name,description,addDate,deadLine,priority,todOption,delButton)
    todoData.append(div)
})