// Problem 1. complete the below function


// let obj={}
//   obj.fullName = `${firstName} ${lastName}`
//   obj.age=age;
//   obj.hobbies=hobbies;
  
//   obj.getInfo=()=>{
//     return `${firstName} ${lastName}'s age is ${age}.`
//   }
//   obj.getResult=()=>{
//     let total=0;
//     let num=marksArray.length;
//    for(let k of marksArray){
//       total+=k;
//    }
function school(schoolName,location,established,...subjects) {
 let obj={}
 obj.name=`${schoolName}`
 obj.getGeneralInfo=()=>{
  return `${schoolName} was established in ${established} at ${location}.`
 }
 obj.geSubjectInfo=()=>{
  return `At ${schoolName} we teach ${subjects[1]}, ${subjects[2]}, ${subjects[3]}.`
 }
 return obj

}
let ans=school('ABC School', 'New Delhi', 1991, 'English', 'Hindi', 'Mathematics');
console.log(ans)

// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  let obj={}
  obj.productId=item.idMeal
  obj.productTitle=item.strMeal
  


  //acc.push(obj)
  return acc;
}, []);
console.log(areasDirectory)
// { productId:"52768", productTitle:"Apple Frangipan Tart", Category:"Dessert", Area:"British" },

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];

let outputArray = ['Your solution here.']

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
