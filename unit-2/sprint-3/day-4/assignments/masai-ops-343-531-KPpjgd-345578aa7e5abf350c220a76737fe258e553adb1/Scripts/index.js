
let userData=JSON.parse(localStorage.getItem("task-list"))||[];
let userForm=document.querySelector("form");
userForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    let user={
        name: form.name.value,
        description: form.desc.value,
        startDate: form.start.value,
        endtDate: form.start.value,
        priority: form.priority.value,

    }
    userData.push(user);
    localStorage.setItem("task-list",JSON.stringify(userData));

})