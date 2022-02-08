const prompt = require('prompt-sync')();

const pass=1234
const num=Number(prompt('What is your password?'))
if (pass===num){
    console.log("Sucess")
    console.log("Pink")


}else{
    console.log("failure")
}