import "./styles.css";

let walletBalance = 5000;

let payAmt = document.getElementById("pay-amt");
let balanceAmt = document.getElementById("balance-amt");
let payButton = document.getElementById("pay-btn");
let feedbackText = document.getElementById("feedback-text");
let payAmount=payAmt.value;
balanceAmt.innerText=walletBalance;
function makePayment(payAmount){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       if(walletBalance>=payAmount){
         resolve('payment succesful')
       }else{
         reject('insuficant balance')
       }
    },2000)
  })
}
payButton.addEventListener('click',(e)=>{
  feedbackText.innerText='loding'
  makePayment(payAmt.value).then((mesage)=>{
    feedbackText.innerText=mesage
    balanceAmt.innerText=walletBalance-payAmt.value;
  }).catch((mesage)=>{
    feedbackText.innerText=mesage
  })
})


// set the text content of balanceAmt to be the wallet balance.

// write a function called makePayment that returns a promise.
// promise resolves after 2 seconds if the payAmount is >= balanceAmt
// promise rejects after 2 seconds if the payAmount is < balanceAmt
// the makePayment function should take in amt which is used
// to decide if the payment passes or fails.

// On click of payButton invoke makePayment()
// in case the returned promise resolves, the feedback text & walletBalance is updated.
// in case the returned promise rejects, the feedback text is updated.
