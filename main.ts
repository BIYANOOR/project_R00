#!/bin/env node
import  inquirer from "inquirer";

 export const answer= await inquirer.prompt
 (
  [
    {
        message:"Enter your first number",
        type:"number",
        name:"firstNumber"
     },
       {message:"Enter your second number",type:"number",name:"secondNumber"},
     {
        message:"Select one of the operator to perform methematical operation",
        type:"list",
        name:"operator",
        choices:["Addition","Multiplication","Division","Substraction"],
    }
 ]
);
//conditional statement
if(answer.operator==="Addition")
    {console.log(answer.firstNumber+answer.secondNumber);}

if(answer.operator==="Multiplication")
    {console.log(answer.firstNumber*answer.secondNumber);}

if(answer.operator==="Division")
    {console.log(answer.firstNumber/answer.secondNumber);}

if(answer.operator==="Substraction")
    {console.log(answer.firstNumber+answer.secondNumber);}
console.log("would you like to perform another calculation")
//else
//{console.log("Please select a valid operator")}

