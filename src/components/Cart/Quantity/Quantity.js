import React, {Component} from 'react'
import { connect } from 'react-redux';

class Quantity extends Component{
    constructor(props){
        super(props)
        this.state = {
            quantity: 1
        }
    }

    updateQuantity(direction){
        if(direction === 'down' && this.state.quantity - 1 === 0){
            return;
        }
        if(direction === 'up'){
            this.setState({quantity: this.state.quantity + 1})
        } else {
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    render(){
        let fullCart = this.props.cart.map( item => {
            return (
                <div key={item.product_id}> 
                    <img alt="product_pic" src={`${item.product_pic}`} />
                    <div> {item.product_name} </div>
                    <div> {item.product_price * this.state.quantity} </div>
                    <div>
                        <button onClick={() => this.updateQuantity('down')}> - </button>
                        {this.state.quantity}
                        <button onClick={() => this.updateQuantity('up')} > + </button>
                    </div>
                </div>
            )
        })


        return(
            <div> 
                {fullCart}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const {cart} = reduxState 
    return {cart}
  }

export default connect(mapStateToProps)(Quantity);