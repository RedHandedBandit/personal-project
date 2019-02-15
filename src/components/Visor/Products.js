import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios';
import {addCart} from './../../ducks/reducer'

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {visor: []}
    }

    componentDidMount(){
        const {match: { params } } = this.props; //this.props.match.params

        axios.get(`/api/visors/${params.id}`)
        .then( res => this.setState({visor: res.data}))
        .catch(error => console.log('wrong', error))
    }

    addCart(){
        this.props.addCart(this.state.visor[0])
    }

    render(){
        let visorDisplay;
        const {visor} = this.state
        if(this.state.visor[0]) {
            visorDisplay = 
            <div>
                <img alt="sngl_pic" src={`${visor[0].product_pic}`}/>
                <div> {visor[0].product_name} </div>
                <div> {visor[0].product_price} </div>
            </div>
        }
        return (
            <div>
                {visorDisplay}
                <button onClick={() => this.addCart()}> Add to Cart </button> 
            </div> 
        )
    }
}

const mapDispatchToProps = {
    addCart
}

export default connect(null, mapDispatchToProps)(Products)