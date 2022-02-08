const prompt = require('prompt-sync')();

const paying=Number(prompt('Who is paying'));
const num=Number(prompt('How much does he paid'));
const h=num/2;

if (paying==1){
  o=2;
  console.log("Player "+o+" owe Player "+paying+"$"+h);
}else if (paying==2){
  o=1;
  console.log("Player "+o+" owe Player "+paying+"$"+h);
}else{
  console.log("error");
}



