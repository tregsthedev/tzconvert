#!/usr/bin/env node

import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer"
import ChalkAnimation from "chalk-animation";
import chalkAnimation from "chalk-animation";

const sleep = ms => new Promise(r => setTimeout(r, ms));

const timer = secs => new Promise(a => setTimeout(a, secs))

welcome()

async function setTimer(item, seconds) {
    setTimeout(() => {
        item.stop(); // Animation stops
    }, seconds);
}

async function welcome() {
    const title = chalkAnimation.karaoke(chalk.bgYellowBright(chalk.black(
        "Timezone converter"
    )))
    await sleep(1000)
await setTimer(title, 2000)
    await sleep(2000)
    console.log("hi")


}

