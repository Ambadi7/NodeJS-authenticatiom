import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Collection from "./pages/Collection"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ErrorPage from "./pages/ErrorPage"
import Layout from "./components/Layout"
import Cart from "./pages/Cart"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout title={"Authentication"}/>  }>
          <Route index element={<Home title={"home"}/>} />
          <Route path="about" element={<About title={"about"}/>}/>
          <Route path="collection" element={<Collection title={"collection"}/>}/>
          <Route path="login" element={<Login title={"login"}/>} />
          <Route path="signup" element={<SignUp title={"signup "}/>}/>
          <Route path="cart" element={<Cart/>}/>  
          <Route path="*" element={<ErrorPage title={"error"}/>}/>

        </Route>
        
      </Routes>
    </>
  )
}

export default App
