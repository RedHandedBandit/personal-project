import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Visor.css'



class Visor extends Component {
    constructor(props){
        super(props)
        this.state = {
            visors: []
        }
    }

    componentDidMount(){
        axios.get('/api/home').then(res => {
            this.setState({ visors: res.data})
        })
    }

    


    render(){
        let Allvisors = this.state.visors.map(visor => {
            return (
                <Link to={`/product/${visor.product_id}`} key={visor.product_id}> <div className="mapped_product" type="button" > 
                    <img className="prod_img" alt="" src={`${visor.product_pic}`}/>
                    <div className="prod_info"> {visor.product_name} </div>
                    <div className="prod_info"> ${visor.product_price}.00 </div>
                </div> </Link>
            )
        })
        return(
            <div className="dp_all"> 
                <h1 className="header"> VISORS </h1>
                <p className="p_tag"> There is no better visor. The best prints combined with supreme comfort and quality. The best visor you'll ever own. Enjoy. </p>
                    <div className="all_Products"> 
                        {Allvisors}
                    </div> 
                
            </div>
        )
    }
}
                

export default Visor