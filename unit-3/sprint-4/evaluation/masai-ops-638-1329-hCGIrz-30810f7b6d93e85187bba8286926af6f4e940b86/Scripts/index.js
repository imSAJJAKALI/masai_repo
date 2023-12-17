// // Write code related to Home page here

// console.log("working fine....")
// let todosData = JSON.parse(localStorage.getItem("todos"))||[]

// let fname = document.getElementById('name')
// let description = document.getElementById('desc')
// let addDate = document.getElementById('addDate')
// let deadLine =  document.getElementById('deadline')
// let priority =  document.getElementById('priority')
// let submit = document.getElementById('submit')




// submit.addEventListener('click',(e)=>{
//   e.preventDefault()
//   let obj={}
//   obj.name=fname.value;
//   obj.description=description.value;
//   obj.addDate= addDate.value
//   obj.deadLine= deadLine.value
//   obj.priority=  priority.value

//   todosData.push(obj)
//   localStorage.setItem("todos",JSON.stringify(todosData))

// })

let userData=JSON.parse(localStorage.getItem("todos"))||[]
let  userForm=document.querySelector("form")
userForm.addEventListener("submit",submitUser)
function submitUser(e){
e.preventDefault();
let user={
    name:userForm.name.value,
   description:userForm.desc.value,
   startDate:userForm.addDate.value,
   endDate:userForm.deadline.value,
   priority:userForm.priority.value,
 

}
  userData.push(user)
  localStorage.setItem("todos",JSON.stringify(userData))

console.log(userData)
}


