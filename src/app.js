import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"
import authRoutes from "./routes/authRoutes.js" //change the router name
import crypto from "crypto"
//Crypto for generate secret key

const app=express()

//Middlewares
app.use(cors())
app.use(cookieParser())
app.use(morgan())
app.use(express.json()) // Instructing the app to accept the data in json format

//seting route for auth
app.use("/api/v1/auth",authRoutes)

//Generate secret key
// const key = crypto.randomBytes(64).toString("hex")
// console.log(key)
app.get("/",(req,res)=>{
    res.send("<h1>helloworld</h1>")
})

// app.get("/ambadi",(req,res)=>{
//     res.send("I Love Backend")
// })
// app.get("/express",(req,res)=>{
//     res.send("Express Js is A Node Js Apllication framework that simplise server side feature and additional user feature")
// })

export default app