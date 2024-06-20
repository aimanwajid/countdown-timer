#! /udr/bin/env node
import inquirer from "inquirer"
import {differenceInSeconds} from "date-fns";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please enter the amount of second",
    validate: (input)=>{
        if(isNaN(input)){
            return "please enter valid number"
        }else if (input > 60){
            return "seconds must be in 60"
        }else{
            return true;
        }
    }
        
});
let input = res.userInput
function startTime(val:number){
     const intTime = new Date().setSeconds(new Date().getSeconds() + val);
     const intervalTime = new Date(intTime);
     setInterval((()=>{
      const currTime =new Date()
      const timDiff = differenceInSeconds(intervalTime, currTime);
      if (timDiff <= 0){
        console.log("Timer has expired");
        process.exit()
      }
      const min = Math.floor((timDiff%(3600*24))/3600)
      const sec = Math.floor(timDiff%60)
      console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
     }),100)

     
}
startTime(input)