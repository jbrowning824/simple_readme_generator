//needed to create list of license choices
const licenses = require('./licenses');

//list of questions used for user input
//used as data for mocking api calls
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief discription of what your project does.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should people use your project'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to your project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do others test your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        //Get list of license choices from the license object in licenses.js
        //the below will create a new array of just the full license name
        // for the user to choose from.
        choices: licenses.map(l => l.license),
        default: 'None',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

//export the questions array to be used in other files
module.exports = questions;