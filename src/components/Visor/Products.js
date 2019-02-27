import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import {addCart} from './../../ducks/reducer'
import './Products.css'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {
            visor: [],
            quantity: 1,
        }
        this.updateQuantity = this.updateQuantity.bind(this)
    }

    componentDidMount(){
        const {match: { params } } = this.props; //this.props.match.params

        axios.get(`/api/visors/${params.id}`)
        .then( res => this.setState({visor: res.data}))
        .catch(error => console.log('wrong', error))
    }

    addCart(){
        const item = {...this.state.visor[0], quantity: this.state.quantity}
        this.props.addCart(item)
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
        let visorDisplay;
        const {visor} = this.state
        if(this.state.visor[0]) {
            visorDisplay = 
            <div className="renderingVisor_div"> 
                <div> 
                    <img className="sngl_pic" alt="sngl_pic" src={`${visor[0].product_pic}`}/>
                </div>
                    <header className="npq_header"> 
                        <h1 className="productName_div" > 
                            {visor[0].product_name} 
                        </h1>

                        <div className="productPrice_div" > 
                            ${visor[0].product_price * this.state.quantity}.00 
                        </div>

                        <div className="quantity_div" > 
                            <span className="q_label" > QUANTITY </span>
                            <span className="divForQ_Btn"> 
                                <button className="quantity_btn" onClick={ () => this.updateQuantity('down')}> - </button>
                                    <span className="quantity_num"> 
                                        {this.state.quantity} 
                                    </span>
                                <button className="quantity_btn" onClick={() => this.updateQuantity('up')}> + </button>
                            </span>
                        </div>
                        <button className="addcart_btn" onClick={() => this.addCart()}> 
                            Add to Cart 
                        </button> 

                        <div className="listOfStuff" > 
                            <li className="descriptionOfProduct"> 
                                High Grade Velcro strap 
                            </li>
                            <li className="descriptionOfProduct"> 
                                Supreme Comfort, Moisture-Wicking Technology 
                            </li>
                            <li className="descriptionOfProduct"> 
                                Embroidered Logos 
                            </li>
                        </div>

                    </header>
            </div>
        }
        return (
            <div className="visor_display" >

                <div className="allVisor_info_forSingleProduct" > 
                    {visorDisplay} 
                </div>

            </div> 
        )
    }
}

const mapDispatchToProps = {
    addCart
}

export default connect(null, mapDispatchToProps)(Products)