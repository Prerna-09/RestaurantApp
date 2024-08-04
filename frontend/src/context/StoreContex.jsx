import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'



export const StoreContex = createContext(null)

const StoreContexProvider = ({children}) => {

    const[cartItems, setCartItems] = useState({});

    const url = "https://restaurantapp-backend-kvne.onrender.com"
    
    const [token , setToken] = useState("")
    const[food_list, setFoodList] = useState([]);



   const addToCart =  async (itemId) =>{

    if(!cartItems[itemId]){
        console.log(`Adding item ${itemId} to cart`);
       setCartItems((prev)=>({...prev,[itemId]:1}))
    }else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(token){
        await axios.post(url+"/api/cart/add" , {itemId} ,{headers:{token}})
    }
   }




   const removeFromCart = async (itemId)=>{
    
    console.log(`Removing item ${itemId} to cart`);
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(token){
        await axios.post(url + "/api/cart/remove" , {itemId}, {headers:{token}})
    }
   }

   
   const getTotalCartAmout = ()=>{
    let totalAmount = 0;
    for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo= food_list.find((product)=>product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    console.warn(`Item with ID ${item} not found in food_list.`);
                }
            }
            
        }

        return totalAmount;
   }

   const fetchFoodList = async () =>{
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
    
   }
  

   console.log(food_list)
   const localCartData = async (token) =>{
    const response = await axios.post(url + "/api/cart/get" , {}, {headers:{token}})
    setCartItems(response.data.cartData);
   }


//   useEffect(()=>{
//        async function loadData(){
//         await fetchFoodList();
//         if(localStorage.getItem("token")){
//             setToken(localStorage.getItem("token"));
//             await localCartData(localStorage.getItem("token"));
//          }
//        }
//        loadData();
//   }, [])

  useEffect(() => {
    const loadData = async () => {
        await fetchFoodList();
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            await localCartData(storedToken);
        }
    };
    loadData();
}, []);


  

    const contentValue = { 
        food_list ,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmout,
        url,
        token,
        setToken,
    } 


    return (
        <StoreContex.Provider  value={contentValue}>
            {children}
        </StoreContex.Provider>
    )
}
 

export default StoreContexProvider;
