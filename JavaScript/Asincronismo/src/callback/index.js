// function sum(num1, num2){
// return num1 + num2
// }

const sum = (num1,num2) => num1 + num2

function calc ( num1, num2, callback){ // esta funciona  recibe otra funciona la cual llamamos callback
  return callback(num1, num2);
}
console.log (calc(2,42,sum));

function date(callback ){
  console.log(new Date)
  setTimeout(() => {
    let date = new Date;
    callback(date)
  }, 3000);
}
function printDate(dateNow){
 console.log (dateNow)
}
date(printDate)
