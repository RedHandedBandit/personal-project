import React from 'react';
import {connect} from 'react-redux';

const Checkout = (props) => {
    let checkoutCart = props.cart.map( item => {
       return ( 
    <div key={item.product_id}>
        <img alt="checkout_pic" src={`${item.product_pic}`} /> 
        <div> Name: {item.product_name} </div> 
        <div> Price: {item.product_price} </div>
    </div>)
    })
    return (
    <div>
       {checkoutCart} 
    </div>
    )
}

const mapStateToProps = (reduxState) => {
    const {cart} = reduxState 
    return {cart}
  }

export default connect(mapStateToProps)(Checkout)