import React from 'react';
import {connect} from 'react-redux';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm/CheckoutForm'
import {removeProduct} from './../../ducks/reducer'
import './Checkout.css'
require('dotenv').config()



const Checkout = (props) => {
    let checkoutCart = props.cart.map( item => {
       return ( 
    <div className="mappedProducts" key={item.product_id}>
        

        <div className="allproduct_checkout"> 
            <img className="checkout_pic" alt="checkout_pic" src={`${item.product_pic}`} /> 
            <div className="product_name"> {item.product_name} </div> 
            <div className="product_price"> Price: ${item.product_price * item.quantity}.00 </div>
            <div className="product_quantity"> Quantity: {item.quantity} </div>
            <div className="removeProduct_div"> 
                <button className="removeProduct_btn"
                        onClick={() => props.removeProduct(item.product_id)} > X
                </button>
                Remove 
            </div>
        </div> 
    </div>)
    })
    console.log(props.cart)
    let totalPrice = props.cart.reduce((acc, item)=> {
        if(item.product_price === 0){
            return 'your cart is empty'
        }else {return acc + (item.product_price * item.quantity)}
        }, 0)
    console.log(totalPrice)
    
    return (
    <div className="returning_div">
        <div className="return_checkoutcart"> 
            {checkoutCart}
         Total ${totalPrice}.00
        </div> 
        <div className='practice'> 
            <div className="stripe_div"> 
                <StripeProvider apiKey={process.env.REACT_APP_PUBLIC_KEY}>
                <div className="example">
                    <h1 className="h1_stripe">Checkout</h1>
                    <Elements className="elements_stripe">
                        <CheckoutForm />
                    </Elements>
                </div>
                </StripeProvider>
            </div>
        </div>
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