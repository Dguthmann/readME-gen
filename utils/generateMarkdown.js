// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Author: ${data.name}
  
  github: https://github.com/${data.github}/  
  livesite: ${data.livesite}
  
  ## List of Contents
  
  README.md  
  ${data.html}  
  ${data.css}  
  ${data.js}  
  ${data.screenshot}  
  
  
  ## Basic Overview of Project
  
  ${data.overview}
  
  
  ## Screenshot of Website
  
  ![Site Screenshot](${data.screenshot})
  
  ## resources Used
  
  ${data.resources}
  
  ## Further Development Plans
  
  ${data.future}

`;
}
// const genNew = new generateMarkdown(data);

// Send back this function to index
module.exports.generateMarkdown = generateMarkdown;
