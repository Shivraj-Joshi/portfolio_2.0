import { Router } from "express";
import { adminLogin } from "../Controllers/user.js";

const router = Router();

console.log(typeof adminLogin);

router.route("/login").post(adminLogin)

export default router;