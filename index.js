// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // using file system writeFile method to rewrite the REAMME.md everytime the function is ran
    fs.writeFile(
        fileName, 
        generateMarkdown( data ), 
        (err) =>
        err ? console.error(err) : console.log('Success!')
    )};



// TODO: Create a function to initialize app
function init() {
    inquirer
        // prompts user using questions array we locally required
        .prompt(questions)

        // then uses the answers as data to use in our custom writeToFile function
        .then((answers) => {
            
          // names file and selects where it is saved, gives data parameter set as users answers from prompt
            writeToFile('./output/README.md', answers);
            
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
        console.log(error)
    } else {
      // Something else went wrong
        console.log(error)
    };
});
};

// Function call to initialize app
init();