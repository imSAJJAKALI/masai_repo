console.log('working fine......')

let Data= JSON.parse(localStorage.getItem("vaccineData"))||[]
let vaccinetedData= JSON.parse(localStorage.getItem("vaccinetedData"))||[]
 let tbody=document.getElementById("vaccineHere")
  
  showUser(Data)
   function showUser(Data){
 
      tbody.innerHTML=null
      Data.forEach((ele,index)=>{
        let row= document.createElement('tr')
        let unq=document.createElement("td")
        unq.innerText=ele.uniqueid;
        let name=document.createElement("td")
        name.innerText=ele.name;
        let age=document.createElement("td")
        age.innerText=ele.age;
        let destination=document.createElement("td")
        destination.innerText=ele.destination;
        let priority=document.createElement("td")
        priority.innerText=ele.priority;
        let vaccine=document.createElement("td")
        vaccine.innerText=ele.vaccine;
       let deleteBtn=document.createElement('button')
       deleteBtn.innerText="Delete"
       let vaccineted=document.createElement('button')
       vaccineted.innerText="vaccinetd"
       deleteBtn.addEventListener('click',(e)=>{
              e.preventDefault()
              Data.splice(index,1)
              localStorage.setItem('vaccineData',JSON.stringify(Data))
              showUser(Data)
       })
       vaccineted.addEventListener('click',(e)=>{
         e.preventDefault()
         vaccinetedData.push(ele)
         localStorage.setItem('vaccinetedData',JSON.stringify(vaccinetedData))
         Data.splice(index,1)
         localStorage.setItem('vaccineData',JSON.stringify(Data))
         showUser(Data)
        
       })

        row.append(unq,name,age,destination,priority,vaccine,deleteBtn,vaccineted)
       tbody.append(row)
       
    })     
   }
  
