import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {

        project: [

            {
                thumbnail: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                description: {
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



            }
        ]
    },
    { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;