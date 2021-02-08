const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

const questions = [
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
        name: "email",
        message: "Please provide your email address"
      },

  ];
  
inquirer
    .prompt(questions)
    .then(function(data){
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function(res) {
            
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
            };
            
          fs.writeFile("README.md", generate(data, githubInfo), function(err) {
            if (err) {
              throw err;
            };
    
            console.log("New README file created with success!");
          });
        });

});

function init() {

}

init();

