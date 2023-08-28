#!/usr/bin/env node

// Packages
import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer"
import chalkAnimation from "chalk-animation";
import sleep from "./timeconvert.js";
import DatePrompt from "inquirer-date-prompt";

// Functions
 welcome()
inquirer.registerPrompt("date", DatePrompt);
 let timeB; // Converted time from A to B

// Animation stop function
async function setTimer(item, seconds) {
    setTimeout(() => {
        let element = item;
        element.stop(); // Animation stops
    }, seconds);
}


async function getUserInfo() {
    const questions = [
        {
            type: 'date',
            name: 'timeA',
            message: 'What is the time for you? (This can be the current time or any time in the future)',
        },
        {
            type: 'input',
            name: 'timezoneA',
            message: 'What is the timezone?'
        },
        {
            type: 'input',
            name: 'timezoneB',
            message: 'What timezone do you want to convert to?'
        }
    ];

    const answers = await inquirer.prompt(questions);
    let timeA = answers.timeA.toString()
    let timezone = timeA.split('')
   timeA = timezone[0]
    console.log(timeA)



}


// Welcome/Intro Function
async function welcome() {
    const title = chalkAnimation.karaoke(
        chalk.black(
            "Timezone converter"
        ))
    await setTimer(title, 2000)
    await sleep(2000) // Sleep function to stagger the code. Imported from timeconvert.js file for some reason, I don't know why I did this
    figlet("Timezone Switch!", function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
    });
    // console.log("hi") // used for debugging
    await sleep(100)
    getUserInfo();

}