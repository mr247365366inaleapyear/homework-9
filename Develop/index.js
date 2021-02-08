const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([    
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
      },
      {
        type: "input",
        name: "badge",
        message: "Provide badge links that you want"
      },
      {
        type: "input",
        name: "license",
        message: "Please provide your badge license"
      },
      {
        type: "input",
        name: "contribution",
        message: "Please provide your contributing parties"
      },
      {
        type: "input",
        name: "email",
        message: "Please provide your email address"
      },

  ]).then(answers => {
      const { name, location, title, description, github, installation, usage, test, repo, badge, license, contribution, email} = answers;

  })
}

