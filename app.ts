#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold("\n\t Welcome! Let's Get Started with Currency Conversion\n"));


// Define the list of currencies and thier exchange rates
let exchangeRate: any = {
    "USD": 1,          //United States Dollar (United States)
    "PKR": 278.65,     //Pakistani Rupees
    "EUR": 0.94,       // Euro (European Union)
    "AUD": 1.56,       //Australian Dollar (Australia) 
    "CAD": 1.38,       // Canadian Dollar (Canada)
    "GBP": 0.81,       //British Pound Sterling (United Kingdom)
    "JPY": 154.62,     //Japanese Yen (Japan)
    "INR": 75.23,      // Indian Rupee (India)
    "CNY": 6.45,       // Chinese Yuan (China)
    "NZD": 1.68,       // New Zealand Dollar (New Zealand)
    "SAR": 3.75,       // Saudi Riyal (Saudi Arabia)
    // Add more.. .
}

// Print the user to select currencies to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Seleck the currency to convert from:",
        choices: ["USD",  "PKR", "EUR", "AUD", "CAD", "GBP", "JPY", "INR", "CNY", "NZD", "SAR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD",  "PKR", "EUR", "AUD", "CAD", "GBP", "JPY", "INR", "CNY", "NZD", "SAR"] 
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

// Perform currency conversion by using `Formula
let from_amount = exchangeRate[userAnswer.from_currency];
let to_amount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amount

// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Disply the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);




