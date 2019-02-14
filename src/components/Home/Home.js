import React, {Component} from 'react';
import axios from 'axios';
import './Home.css';
import img from './../../Ad_photos/tysanSlide.jpg'



class Home extends Component {
    constructor(){
        super()
        this.state = {
            visors: []
        }
    }

    componentDidMount(){
        axios.get('/api/home').then(res => {
            // console.log(res.data)
            this.setState({ visors: res.data })
        })
    }


    render(){
        let allVisors = this.state.visors.map((visor) =>{
           return (
               <div className="map.product" key={visor.product_id}> 
                
                   <img className="featured_img" src={`${visor.product_pic}`} alt="visor_image" />
                   <div className="visor_info"> {visor.product_name} </div>
                   <div className="visor_info"> ${visor.product_price}.00 </div>
                
               </div>
           )
        })
        return(
            <div className="featured_product"> 
            <div > 
                <img className="white_leather" alt="white_leather" src={img}/> 
            </div>
                <div className="feat"> FEATURED </div>
                <div className="allVisors"> 
                {allVisors}
                </div>
            </div>
        )
    }
}


export default Home