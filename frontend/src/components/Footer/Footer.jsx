import { assets } from "../../assets/assets"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer' id="footer">

        <div className="footer-content">

            <div className="footer-content-left">
                <img  className="footer-logo" src={assets.logo} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nostrum cumque nihil quis expedita saepe ad velit adipisci reprehenderit aliquid pariatur porro voluptatibus aut libero, labore sint quaerat molestiae. Ipsum.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-787-8970</li>
                    <li>contacteateat@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 0 Eateat.com - All Right Reserved.
        </p>



      
    </div>
  )
}

export default Footer
