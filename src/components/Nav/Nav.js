import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';


library.add(faUserAlt, faShoppingBag)

const Nav = function(props) {
    const {first_name, last_name} = props
    return(
        <header> 
            <div className="nav"> 
            <Link to="/" > <img className="logo_btn" src="https://cdn.shopify.com/s/files/1/0104/6895/0075/files/VSweblogo500_400x.jpg?v=1542058510" alt="logo" type="button" role="button" />  </Link>

                <div className="all_btn"> 
                    <span className="main_btn"> 
                        <Link to="/" > <button className="nav_button"> HOME </button> </Link>
                        <Link to="/visor" > <button className="nav_button" > VISORS </button> </Link>
                        <Link to="/story" > <button className="nav_button"> OUR STORY </button> </Link>
                        <Link to="/contact" > <button className="nav_button"> CONTACT </button> </Link>
                    </span>
                    <span className="sec_btn">

                        <Link to="/account" > 
                            <button className="nav_icon"> 
                                <FontAwesomeIcon icon="user-alt" /> 
                            </button> 
                        </Link>

                        <Link to="/cart" > 
                            <button className="nav_icon"> 
                                <FontAwesomeIcon icon="shopping-bag" />  
                            </button> 
                        </Link>

                        {first_name && <div> 
                            welcome, {first_name} {last_name}
                        </div>}

                    </span>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = (reduxState) => {
    const {first_name, last_name} = reduxState.user
    return {
        first_name,
        last_name
    }
}

export default connect(mapStateToProps)(Nav)