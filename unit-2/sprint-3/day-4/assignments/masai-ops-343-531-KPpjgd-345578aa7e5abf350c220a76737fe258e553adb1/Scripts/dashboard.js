let userData=JSON.parse(localStorage.getItem("task-list"))||[];
let tbody=document.querySelector("tbody");
tbody.innerHTML=""
let priority_list=JSON.parse(localStorage.getItem("priority-list"))||[];

let count=document.getElementById("task-count")


function showUser(){
    count.textContent=userData.length;
    innerHTML="";
  userData.forEach((user)=>{
    let tr=document.createElement("tr");
    let name=document.createElement("td");
    let description=document.createElement("td");
    let startDate=document.createElement("td");
    let endtDate=document.createElement("td");
    let priority=document.createElement("td");
    let add=document.createElement("td");
    
    add.addEventListener("click",()=>{
        tbody.innerHTML="";
        priority_list.push(user);
        localStorage.setItem("priority-list",JSON.stringify(priority_list))
        userData.splice(user,1);
        localStorage.setItem("task-list",JSON.stringify(userData))
        showUser();
    })




    name.textContent=user.name;
    description.textContent=user.description;
    startDate.textContent=user.startDate;
    endtDate.textContent=user.endtDate;
    priority.textContent=user.priority;
    add.textContent="Add"
     
    tr.append(name,description,startDate,endtDate,priority,add)
    tbody.append(tr)
  })
   
}

showUser();