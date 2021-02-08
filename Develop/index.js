// array of questions for user
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown')
const axios = require('axios');
const generateMarkdown = require("./utils/generateMarkdown");
const { userInfo } = require("os");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Provide repo link',
    },
    {
        type: 'input',
        name: 'process',
        message: 'What were your methods of completing the project?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file successfully generated!!!!!")
    })
}

// function to initialize program
function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thanks for your responses! Getting the Github information now");

        console.log("Generating your README next")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
        await writeFileSync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }

};

// function call to initialize program
init();
