import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Footer from "./components/Footer/Footer"
import  Register from "./Pages/RegisterPage/Register"
import Login from "./Pages/LoginPage/Login1"
import Cart from "./Pages/Cart/cart"
import Pizza from "./Pages/pizza-h4/Pizza"
import NotFound from "./Pages/NotFound/NotFound"
import Profile from "./Pages/Profile/Profile"
import NavbarLink from "./components/Navbar/NavbarLink"

function App() {
 
  return (
    <>
    {/* <Navbar/> */}
    <NavbarLink/>
    {/* <Home/> */}
    {/* <Pizza/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Cart/> */}
    {/* <Footer/> */}

<Routes>
  
  <Route path="/" element= {<Home/>} />
  <Route path="/Register" element= {<Register/>} />
  <Route path="/login" element= {<Login/>} />
  <Route path="/cart" element= {<Cart/>} />
  <Route path="/pizza/p001" element= {<Pizza/>} />
  <Route path="/profile" element= {<Profile/>} />
  <Route path="/404" element= {<NotFound/>} />



</Routes>
    </>
  )
}

export default App
   