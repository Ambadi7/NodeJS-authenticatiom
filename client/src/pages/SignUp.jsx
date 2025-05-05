import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { toast } from 'sonner'
import axios from 'axios' 

const SignUp = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")

  //form submit
  const handleSubmit =async(e)=>{
    e.preventDefault()
    console.log(name,email,password,phone,address)
    
    try{
      const{data}= await axios.post("/api/v1/auth/signup",{name,email,password,phone,address})
      
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    }catch(error){
      console.log(error)
      
      toast.error("Something went wrong")
    }


  }
  return (
    <div className='flex justify-center'>
    <Helmet><title>Authentication-signup</title></Helmet>
      <form onSubmit={handleSubmit} className='w-full md:w-4/7 justify-center  flex flex-col gap-4 p-8  items-center'>
        <input type="text" placeholder="Name" name={name} value={name} onChange={(e)=>{setName(e.target.value)}} required className="w-5/7 outline-1 outline-gray-600 rounded-md p-2 " />
        <input type="email" placeholder="Email" name={email} value={email} onChange={(e)=>{setEmail(e.target.value)}} required className="w-5/7 outline-1 outline-gray-600 rounded-md p-2 " />
        <input type="password" placeholder="Password" name={password} value={password} onChange={(e)=>{setPassword(e.target.value)}} required className="w-5/7 outline-1 outline-gray-600 rounded-md p-2 " />
        <input type="text" placeholder="Phone Number" name={phone} value={phone} onChange={(e)=>{setPhone(e.target.value)}} required className="w-5/7 outline-1 outline-gray-600 rounded-md p-2 " />
        <input type="text" placeholder="Address" name={address} value={address} onChange={(e)=>{setAddress(e.target.value)}} required className="w-5/7 outline-1 outline-gray-600 rounded-md p-2 " />
        <button type='submit' className='w-5/7 outline-1 outline-gray-600 rounded-md p-2 bg-blue-600'>Signup</button>
      </form>
    </div>
  )
}

export default SignUp