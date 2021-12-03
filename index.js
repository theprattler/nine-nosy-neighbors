// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];
const promptTitle = () => {
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
promptTitle();
