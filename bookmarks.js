import inquirer from "inquirer";

async function getUserInfo() {
    const questions = [
        {
            type: 'number',
            name: 'name',
            default: '2'
            message: 'Give me a number?',
        },
        {
            type: 'list',
            name: 'color',
            message: 'What is your favorite color?',
            choices: ['Red', 'Blue', 'Green', 'Yellow', 'Other'],
        },
    ];

    const answers = await inquirer.prompt(questions);

    console.log(`Hello, ${answers.name}! Your favorite color is ${answers.color}.`);
}

getUserInfo();