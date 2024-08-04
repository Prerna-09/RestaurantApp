import { useContext } from "react"
import "./cart.css"
import { StoreContex } from "../../context/StoreContex"
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const{cartItems, food_list, removeFromCart, getTotalCartAmout, url} = useContext(StoreContex);

  const navigate = useNavigate();



  return (
    <div className="cart">
      
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index)=>{
          if(cartItems[item._id]>0)
            {
              return(
                <div>
                <div className="cart-items-title car-items-item">
                 <img src={url+"/images/"+item.image} alt=""/>
                 <p>{item.name}</p>
                 <p>${item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>${item.price*cartItems[item._id]}</p>
                 <p  onClick={()=>removeFromCart(item._id)}  className="cross">X</p>

                </div>
                <hr/>
                </div>

              )
            }

        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmout()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmout()=== 0 ? 0 : 2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${ getTotalCartAmout()===0 ? 0 :  getTotalCartAmout()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here:</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="promo code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Cart