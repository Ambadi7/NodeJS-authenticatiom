import express from "express"
import { login, logOut, signUp, testController } from "../controllers/authControllers.js";
import { isAdmin, isLoggedIn } from "../middlewares/authMiddlewares.js";

const router = express.Router()

//Routing
// sign || method :post
router.post("/signup",signUp) //signUp from auth controllers 

// login || method :post
router.post("/login",login) //login from auth controllers
//logout
router.post("/logout",logOut)

//test controllers
router.get("/test",isLoggedIn,testController,isAdmin)
export default router;