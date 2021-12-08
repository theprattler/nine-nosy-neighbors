// create 'table of contents' if needed
const renderToc = tocSection => {
  if (!tocSection) {
    return '';
  }
  return `
  ## Table of Contents

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
  ${data.license}
  `;
};

// create "contributors" section if needed
const renderContrib = contribSection => {
  if (!contribSection) {
    return '';
  }
  return `
  ## Contributors

  `;
};

// create "tests" section if needed
const renderTests = testSection => {
  if (!testSection) {
    return '';
  }
  return `
  ## Tests
  
  `;
};

// create "questions" section if needed
const renderQuestions = questionSection => {
  if (!questionSection) {
    return '';
  }
  return `
  ## Questions

  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description
    ${data.description}

    ${renderToc()}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ${renderLicenseSection(license)}

    ${renderContrib(contributors)}

    ${renderTests(tests)}

    ${renderQuestions(questions)}

  `;
};

module.exports = generateMarkdown;
