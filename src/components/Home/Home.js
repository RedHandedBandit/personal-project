import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Home.css';
import {gangMember} from './../../ducks/reducer'
import {Link} from 'react-router-dom'
// import {Carousel} from 'react-bootstrap'





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
                <div className="white_leather"> 
                    
                </div>
                    <div className="feat"> FEATURED </div>
                    <div className="allVisors"> 
                        
                        {allVisors}
                        
                    </div>
                <div> 
                    <div className="sunset_img" > 
                         
                        <div className="ourStory_box"> 
                            <div className="text_area" > 
                                <h2> OUR STORY </h2>
                                <p className="text_story" > 
                                It all began in Miami Florida, USA. Arguably the most colorful, loud, and diverse place in the world. It’s no surprise that the inspiration for VanScotty Visors came to us there…
                                </p>
                                <Link to="/story" > 
                                    <button className="home_story" > Our Story </button> 
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
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
                    // eslint-disable-next-line
                    {/* <Carousel>
                        <Carousel.Item >
                            <img
                            className="d-block w-100"
                            src={tysan}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>ITS GUCCI</h3>
                            <p>SHOP WHITE LEATHER</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6C-9aejPxWRUF9MaKb-JFHbjl9QAQpyi88n9qQ9T0PrlzvInwdA"}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>STAND OUT</h3>
                            <p>WEAR RED</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={tennis}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>"LONG LIVE THE VISOR"</h3>
                            <p>#VISORGANG</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}