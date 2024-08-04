import { useContext, useEffect, useState } from "react"
import "./verify.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import { StoreContex } from "../../context/StoreContex";
import axios from "axios";

const Verify = () => {

    const [searchParams, setsearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    console.log(success, orderId)

    const {url} = useContext(StoreContex);
    const navigate = useNavigate();


    const verifyPayment = async () =>{
        const response = await axios.post(url+"/api/order/verify" , {success , orderId})
        if(response.data.success){
        navigate("/myorders")
        }else{
            navigate("/")
        }
    }
   useEffect(()=>{
    verifyPayment();
   },[])

  return (
    <div className="verify">


        <div className="spinner"></div>
      
    </div>
  )
}

export default Verify
