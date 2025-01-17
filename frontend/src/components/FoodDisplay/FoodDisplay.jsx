import { useContext } from "react"
import "./FoodDisplay.css"
import { StoreContex } from "../../context/StoreContex"
import FoodItems from "../FoodITems/FoodItems"

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContex)

  return (
    <div className="foodDisplay" id="foodDisplay">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item, index)=>{
              if(category==="All" || category===item.category ){
              return (
                <FoodItems key={index} id={item._id} name={item.name} description={item.description}
                 price={item.price} image={item.image}/>
              )
            }
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
