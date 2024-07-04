// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge = "";

  if (license === 'MIT') {
    badge = '![MIT](https://img.shields.io/badge/MIT-blue?style=plastic)'
  } else if (license === 'APACHE 2.0') {
    badge = '![Static Badge](https://img.shields.io/badge/APACHE--2.0-red?style=plastic)'
  } else if (license === 'GPL 3.0') {
    badge = '![Static Badge](https://img.shields.io/badge/GPL--3.0-green?style=plastic)'
  } else if (license === 'Unlicensed') {
    badge = '![Static Badge](https://img.shields.io/badge/Unlicensed-black?style=plastic)'
  } else {
    (license === 'None');
  } return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";

  if (license === 'MIT') {
    link = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'APACHE 2.0') {
    link = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (license === 'GPL 3.0') {
    link = 'https://choosealicense.com/licenses/gpl-3.0/'
  } else if (license === 'Unlicensed') {
    link = 'https://choosealicense.com/licenses/unlicense/'
  } else {
    (license === 'None');
  } return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link = renderLicenseLink(license);
  let badge = renderLicenseBadge(license);

  if (license !== 'None') {
    return`
  ## License
  
  <a href='${link}'>${license}</a> ${badge}
   `;
  }else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let licenseSection = renderLicenseSection(license);

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

${licenseSection}

`;
}



module.exports = generateMarkdown;
