// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    {
    type: 'input',
    name: 'username',
    message: "What's your GitHub username?",

    },
    {
    type: 'input',
    name: 'name',
    message: "What's your name?",

    },
    {
    type: 'input',
    name: 'title',
    message: "What's your project's title?",

    },
    {
    type: 'input',
    name: 'email',
    message: "What's your email?",
    
    },
    {
    type: 'input',
    name: 'description',
    message: "Please write a brief description of your project.",
        
    },
    {
    type: 'list',
    name: 'license',
    message: "What license would you like to have for your project?",
    choices: ["MIT", "Apache", "Boost", "None"]
        
    },
        
        
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=>{
        let markdown = generateMarkdown({
            ...responses
        })
        console.log(markdown)
        writeToFile('newreadme.md', markdown)
    })
}

// Function call to initialize app
init();
