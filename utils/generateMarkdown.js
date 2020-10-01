// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Author: ${data.name}
  
  github: https://github.com/${data.github}/  
  livesite: ${data.livesite}
  
  ## List of Contents
  
  ${data.html}  
  ${data.css}  
  ${data.js}  
  README.md  
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
// Send back this function to index
module.exports.generateMarkdown = generateMarkdown;
