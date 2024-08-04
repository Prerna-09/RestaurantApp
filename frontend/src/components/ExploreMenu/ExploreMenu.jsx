import "./exploremenu.css"
import { menu_list } from "../../assets/assets"

const ExploreMenu = ({category, setCategory}) => {


  return (
    <div className="exploremenu"  id="exploremenu">
        <h1>Explore our menu</h1>
        <p className="exploremenu-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem consequatur repellat fuga a iste rerum reiciendis eveniet mollitia molestiae quia, vitae unde expedita dolorum pariatur minima qui. Officia, dolore quod!</p>

        <div className="exploremenu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=> prev===item.menu_name? "All" : item.menu_name)} key={index} className="exploremenu-list-items">
                        <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                        </div>
                )
            })}
        </div>
        <hr/>
      
    </div>
  )
}

export default ExploreMenu
