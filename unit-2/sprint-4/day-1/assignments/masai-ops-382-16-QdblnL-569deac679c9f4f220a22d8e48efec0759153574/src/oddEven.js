function getData(data) {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data==""){
                reject("error")
               }
           if(data%2==0){
            resolve("even")
          
           if(data%2==1){
            resolve("odd")
           }
        }
          
        },4000)
    
    }) 
    return promise;
}
let ans=getData(20)
ans.then(()=>{
    console.log(ans)
})
.catch(()=>{
    console.error("error")
})

export default getData
