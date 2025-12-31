import Skills from "../Models/Skills.models";


// function to get all the Skills from DataBase 🗃️ 

const getSkills = async (req, res) => {

    try {
        const Skill = await Skills.find()
        res.status(200).json({ success: true, data: Skill })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

};

//function to add a new project . 


const addSkill = async (req, res) => {
    try {
        const newSkill = new Skills(req.body)
        const savedSkill = await newSkill.save();
        res.status(200).json(savedSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//function to delete a pproject 

const deleteskill = async (req, res) => {
    try {
        await Skills.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'skill deleted sucessfully!!' })
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}

export { getSkills, addSkill, deleteskill };


