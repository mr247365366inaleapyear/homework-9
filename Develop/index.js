// array of questions for user
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown')
const axios = require('axios');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'date',
        message: 'What is the date of the project?'.
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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
