import bcrypt from "bcrypt";
import { asyncHandler } from "../Utils/asyncHandler.js";
import jwt from "jsonwebtoken";


const hashedPassword = await bcrypt.hash("Shivraj07", 10);

console.log(hashedPassword);

const adminLogin = async (req, res) => {
    const { email, password } = req.body

    // check if credentials are provided or not

    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required" });
    }

    //check if provided credentials are valid or not

    if (email != process.env.ADMIN_PASSWORD_HASH) {
        return res.status(400).json({
            message: "Entered Password is incorrect"
        });
    }

    //compare admin password with Hashed password

    const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
    }

    // generate jwt token

    const token = jwt.sign({
        role: "admin"
    },
        JWT_SECRET,
        {
            expiresIn: JWT_SECRET_EXPIRY
        });

    //send token 

    res.status(200).json(
        {
            message: "Loggin Sucessfull",
            token

        }
    );

}

// const adminLogin = asyncHandler(async (req, res) => {
//     res.status(200).json({
//         message: "Admin logged in sucessfully"
//     })
// })

// export { adminLogin }