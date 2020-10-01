// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # day-planner-moment

  ### Author: David Guthmann
  
  github: https://github.com/Dguthmann/  
  livesite: https://dguthmann.github.io/day-planner-moment/
  
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

module.exports = generateMarkdown;
