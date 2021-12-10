const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

const promptSections = projectData => {
	
	console.log(`
	========================
	Let's Make a README File
	========================
	`);

	if (!projectData) {
		projectData = [];
	}

	return inquirer
	.prompt([
		{
			type: 'input',
			name: 'username',
			message: 'What is your GitHub username? (Required)',
			validate: usernameInput => {
				if (usernameInput) {
					return true;
				} else {
					console.log("Don't be so modest!");
					return false;
				}
			}
		},
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
		},
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
			name: 'confirmContrib',
			message: 'Would you like to add a Contributing section?',
			default: true
		},
		{
			type: 'input',
			name: 'contribGuidelines',
			message: 'What guidelines do you want to add for developers who are interested in contributing to your project?',
			when: ({ confirmContrib }) => {
				if (confirmContrib) {
					return true;
				} else {
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmLicense',
			message: 'Would you like to include a license?',
			default: false
		},
		{
			type: 'list',
			name: 'license',
			message: 'Which license would you like?',
			choices: [
				'MIT', 'GPLv3', 'AGPLv3', 'LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'none'
			],
			default: 'MIT',
			when: ({ confirmLicense }) => {
				if (confirmLicense) {
					return true;
				} else {
					return false;
				}
			}
		},
		{
			type: 'input',
			name: 'email',
			message: 'Now enter your email address: (Required)',
			validate: (emailInput) => {
				if (emailInput) {
					return true;
				} else {
					console.log("Contact information is important!");
					return false;
				}
			}
		},
		{
			type: 'confirm',
			name: 'confirmTests',
			message: "Lastly, would you like to provide any written tests for your app, including examples on how to run them?",
			default: false
		},
		{
			type: 'input',
			name: 'tests',
			message: 'Insert tests here:',
			when: ({ confirmTests }) => {
				if (confirmTests) {
					return true;
				} else {
					return false;
				}
			}
		}
	])
	.then(readmeData => {
		projectData.push(readmeData);
		return projectData;
	});
};

const writeFile = readmeData => {
	return new Promise((resolve, reject) => {
		fs.writeFile('./dist/README.md', readmeData, err => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: 'README created at "./dist/README.md"!'
			});
		});
	});
};

promptSections()
	.then(projectData => {
		console.log(generateMarkdown(projectData));
		return generateMarkdown(projectData);
	})
	.then(pageMd => {
		console.log(writeFile(pageMd));
		return writeFile(pageMd);
	})
	.then(writeMdFileResponse => {
		console.log(writeMdFileResponse);
	})
	.catch(err => {
		console.log(err);
	});