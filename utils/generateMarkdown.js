const licenses = require('./licenses');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseData = licenses.find((l) => l.license === license);
  return licenseData
    ? licenseData.badge
    : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseData = licenses.find((l) => l.license === license);
  return licenseData
    ? `[Lincense Link] (${licenseData.link})`
    : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseData = licenses.find((l) => l.license === license);
  return licenseData
    ? `This project is licensed under the ${licenseData.license}. For more information, see the link below:
    ${renderLicenseLink(license)}` 
    : '';
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Repo](#repo)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my [GitHub profile](https://github.com/${data.github}).

${renderLicenseSection(data.license)}

## Repo
Check out [Project Name](Link) repo

Checkout the deployed site at [Project Name](link)
`;
}

module.exports = generateMarkdown;
