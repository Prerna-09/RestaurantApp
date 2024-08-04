import { useContext} from "react"
import { assets } from "../../assets/assets"
import "./fooditems.css"
import { StoreContex } from "../../context/StoreContex"

const FoodItems = ({id, name, price, description, image}) => {

    
const {cartItems, addToCart,removeFromCart, url} = useContext(StoreContex)
    


  return (
    <div className="fooditem">
        <div className="fooditem-image-container">
            <img className="fooditm-image" src={url+"/images/"+image} alt= " " />
            {
                !cartItems[id] ?
                
            <img className="add" onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=""/>
             :

                <div className="food-item-counter">
                    <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt=" "/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt=""/> 
                </div>
            }
        </div>
        <div className="fooditem-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">${price}</p>
        </div>
        
      
    </div>
  )
}

export default FoodItems
