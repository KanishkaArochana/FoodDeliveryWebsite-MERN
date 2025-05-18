import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="footer-logo">
                    <img src={assets.logo} alt="" />
                    <div className="logo-name">
                        <h3>SALFORD & CO </h3>
                        <p>Food and Drink</p>
                    </div>
                    </div>
                    

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, a sapiente. Facere nam magni ea optio architecto totam corporis voluptatibus maxime cum excepturi id dolorem dolore, possimus iure molestias provident.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.youtube_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>07712345678</li>
                        <li>example@abc.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copy Right 2025 @ Example.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
