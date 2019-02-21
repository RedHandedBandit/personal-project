import React, {Component} from 'react';

class CmntBoard extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        return(
            <div> 
                <h3> Name: {this.props.info.first_name} {this.props.info.last_name} </h3>
                <h5> Comment: {this.props.info.comment} </h5>
                <h5> Date: {this.props.info.date} </h5>
                <div> <button> edit comment </button> </div>
            </div>
        )
    }

}

export default CmntBoard