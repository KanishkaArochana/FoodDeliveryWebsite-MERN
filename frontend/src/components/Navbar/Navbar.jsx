import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();



  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigator("/")
  }


  return (
    <div className='navbar'>
      {/* <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link> */}
      <Link to='/'>
        <div className="navbar-logo">
          <img src={assets.logo} alt='' className='logo' />
          <div className="logo-name">
            <h3>SALFORD & CO </h3>
            <p>Food and Drink</p>
          </div>
        </div>
      </Link>


      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}> Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /> </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>  {/* dianimic class name */}
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />
            <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')}><img src={assets.order_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
