import express from "express"
import { login, signUp } from "../controllers/authControllers.js";

const router = express.Router()

//Routing
// sign || method :post
router.post("/signup",signUp) //signUp from auth controllers 

// login || method :post
router.post("/login",login) //login from auth controllers
export default router;