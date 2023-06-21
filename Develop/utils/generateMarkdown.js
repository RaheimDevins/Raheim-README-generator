// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=='none'){
    return `\n*[License](#license)\n`;
  }
  return ";"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## license`

  }
return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ##Description
  ${data.description}
  ##Table of Contents
  *[Usage](#usage)
  *[License](#license)
  *[Installation](#installation)
  *[GitHub](#GitHub)
  *[Credits](#credits)
  *[Questions](#questions)
  *[Test](#test)
  ##Usage
  ${data.usage}
  ##License
  ${data.license}
  ##Installation
  ${data.installation}
  ##GitHub
https://github.com/${data.github}/${data.title}
  ##Credits
  ${data.credits}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
