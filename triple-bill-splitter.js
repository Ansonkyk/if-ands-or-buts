const prompt = require('prompt-sync')();

const paying=Number(prompt('Who is paying'));
const num=Number(prompt('How much does he paid'));
const h=num/3;

if (paying==1){
  console.log("Player 2 and 3 owe Player "+paying+" $"+h);
}else if (paying==2){
  console.log("Player 1 and 3 owe Player "+paying+" $"+h);
}else if (paying==3){
  console.log("Player 1 and 2 owe Player "+paying+" $"+h);
}else{
  console.log("error");
}
