
//script registration page...........

let uniqueId=document.getElementById("unqid")
let fname= document.getElementById("fname")
let age= document.getElementById("age")
// let vaccine=document.getElementById("vaccine")
let submit=document.getElementById("submit")
let priorityData=document.getElementsByName("priority")
let destination=document.getElementsByName("destination")
let vaccine=document.getElementById("vaccine")

let vaccinationData= JSON.parse(localStorage.getItem("vaccineData"))||[]
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let obj={}
    obj.uniqueid=uniqueId.value;
    obj.name=fname.value;
    obj.age=age.value;
    obj.vaccine=vaccine.value;
    //destination
    for(var i=0; i<destination.length; i++){
        if(destination[i].checked){
            obj.destination=destination[i].value;
        }
    }
    //priority
    for(let i=0; i<priorityData.length; i++){
        if(priorityData[i].checked){
            obj.priority=priorityData[i].value;
        }
    }
    window.location.href="dashboard.html"
    vaccinationData.push(obj)
    localStorage.setItem("vaccineData",JSON.stringify(vaccinationData))

})