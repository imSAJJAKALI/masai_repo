let priority_list=JSON.parse(localStorage.getItem("priority-list"))||[];
let tbody=document.querySelector("tbody");
let done_list=JSON.parse(localStorage.getItem("done-list"))||[];

function showUser(){

  priority_list.forEach((user)=>{
    let tr=document.createElement("tr");
    let name=document.createElement("td");
    let description=document.createElement("td");
    let startDate=document.createElement("td");
    let endtDate=document.createElement("td");
    let priority=document.createElement("td");
    let addtodone=document.createElement("td");
    addtodone.addEventListener("click",()=>{
        tbody.innerHTML=""
        done_list.push(user);
        localStorage.setItem("done-list",JSON.stringify(done_list));

        priority_list.splice(user,1);
        localStorage.setItem("priority-list",JSON.stringify(priority_list));
        showUser();

    })

    name.textContent=user.name;
    description.textContent=user.description;
    startDate.textContent=user.startDate;
    endtDate.textContent=user.endtDate;
    priority.textContent=user.priority;
    addtodone.textContent="Done"

   

    tr.append(name,description,startDate,endtDate,priority,addtodone)
    tbody.append(tr);
  })

}

showUser();