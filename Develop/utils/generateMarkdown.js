// create 'table of contents' if needed
const renderToc = tocSection => {
  if (!tocSection) {
    return '';
  }
  return `
  ## Table of Contents
  ${tocSection}
  `;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
const renderLicenseSection = license => {
  if (!license) {
    return '';
  }
  return `
  ## License
  ${license}
  `;
};

// create "contributors" section if needed
const renderContrib = contribSection => {
  if (!contribSection) {
    return '';
  }
  return `
  ## Contributors
  ${contribSection}
  `;
};

// create "tests" section if needed
const renderTests = testSection => {
  if (!testSection) {
    return '';
  }
  return `
  ## Tests
  ${testSection}
  `;
};

// create "questions" section if needed
const renderQuestions = questionSection => {
  if (!questionSection) {
    return '';
  }
  return `
  ## Questions
  ${questionSection}
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${renderToc()}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection()}

${renderContrib()}

${renderTests()}

${renderQuestions()}`;
};

module.exports = generateMarkdown;
