function job(delay, value) {
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     resolve(value)
   },delay)
  })
}

var results=job(30,20)

export { job, results };
