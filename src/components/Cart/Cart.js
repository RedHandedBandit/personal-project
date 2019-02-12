import React, {Component} from 'react';
import Checkout from './Checkout'

class Cart extends Component {

    render(){

        return(
            <div> 
                Cart
                <Checkout />
            </div>
        )
    }
}

export default Cart