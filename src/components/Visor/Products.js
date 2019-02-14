import React, {Component} from 'react';
import axios from 'axios';

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
        // let visorDisplay = this.state.visor.map(visor => {
        //     return (
        //         <div key={visor.product_id} > 
        //             <img alt="sngl_pic" src={`${visor.product_pic}`} />
        //             <div> {visor.product_name} </div> 
        //             <div> {visor.product_price} </div> 
        //         </div>
        //     )

        // })
        return (
            <div>
                {visorDisplay}
            </div> 
        )
    }
}


export default Products