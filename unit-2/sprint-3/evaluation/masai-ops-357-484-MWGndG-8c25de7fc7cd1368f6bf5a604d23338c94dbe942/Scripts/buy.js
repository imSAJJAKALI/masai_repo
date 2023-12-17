// you can write your js code here
let buylist=JSON.parse(localStorage.getItem("buy-list"))||[];
let tbody=document.querySelector("tbody");


function showuser(){
    buylist.forEach((elment,index)=>{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        let td4=document.createElement("td")
        let td5=document.createElement("td")
        let td6=document.createElement("td")
        td1.innerText=elment.name;
        td2.innerText=elment.author;
        td3.innerText=elment.description;
        td4.innerText=elment.date;
        td5.innerText=elment.category;
        td6.innerText=elment.price;

        tr.append(td1,td2,td3,td4,td5,td6);
        tbody.append(tr)
    })
    
    
 

}
showuser()