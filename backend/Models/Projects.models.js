import mongoose from "mongoose";


// as we will perform crud operations on multiple projects , we'll store projects in an Array 


const projectSchema = new mongoose.Schema(
    {




        coverImage: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        shortDescription: {
            type: String,
            required: true
        },
        liveLink: {
            type: String,
            required: true
        },
        githubLink: {
            type: String,
            required: true
        },

        techUsed: {
            type: true,
            required: true
        }




    },
    { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;