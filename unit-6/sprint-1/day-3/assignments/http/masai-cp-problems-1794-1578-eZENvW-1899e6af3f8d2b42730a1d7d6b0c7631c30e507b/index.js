const fs = require("fs");

// complete the following fubctions

const input=process.argv.splice(2)
let num=input[0]

function isNumber(num) {
 if(typeof(num)=='number'){
    fs.writeFileSync('test.txt',"it is a Number.")
 }else{
    fs.writeFileSync('test.txt',"it is Not a Number.")
 }
}

function isStr(str) {
   if(typeof(str)=='string'){
    fs.writeFileSync('test.txt','it is a String.')
   }else{
    fs.writeFileSync('text.txt','it is not a String.')
   }

}

function isArray(arr) {
   if(Array.isArray(arr)){
    fs.writeFileSync('test.txt','it is a Array.')
   }else{
    fs.writeFileSync('test.txt','it is Not a Array')
   }
}

function isObj(obj) {
 if(typeof(obj)=='object'){
    fs.writeFileSync('test.txt','this is a object.')

 }else{
    fs.writeFileSync('test.txt','this is not a object.')
 }

}



function cls() {
 fs.unlinkSync('test.txt')
}

// Export All the functions

module.exports={isNumber,isStr,isArray,isObj,cls}

