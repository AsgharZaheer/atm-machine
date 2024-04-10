#! /usr/bin/env node

import inquirer from "inquirer"
 let myBalnace = 20000;
 let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name : "pin",
            type :"number",
            message : "enter your 4 digits pin code"
        }
    ]  
);
if(pinAnswer.pin === myPin)
    {
        console.log("access granted !!!");

let operationAnswer = await inquirer.prompt(
    [
        {
            name: "operation",
            message : " Please select option",
            type : "list",
            choices : ["withdraw","fastcash","checkbalance"]

        }
    ]
);
if (operationAnswer.operation === "withdraw")
    {
        let amountAnswer = await inquirer.prompt(
            [
                {
                    name : "amount",
                    type : "number",
                    message : "Enter amount you want to withdraw"
                }
            ]
        );
        if (amountAnswer.amount > myBalnace)
            {
                console.log("insufficient balance" ); 
            }
        else 
        {
            var withdrawbalance = myBalnace -= amountAnswer.amount;
            console.log(`yourbalance is ${withdrawbalance}`);
        }

        console.log(`your remaining balance is ${myBalnace}`)
    }        
        
    else if (operationAnswer.operation === "checkbalance")
        {
            console.log(`"Your balance is ${myBalnace}"`);
        }
    else if (operationAnswer.operation === "fastcash") 
        {
    let fastcashAmount = await inquirer.prompt(
        [
            {
                name : "fastcash",
                message: "how much you want fast cash",
                type : "list",
                choices : [2000,5000,10000,15000]
            }
        ]
    );
    myBalnace -= fastcashAmount.fastcash;
    console.log(`"your remaining balance is ${myBalnace}` );

             
        }   
    
}
else 
    {
        console.log("Incorrect Pin code");
        
    }


