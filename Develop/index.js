// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
//const { default: Choices } = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your app?',

  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'Table of Contents',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Instructions for install?',
  },
  {
    type: 'input',
    name: 'usage',
    message: "What is your app used for?",
  },
  {
    type: 'input',
    name: 'github',
    message: 'Provide github username?'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Select a license if applicable?',
    choices: ['Apache2.0', 'Mit', 'Boost1.0', 'BSD3', 'BSD2', 'None'],

  },
 {
    type: 'input',
    name: 'Credits',
    message: 'Credits for app?'

  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err)
    } else {
      console.log('success')
    }
  })
}



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      writeToFile('README.md', generateMarkdown(data));
    })
}


// Function call to initialize app
init();
