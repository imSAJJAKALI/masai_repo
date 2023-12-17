function studentData(firstName,lastName,age ,marksArray, ...hobbies) {
  let obj={}
  obj.fullName = `${firstName} ${lastName}`
  obj.age=age;
  obj.hobbies=hobbies;
  
  obj.getInfo=()=>{
    return `${firstName} ${lastName}'s age is ${age}.`
  }
  obj.getResult=()=>{
    let total=0;
    let num=marksArray.length;
   for(let k of marksArray){
      total+=k;
   }
   let avg=total/num;
   if(avg>50){
    return 'Result: PASS'
   }else{
    return 'Result: FAIL'
   }
  }
  return obj
}
  
studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');

export {
  studentData
}