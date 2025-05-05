import User from "../models/userSchema.js"
import JWT from "jsonwebtoken"
import config from "../config/config.js"

export const cookieOptions ={
    expires :  new Date (Date.now()+30*24*60*60*1000),
    httpOnly : true
}
/*
    signup
    route : http : //localhost:4000/api/v1/auth/signup
    description : user signup controller to create new user 
*/

export const signUp = async (req,res)=>{

    try {
        //get info from the frontend
        
        const {name,email,password,phone,address} =req.body

        //validation
        if (!name || !email || !password || !phone || !address){
            res.status(400).json({
                success : false,
                message : "Please fill in all required fields: name, email, password, phone, address "
            })
        }

        
        //check if the data is already exist
        const existingUser = await User.findOne({email})
        
         //if the user already exist and send response
        if(existingUser){
            res.status(200).json({
                success : false,
                message : "you have already signup"
            })
        }
         // else the user not in db and create new user
        const user = await User.create({
            name,
            email,
            password,
            phone,
            address
        })
        //safety
        user.password=undefined
         //send sucess message to frontend
         res.status(200).json({
            success : true,
            message : "user successfully signed",
            user
         })

    }
    catch (error){
        console.log(error);
        res.status(500).json({
            success : false,
            message : `Error in signing up ${error}`,
            error
        })
    }
}


/*
    Login function
    route : http : //localhost:4000/api/v1/auth/login
    description : user login controller to Login
*/
export const login = async (req,res)=>{
    try{
        //get info from frontend
        const{email,password}=req.body

        //validation
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "Invalid email or password"
            })
        }
        //check if the user existing database
        const user = await User.findOne({email}).select("+password")

        //if the user doesnot exit in db send a message
        if (!user){
            return res.status(404).json({
                success : false,
                message : "User not found please signup"
            })
        }
        //if existing user compare password
        const isPasswordMatched = await user.comparePassword(password)
            
        //if password doesnt match send response
        if(!isPasswordMatched){
            return res.status(400).json({
                success : false,
                message : "password Invalid"
            })
        }

        //if password match generate JWT token

        const token=JWT.sign({id :user._id,role :user.role}, config.JWT_SECRET  ,{ expiresIn :config.JWT_EXPIRY})
        //flushout password
        user.password = undefined
        //setup cookie
        res.cookie("token",token,cookieOptions)
        
        //send success message to the frontend
        res.status(200).json({
            success : true,
            message : "Sucessfully logged in",
            user :{
                id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role
            },
            token
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success : false,
            message : (`Error in login ${error}`),
            error
        })
    }
}


/* 
    test
    route : http :// localhost:4000/api/v1/auth/test 
    description : for testing the middlewares
*/

//test controllers
export const testController = (req,res) =>{
    res.send("protect route")
}