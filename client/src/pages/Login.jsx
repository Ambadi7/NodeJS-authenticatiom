import React from 'react'
import { Helmet } from 'react-helmet'
import { useState ,useContext } from 'react'
import { toast } from 'sonner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'



const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()
  const {auth,setAuth} = useContext(AuthContext)

  const handleSubmit =  async (e)  =>{
    e.preventDefault()
     try{
      const { data } = await axios.post("/api/v1/auth/login",{email,password})
      if (data.success){
        toast.success(data.message)
        setAuth({...auth, user : data.user, token:data.token })
        localStorage.setItem("auth",JSON.stringify(data))
        navigate("/")

      }
      else{
        toast.error(data.message)
      }

     }catch(error) {
        console.log(error)
        toast.error("Something went wrong while logging in")

     }
  }
  return (
    <div className='flex justify-center items-center w-full h-3/4'>
    <Helmet><title>Authentication-Login</title></Helmet>
      <form onSubmit={handleSubmit} className='w-full md:w-4/7 justify-center  flex flex-col gap-4 p-8  items-center'>
      <input  type="email" placeholder="email" name={email} value={email} onChange={(e)=>{setEmail(e.target.value)}}   required className="w-5/7 outline-1 outline-gray-600 rounded-md p-2 " />
      <input type="password" placeholder="Password" name={password} value={password} onChange={(e)=>{setPassword(e.target.value)}}   required className="w-5/7 outline-1 outline-gray-600 rounded-md p-2 " />
      <button type='submit' className='w-5/7 outline-1 outline-gray-600 rounded-md p-2 bg-blue-600'>login</button>

      </form>
    </div>
  )
}

export default Login