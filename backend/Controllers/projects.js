import { request } from "express";
import Project from "../Models/Projects.models";

// function to get all the projects from DataBase 🗃️ 

const getProject = async (req, res) => {

    try {
        const projects = await Project.find()
        res.status(200).json(projects)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

};

//function to add a new project . 


const addProject = async (req, res) => {
    try {
        const newProject = new Project(req.body)
        const savedPrject = await newProject.save();
        res.status(200).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//function to delete a pproject 

const deleteProject = async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'project deleted sucessfully!!' })
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}

export { getProject, addProject, deleteProject };


