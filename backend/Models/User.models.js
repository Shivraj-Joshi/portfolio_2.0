import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    role: {
        type: String,
        enum: ["admin"],
        default: "admin"
    },


}, { timestamps: true })

// middleware used to encrypt the password just before saving the user details 🔐

userSchema.pre("save", async function (next) {

    if (this.modified("password")) {
        this.password = bcrypt.hash(this.password, 10)
        next()
    }

})

// methode to check whether the password is correct or not 

userSchema.method.isPasswordCorrect = async function (password) {
    bcrypt.compare(password, this.password)
}

//method for generating  access token 

userSchema.method.generateAccessToken = function () {
    jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    },
        process.env.ACCESS_TOKEN_SECRET,

        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}

//method for generating Refresh Token

userSchema.method.generateRefreshToken = function () {
    jwt.sign({
        _id: this._id,

    },
        process.env.REFRESH_TOKEN_SECRET,

        {
            expiresIn: process.env.REFERSH_TOKEN_EXPIRY
        }

    )
}

export const User = mongoose.model('User', userSchema);

