// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./generateMarkdown.js')



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide a short description of your project.',
    name: 'description',
  },
  {
    type: 'list',
    message: 'Select a lisence for your project:',
    name: 'lisence',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Unlicensed', 'None'],
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contributing',
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const mdContent = markDown(data);

  fs.writeFile(fileName, mdContent, (err) => {
    err ? console.log(err) : console.log('Generating README...')
  })


}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data => {
      writeToFile('README.md', data);
    }))
}

// Function call to initialize app
init();
