// array of questions for user
const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter a project title"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter your project's description here"
    },
    {
        type: "input",
        name: "table",
        message: "Please enter your Table of Contents here"
    },
    {
        type: "input",
        name: "install",
        message: "What command(s) should you use to install dependencies?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter project Usage information here"
    },
    {
        type: "list",
        name: "license",
        message: "Which license does this project use?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "contribute",
        message: "Who's working on this project?"
    },
    {
        type: "input",
        name: "test",
        message: "What methods or apps were used for testing this project?"
    },
    {
        type: "input",
        name: "question",
        message: "Enter FAQ section, along with your GitHub username or repo, and e-mail here"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(response){

        let markdown = `# ${response.title}

## Description
${response.description}

## Table of Contents
${response.table}

## Installation
${response.install}

## Usage
${response.usage}

## License
${response.license}

## Contributions
${response.contribute}

## Testing & Debugging
${response.test}

## Questions
${response.question}`

        writeToFile("NewReadme.md", markdown)

    })
    
}

// function call to initialize program
init();
