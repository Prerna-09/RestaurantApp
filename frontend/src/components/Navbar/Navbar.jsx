import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import "./navbar.css"
import{Link, useNavigate} from "react-router-dom"
import { StoreContex } from "../../context/StoreContex"

const Navbar = ({setShowLogIn}) => {

  const[menu, setMenu] = useState("home");
  const{getTotalCartAmout , token , setToken} = useContext(StoreContex); 

  const navigate = useNavigate();

  const logOut = ()=>{
    localStorage.removeItem("token")
    setToken("");
    navigate("/")
  }

console.log(getTotalCartAmout)

  return (
    <div className="navbar">
      <Link to="/"><img  className="logo" src={assets.logo} alt="logo"/></Link>  

        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={menu === "home" ? "active" : " "}>Home</Link>
            <a href="#exploremenu" onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : " "}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : " "}>Mobile</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : " "}>Contact Us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>

            <div className="navbar-search-icons">
              <Link to="/cart"> <img src={assets.basket_icon} alt=""/> </Link>
             
                <div className={getTotalCartAmout()===0 ?" " : "dot"}></div>
            </div>

           {!token?  <button onClick={()=>setShowLogIn(true)} >Sign in</button>
           : <div className="navbar-profile">
            <img src={assets.profile_icon} alt=""/>
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate("/myorders")} ><img src={assets.bag_icon} alt=" "/> <p>Orders</p></li>
              <hr/>
              <li  onClick={logOut}> <img src={assets.logout_icon} alt=" "/> <p>Logout</p></li>
            </ul>

           </div>
           }
        </div>
      
    </div>
  )
}

export default Navbar
