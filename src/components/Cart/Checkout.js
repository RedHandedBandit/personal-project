import React from 'react';
import {connect} from 'react-redux';

const Checkout = () => {

    return (
        <div>
            Checkout
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    const {cart} = reduxState 
    return {cart}
  }

export default connect(mapStateToProps)(Checkout)