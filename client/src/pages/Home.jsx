import React from 'react'
import { Helmet } from 'react-helmet'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

const Home = () => {
  const {auth} = useContext(AuthContext)
  return (
    
    <div>
    <Helmet><title>Authentication-Home</title></Helmet>
    Home
    <pre>{JSON.stringify(auth,null,4)}</pre>
    </div>
  )
}

export default Home