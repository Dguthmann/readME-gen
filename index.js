// npm init
//install my dependencies -  inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const genM = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];
// function for creating question for inquirer
function QuestionGen(type, message, name) {
    this.type = type;
    this.message =  message;
    this.name = name;
}
// create all the questions
const myTitle = new QuestionGen("input", "What is your github repo name?", "title");
const myName = new QuestionGen("input", "What is your name?", "name");
const myGithub = new QuestionGen("input", "What is your github name?", "github");
const myLive = new QuestionGen("input", "What is the deployment website (https)?", "livesite");
// Potential change
const myHtml = new QuestionGen("input", "What is your html file name?", "html");
const myCss = new QuestionGen("input", "What is your css file name?", "css");
const myJs = new QuestionGen("input", "What is your js file name?", "js");
const myScreenshot = new QuestionGen("input", "What is your screenshot file name?", "screenshot");
// break up
const myInstall = new QuestionGen("input", "What npms do you need to complete", "npm");
const myLicense = new QuestionGen("input", "What license did you use for this project? (typically MIT)", "license");
const myOverview = new QuestionGen("input", "What is the basic overview of your project?", "overview");
const myTesters = new QuestionGen("input", "What are your test files", "testers");
const myResources = new QuestionGen("input", "What are the resource used that helped you?", "resources");
const myFuture = new QuestionGen("input", "What are your future dev plans?", "future");

// add all the questions to the questions array
questions.push(myTitle, myName, myGithub, myLive, myHtml, myCss, myJs, myScreenshot, myInstall, myLicense, myOverview, myTesters, myResources, myFuture)
//Writing a readme in a markdown file (use my template)
// function that will generate my readme template both in generatemarkdown

// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    console.table(questions);
    // use inquirer to prompt readme questions
    inquirer.prompt(questions).then(function (response) {
        // use answers that come back from inquirer - pass those into my generate readme function
        // function to write README file
        console.log(response);
        fs.writeFile("READMEnew.md", genM.generateMarkdown(response), function (err){
            if (err) {
                throw err;
            }
        });
    })

}


// function call to initialize program
init();
