const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project please?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "installation",
      message: "Provide installation instructions please?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the project's usage"
      },
      {
        type: "input",
        name: "test",
        message: "Provide the project tests please"
      },
      {
        type: "input",
        name: "repo",
        message: "What is your repository link?"
      }

  ]);
}