import React, {Component} from 'react';
import axios from 'axios';
import './CmntBoard.css'

class CmntBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            editCmnt: false,
            newCmnt: ''
        }
    }

    handleClick(){
        this.setState({editCmnt: !this.state.editCmnt})
    }

    handleCmntChange(val){
        this.setState({newCmnt: val})
    }

    handleSubmit(id){
        let text = {
            text: this.state.newCmnt,
            comment: this.state.newCmnt,
            date: new Date()
        }
        
        axios.put(`/api/editMesh/${id}`, text).then(res => {
            // console.log(res.data)
            this.props.updateList(res.data);
            this.handleClick()
        }).catch( error => console.log(error))
    }
    // possibly making new comment
    // id coming back as null
    // text not being saved

    handleDelete(id){
        this.props.deleteOne(id);
    }

    render(){
        // console.log(this.props.info.cmnt_id)
        return(
            <div className="cmntBoard_div"> 
                <div className="cmnt_board" > 
                    <h3> Name: {this.props.info.first_name} {this.props.info.last_name} </h3>
                    <h5> Comment: {this.props.info.comment} </h5>
                    <h5> Date: {this.props.info.date} </h5>
                    <div> {
                            !this.state.editCmnt ?
                            <button className="editCmnt_btn" onClick={() => {this.handleClick()}} > EDIT COMMENT </button> :
                            <div> 
                                <textarea 
                                    onChange={(e) => this.handleCmntChange(e.target.value)}
                                    value={this.state.comment}
                                />
                                <button className="submit_btn" onClick={() => this.handleSubmit(this.props.info.cmnt_id)} > SUBMIT </button>
                            </div>
                        }
                        <button className="delete_btn" onClick={() => {this.handleDelete(this.props.info.cmnt_id)}} > DELETE </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default CmntBoard