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

                category: {

                    type: String,
                    enum: ["FrontEnd", "BackEnd", "Developer Tools"],
                    default: "FrontEnd"
                }


            }
        ]
    },
    { timestamps: true });

const Skills = mongoose.model('Skill', skillSchemma);

export default Skills;