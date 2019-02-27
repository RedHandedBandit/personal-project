import React from 'react';
import {connect} from 'react-redux';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import {removeProduct} from './../../ducks/reducer'
require('dotenv').config()



const Checkout = (props) => {
    let checkoutCart = props.cart.map( item => {
       return ( 
    <div key={item.product_id}>
        <img alt="checkout_pic" src={`${item.product_pic}`} /> 
        <div> 
            <button onClick={() => props.removeProduct(item.product_id)} > Remove Item </button>
        </div>
        <div> Name: {item.product_name} </div> 
        <div> Price: {item.product_price * item.quantity} </div>
        <div> Quantity: {item.quantity} </div>
    </div>)
    })
    return (
    <div>
       {checkoutCart} 
       <div> 
        <StripeProvider apiKey={process.env.REACT_APP_PUBLIC_KEY}>
            <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
                <CheckoutForm />
            </Elements>
            </div>
        </StripeProvider>
      </div>
       {/* <Quantity /> */}
    </div>
    )
}

const mapStateToProps = (reduxState) => {
    const {cart} = reduxState 
    return {cart}
  }

const dispatchToProps = {
    removeProduct
}

export default connect(mapStateToProps, dispatchToProps)(Checkout)

// Question : shopping cart quantity - adding to database
// Solution : REDUX-PERSIST library