import { useContext, useState } from "react"
import "./loginpopup.css"
import { assets } from "../../assets/assets"
import { StoreContex } from "../../context/StoreContex"
import axios from "axios"

const LoginPopup = ({setShowLogIn}) => {


  const {url, setToken} = useContext(StoreContex)
    const[currState, setcurrState] = useState("Login")
    const[data, setData] = useState({
      name:"",
      email:"",
      password:""
    })


    const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value= event.target.value;

      setData(data=>({...data, [name]:value}))

    }


    const onLogin = async(event)=>{
      event.preventDefault();
      let newUrl= url;
      if(currState==="Login"){
        newUrl +="/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      try{
      const response = await axios.post(newUrl, data)

      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token" , response.data.token)
        setShowLogIn(false)

      }
      else{
        alert(response.data.message)
      }

    } catch(error){
      console.error('Error during login/register:', error);
      alert('An error occurred. Please try again.');
    }
  }


  return (
    <div className='loginpopup'>
     <form  onSubmit={onLogin} action="" className="login-popup-container">

        
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogIn(false)} src={assets.cross_icon} alt=""/>
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>: <input name="name" onChange={onChangeHandler}  value={data.name} type="text" placeholder="your name" required/>}
                <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="your email" required/>
                <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required/>

            </div>
            <button type="submit">{currState==='Sign Up' ? "Create account" : "Login"}</button>

            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>

            {currState==="Login" ?
             <p>Create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
             :
             <p>Already have an account? <span  onClick={()=>setcurrState("Login")}>Login here</span></p>
        }
            
           
        
     </form>
    </div>
  )
}

export default LoginPopup
