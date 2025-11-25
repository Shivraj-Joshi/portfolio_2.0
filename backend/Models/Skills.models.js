import mongoose from "mongoose";

const skillSchemma = new mongoose.Schema(
    {

        skills: [

            {
                icon: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },

            }
        ]
    },
    { timestamps: true });

const Skills = mongoose.model('Skill', skillSchemma);

export default Skills;