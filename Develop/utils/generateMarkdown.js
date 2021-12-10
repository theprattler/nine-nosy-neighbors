// create 'table of contents' if needed
const renderTOC = TOC => {
  if (!TOC) {
    return '';
  }
  return `
  ## Table of Contents
  ${TOC}
  `;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseBadge => {
  if (licenseBadge === 'none') {
    return '';
  } else if (licenseBadge === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseBadge === 'GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseBadge === 'AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (licenseBadge === 'LGPLv3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (licenseBadge === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseBadge === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
const renderLicenseSection = licenseSection => {
  if (licenseSection === 'none') {
    return '';
  }
  return `## License
${licenseSection}`;
};

// create "contributors" section if needed
const renderContrib = contribSection => {
  if (!contribSection) {
    return '';
  }
  return `## Contributors
${contribSection}`;
};

// create "tests" section if needed
const renderTests = testSection => {
  if (!testSection) {
    return '';
  }
  return `## Tests
${testSection}`;
};

// create "questions" section if needed
const renderQuestions = questionSection => {
  if (!questionSection) {
    return '';
  }
  return `## Questions
If you have any questions, feel free to contact me:
${questionSection}`;
};

module.exports = generateMarkdown => {
  console.log(generateMarkdown[0]);

  

  return `# ${generateMarkdown[0].title} ${renderLicenseBadge(generateMarkdown[0].license)}

${renderTOC()}

## Description
${generateMarkdown[0].description}

## Installation
${generateMarkdown[0].installation}

## Usage
${generateMarkdown[0].usage}

${renderLicenseSection(generateMarkdown[0].license)}

${renderContrib(generateMarkdown[0].contribNames)}

${renderTests(generateMarkdown[0].tests)}

## Questions
If you have any questions, feel free to contact me:
* GitHub Profile: [${generateMarkdown[0].username}](https://github.com/${generateMarkdown[0].username});
* Email: ${generateMarkdown[0].email}`;
};

