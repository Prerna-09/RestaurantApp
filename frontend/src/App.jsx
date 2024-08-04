import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import{Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Order from "./pages/PlaceOrder/Order"
import Footer from './components/Footer/Footer'
import LoginPopup from './components/Loginpopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import Myorders from './pages/Myorders/Myorders'

const App = () => {

  const[showLogIn , setShowLogIn] = useState(false)



  return (
    <>
    {showLogIn ? <LoginPopup setShowLogIn={setShowLogIn}/> :<></>}
    <div className='app'>
     <Navbar setShowLogIn={setShowLogIn}/>
     <Routes>
      <Route path="/"  element={<Home/>}> </Route>
      <Route path="/cart"  element={<Cart/>}> </Route>
      <Route path="/order"  element={<Order/>}> </Route>
      <Route path="/verify" element={<Verify/>}></Route>
      <Route path="/myorders" element={<Myorders/>}></Route>

     </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App
