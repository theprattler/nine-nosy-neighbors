// create 'license badge' if needed
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

// add 'license' to TOC if needed
const renderLicenseTOC = licenseTOC => {
  if (!licenseTOC) {
    return '';
  }
  return `* [License](#license)`
}

// create 'license section' if needed
const renderLicenseSection = licenseSection => {
  if (licenseSection === 'none') {
    return '';
  }
  return `## License
${licenseSection}`;
};

// add 'contributing' to TOC if needed
const renderContribTOC = contribTOC => {
  if (!contribTOC) {
    return '';
  }
  return `* [Contributing](#contributing)`
}

// create "contributors" section if needed
const renderContrib = contribSection => {
  if (!contribSection) {
    return '';
  }
  return `## Contributing
${contribSection}`;
};

// add 'tests' to TOC if needed
const renderTestsTOC = testsTOC => {
  if (!testsTOC) {
    return '';
  }
  return `* [Tests](#tests)`
}

// create "tests" section if needed
const renderTests = testSection => {
  if (!testSection) {
    return '';
  }
  return `## Tests
${testSection}`;
};

// generate the markdown file
module.exports = generateMarkdown => {
  console.log(generateMarkdown[0]);

  return `# ${generateMarkdown[0].title} ${renderLicenseBadge(generateMarkdown[0].license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(generateMarkdown[0].confirmLicense)}
${renderContribTOC(generateMarkdown[0].confirmContrib)}
${renderTestsTOC(generateMarkdown[0].confirmTests)}
* [Questions](#questions)


## Description
${generateMarkdown[0].description}

## Installation
${generateMarkdown[0].installation}

## Usage
${generateMarkdown[0].usage}

${renderLicenseSection(generateMarkdown[0].license)}

${renderContrib(generateMarkdown[0].contribGuidelines)}

${renderTests(generateMarkdown[0].tests)}

## Questions
If you have any questions, feel free to contact me:
* GitHub Profile: [${generateMarkdown[0].username}](https://github.com/${generateMarkdown[0].username})
* Email: ${generateMarkdown[0].email}`;
};

