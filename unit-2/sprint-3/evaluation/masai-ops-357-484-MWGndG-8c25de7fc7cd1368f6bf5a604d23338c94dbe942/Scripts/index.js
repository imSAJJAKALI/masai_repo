let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
        name: form.name.value,
        author: form.author.value,
        description: form.desc.value,
        date: form.added.value,
        category: form.category.value,
        price: form.price.value,
    }

    let formdata=JSON.parse(localStorage.getItem("book-list"))||[];
    formdata.push(obj)
    localStorage.setItem("book-list",JSON.stringify(formdata));
})
console.log("hii")

