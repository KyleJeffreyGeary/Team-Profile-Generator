const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generatePage = require('./src/generate-page');
const teamMembers = [];
const DIST_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(DIST_DIR, "team.html");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
        },
    ]).then(promptAnswers => {
        console.log(promptAnswers);
        const {name, id, email, officeNumber} = promptAnswers;
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager);
        promptChoiceMenu();
    })
};

const promptChoiceMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choiceMenu',
            message: 'Please select which option you would like to continue with',
            choices: ['add an engineer', 'add an intern', 'finish building your team']

        }])
        .then(userChoice => {
            switch (userChoice.choiceMenu) {
                case 'add an engineer':
                    promptEngineer();
                    break;
                case 'add an intern':
                    promptIntern();
                    break;
                default:
                    finishTeam
            }
        });
};

const promptEngineer = () => {
    console.log(`Add a new Engineer`)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github?'"
        },
    ]).then(promptAnswers => {
        console.log(promptAnswers);
        const {name, id, email, github} = promptAnswers;
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        promptChoiceMenu();
    })
};
const promptIntern = () => {
    console.log(`Add a new Intern`)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Intern's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the Intern go to?"
        },
    ]).then(promptAnswers => {
        console.log(promptAnswers);
        const {name, id, email, school} = promptAnswers;
        const intern = new Intern( name, id, email, school);
        teamMembers.push(intern);
        promptChoiceMenu();
    })
};
const finishTeam = () => {

    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }

    fs.writeFileSync(outputPath, generatePage(teamMembers), "utf-8");
};

promptManager()