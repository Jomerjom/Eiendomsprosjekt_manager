const fs = require('fs').promises; // Import the 'fs' module using CommonJS syntax

const filePath = './src/assets/data/testwrite.json';

const addProject = async (newProject) => {
  try {
    // Read existing data from the file
    let existingData = await fs.readFile(filePath, 'utf8');
    existingData = existingData ? JSON.parse(existingData) : { projects: [] };

    // Find the highest id in the existing data
    const highestId = existingData.projects.reduce(
      (maxId, project) => Math.max(maxId, parseInt(project.id)),
      0
    );

    // Add the new project with an incremented id
    newProject.id = (highestId + 1).toString();
    existingData.projects.push(newProject);

    // Write the updated data back to the file
    await fs.writeFile(filePath, formatData(existingData), 'utf8');
    console.log('Project added to file');
  } catch (err) {
    console.error(err);
  }
};

const formatData = (data) => {
  // Format the data with "id" as the first property
  const formattedProjects = data.projects.map(project => {
    const { id, ...rest } = project;
    return { id, ...rest };
  });

  return JSON.stringify({ projects: formattedProjects }, null, 2);
};

module.exports = { addProject };