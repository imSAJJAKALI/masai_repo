function getData(data) {
   let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(data%2==0){
            resolve('even')
        }
    },4000)
    setTimeout(()=>{
       if(data%2==1){
        resolve('odd')
       }
    },3000)
    if(data == 'string'){
        reject('error')
    }
   })
   return promise
}
let ans = getData('srk')
ans.then((res)=>{
    console.log(res)
})
ans.catch((err)=>{
    console.log('error')
})

export default getData
