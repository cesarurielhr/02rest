
const projectModel = require('../models/projectModel');

function getAllProjects(req,res) {

    const projects = projectModel.getAllProjects();

    if(projects.length > 0)
         res.status(200).json(projects);
    else
          res.status(404).json({code:404,message: 'No projects found'});
    
}

function createProject(req,res) {
    ///validaciones de estructura
    const newProject = projectModel.createProject(req.body);

    res.status(200).json(newProject);
    
}
module.exports = {
    getAllProjects,
    createProject

}