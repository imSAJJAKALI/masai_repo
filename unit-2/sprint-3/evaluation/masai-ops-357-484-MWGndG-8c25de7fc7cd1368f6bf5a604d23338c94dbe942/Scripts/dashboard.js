// you can write your js code here
let formdata=JSON.parse(localStorage.getItem("book-list"))||[];
let buylist=JSON.parse(localStorage.getItem("buy-list"))||[];
let bookmarklist=JSON.parse(localStorage.getItem("bookmark-list"))||[];


let tbody=document.querySelector("tbody");
let count=document.getElementById("book-count");


function showuser(){
    
    count.innerText=formdata.length;
 innerHTML="";
 formdata.forEach((element,index)=>{
        innerHTML="";
        
        
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let td8=document.createElement("td");

        td1.innerText=element.name;
        td2.innerText=element.author;
        td3.innerText=element.description;
        td4.innerText=element.date;
        td5.innerText=element.category;
        td6.innerText="Buy";
        td7.innerText="Add"
        td6.style.backgroundColor="green"
        td7.style.backgroundColor="red"
        td8.innerText=element.price;

        td6.addEventListener("click",()=>{
            tbody.innerHTML=""
            buylist.push(element)
            localStorage.setItem("buy-list",JSON.stringify(buylist));
            formdata.splice(element,1);
            localStorage.setItem("book-list",JSON.stringify(formdata));
            showuser()
        })
        td7.addEventListener("click",()=>{
            tbody.innerHTML=""
            bookmarklist.push(element)
            localStorage.setItem("bookmark-list",JSON.stringify(bookmarklist));
            formdata.splice(element,1);
            localStorage.setItem("book-list",JSON.stringify(formdata));
            showuser()
        })

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        tbody.append(tr);

    })

}
showuser()