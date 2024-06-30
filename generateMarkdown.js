
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation <a name="installation"></a>

${data.installation}

## Usage <a name="usage"></a>

${data.usage}

## Contributing  <a name="contributing"></a>
${data.contributing}

## Tests  <a name="tests"></a>
${data.test}

## Questions <a name="questions"></a>

If you have ay questions about the repo, open an issue or contact me directly at nevahevans@yahoo.com. You can fnd more of my work at <a href='https://github.com/${data.github}'>${data.github}</a>.
`;
}

module.exports = generateMarkdown;
