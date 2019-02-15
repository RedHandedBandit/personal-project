import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Home.css';
import img from './../../Ad_photos/tysanSlide.jpg'
import visorImage from './../../Ad_photos/visor_sunset.jpg'
import {gangMember} from './../../ducks/reducer'



class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            visors: []
        }
    }

    componentDidMount(){
        axios.get('/api/home').then(res => {
            // console.log(res.data)
            this.setState({ visors: res.data })
        })
        const {username_id} = this.props
        if(!username_id){
            axios.get('/api/user')
            .then(res => {
                this.props.gangMember(res.data)
            })
            .catch(error => console.log('nope', error))
        }
    }



    render(){
        console.log(this.props)
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
                <img className="ourstory_img" alt="city_sunset" src={visorImage} /> 
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {username_id} = reduxState
    return {
        username_id
    }
}
const dispatchToProps = {
    gangMember
}


export default connect(mapStateToProps, dispatchToProps)(Home)