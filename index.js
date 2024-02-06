// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require('fs');
const questions = require('./utils/questions');
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Successfully wrote README file:', fileName);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // If 'None' is chosen for license, set it to an empty string
    if (answers.license === 'None') answers.license = '';
      const markdownContent = generateMarkdown(answers);
      console.log(markdownContent);
    writeToFile('README.md', markdownContent);
  });
}

// Function call to initialize app
init();
