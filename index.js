#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        message: chalk.blue("Write your sentence to count words"),
        type: "input",
    },
]);
const sentence = answer.Sentence.trim().split(" ");
// Print the array to the world to the console
console.log(chalk.cyanBright.bold(`Total words are: ${sentence.length}`));
