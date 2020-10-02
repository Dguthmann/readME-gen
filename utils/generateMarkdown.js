// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Author: ${data.name}
  
  github: https://github.com/${data.github}/  
  livesite: ${data.livesite}
  
  ## List of Contents
  
  README.md  
  ${data.files}  
  ${data.screenshot}  
  
  
  ## Installation

  you will need the following npms to run this project:  
  ${data.npm}

  ## License

  ${data.license}  


  ## Basic Overview of Project
  
  ${data.overview}
  
  
  ## Screenshot of Website
  
  ![Site Screenshot](${data.screenshot})


  ## Test Files

  ${data.testers}
  

  ## resources Used
  
  ${data.resources}
  
  ## Further Development Plans
  
  ${data.future}

`;
}
// const genNew = new generateMarkdown(data);

// Send back this function to index
module.exports.generateMarkdown = generateMarkdown;
