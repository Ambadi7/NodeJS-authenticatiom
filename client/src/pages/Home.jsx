import React from 'react'
import { Helmet } from 'react-helmet'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

const Home = () => {
  const {auth} = useContext(AuthContext)
  
  console.log(auth)
  return (
    
    <div className=' bg-gray-100'>
    <Helmet><title>Authentication-Home</title></Helmet>
    {/* <pre className=' w-full overflow-hidden md:overflow-auto'>{JSON.stringify(auth,null,4)}</pre> */}
    {
      auth.user ? 
      <div className='bg-white font-mono text-xl font-thin p-8 justify-center '>
        <h1> Name : {JSON.stringify(auth.user.name)}</h1>
        <h1> Id : {JSON.stringify(auth.user.id)}</h1>
        <h1> email : {JSON.stringify(auth.user.email)}</h1>
        <h1> Phone : {JSON.stringify(auth.user.phone)}</h1>
        <h1> Address : {JSON.stringify(auth.user.address)}</h1>
      </div>
       : 
       <div className='font-mono text-xl font-thin p-8 justify-center'>
       

        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
            <h1 className="text-3xl font-bold text-blue-600">Sign Up and Login</h1>
            <h1 className="text-3xl font-bold text-blue-600 mb-4">🔐 React Authentication App</h1>
            <p className="mb-4">
              This is a full-stack authentication system using modern web technologies. Users can
              <strong> register, log in, log out,</strong> and access protected routes.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">🛠️ Tech Stack</h2>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Frontend:</strong> React with Vite</li>
              <li><strong>Routing:</strong> <code>react-router-dom</code></li>
              <li><strong>Notifications:</strong> <code>sonner</code></li>
              <li><strong>Global State:</strong> React Context API</li>
              <li><strong>Security & SEO:</strong> <code>react-helmet</code></li>
              <li><strong>HTTP Requests:</strong> <code>axios</code></li>
              <li><strong>Backend:</strong> Node.js with Express</li>
              <li><strong>Database:</strong> MongoDB using Mongoose</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">✅ Features</h2>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>User signup with email and password</li>
              <li>Secure login with token-based authentication</li>
              <li>Logout and session management</li>
              <li>Protected routes for authenticated users only</li>
              <li>Responsive and clean UI with Tailwind CSS</li>
            </ul>



           
          </div>
        </div>

       </div>
    }
      
    </div>
  )
}

export default Home