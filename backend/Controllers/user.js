import { asyncHandler } from "../Utils/asyncHandler.js";

const adminLogin = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Admin logged in sucessfully"
    })
})

export { adminLogin }