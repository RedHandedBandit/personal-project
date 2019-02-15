import React from 'react';
import {connect} from 'react-redux';

const Checkout = (props) => {
    let checkoutCart = props.cart.map( item => {
       return ( 
    <div key={item.product_id}>
        <img alt="checkout_pic" src={`${item.product_pic}`} /> 
        <div> {item.product_name} </div> 
        <div> {item.product_price} </div>
    </div>)
    })
    console.log(checkoutCart)
    console.log("hello", props)
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