import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

const Nav = function() {
    return(
        <header> 
            <div className="nav"> 
            <img className="logo_btn" src="https://cdn.shopify.com/s/files/1/0104/6895/0075/files/VSweblogo500_400x.jpg?v=1542058510" alt="logo" type="button" role="button" /> 
                <div className="all_btn"> 
                    <span className="main_btn"> 
                        <Link to="/" > <button className="nav_button"> HOME </button> </Link>
                        <Link to="/visor" > <button className="nav_button" > VISORS </button> </Link>
                        <Link to="/story" > <button className="nav_button"> OUR STORY </button> </Link>
                        <Link to="/contact" > <button className="nav_button"> CONTACT </button> </Link>
                    </span>
                    <span className="sec_btn"> 
                        <Link to="/account" > <button className="nav_icon"> LOGIN </button> </Link>
                        <Link to="/cart" > <button className="nav_icon"> CART </button> </Link>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Nav