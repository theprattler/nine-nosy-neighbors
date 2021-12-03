// TODO: Include packages needed for this application
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];
const promptTitle = () => {
	
	console.log(`
	========================
	Let's Make a README File
	========================
	`);

	return inquirer
	.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project? (Required)',
			validate: titleInput => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter your project's title!");
					return false;
				}
			}
		}
	])
};

const promptReqSections = () => {

	console.log(`
	=================
	Required Sections
	=================
	`)

	return inquirer
	.prompt([
		{
			type: 'input',
			name: 'description',
			message: 'Give a Description of your project. (Required)',
			validate: descriptionInput => {
				if (descriptionInput) {
					return true;
				} else {
					console.log('Please provide a thorough Description!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Include Installation instructions. (Required)',
			validate: installationInput => {
				if (installationInput) {
					return true;
				} else {
					console.log('You need to include the instructions for Installation!');
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Provide examples of how to Use your app. (Required)',
			validate: usageInput => {
				if (usageInput) {
					return true;
				} else {
					console.log('You did not provide any examples!');
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'contributors',
			message: 'Did anyone else contribute to your project? (Required)',
			default: false
		},
		{
			type: 'input',
			name: 'contribNames',
			message: 'What are their names? (Required)',
			validate: contribNamesInput => {
				if (contribNamesInput) {
					return true;
				} else {
					console.log('You need to give credit to whom it is due!');
					return false;
				}
			}
		}
	]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
/*const writeMdFile = () => {
	return new Promise((resolve, reject) => {
		fs.writeMdFile('./dist/README.md', mdFileContent, err => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: 'README created!'
			});
		});
	});
};*/

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
promptTitle()
	.then(promptReqSections)
	.catch(err => {
		console.log(err);
	});

