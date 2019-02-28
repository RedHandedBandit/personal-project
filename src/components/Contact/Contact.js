import React, {Component} from 'react';
import axios from 'axios';
import './Contact.css';
import {gangMember} from './../../ducks/reducer';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';
import CmntBoard from './CmntBoard/CmntBoard';


class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: [],
            name: '',
            date: new Date()
        }
        // this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
        this.getAllCmnts()
        const {username_id} = this.props
        if(!username_id){
            axios.get('/api/user')
            .then(res => {
                this.props.gangMember(res.data)
            })
            .catch(error => console.log('nope', error))
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
        // console.log(this.state)
    }

    postComment = () => {
        axios.post('/api/messages', {comment: this.state.comment, date: this.state.date.toString()})
    }

    handleUpdate = () => {
        this.getAllCmnts()
        // this.setState({comments: val})
    }

    getAllCmnts = () => {
        axios.get('/api/messages').then( res =>
            this.setState({comments: res.data})
        )
    }

    deleteInfo = () => {
        this.getAllCmnts()
        // this.setState({comments: data})
        // console.log(data)
        // placing new data into comments
    }

    deleteCmnt = (id) => {
        axios.delete(`/api/deleteMesh/${id}`).then( res => {
            
            this.deleteInfo(res.data)
        }).catch( error => console.log("didnt work in the front end", error))
        //deleting a cmnt and then using deleteInfo to send back the remaining cmnts.
    }


    render(){
        // console.log(this.props)
        const {email} = this.props
        // console.log('email', email)
        let post = this.state.comments.map((post) => {
            return (
                <CmntBoard key={post.cmnt_id} info={post} updateList={this.handleUpdate} deleteOne={this.deleteCmnt} />
                // <div key={post.cmnt_id}> 
                //     <div> {post.first_name} {post.last_name} </div>
                //     <div> {post.comment} </div>
                //     <div> {post.date} </div>
                // </div>
            )
        })
        return(
            <div className="background_img">
                <div className="top_divs" > 
                    <div className="div_background"> <h5> EMAIL </h5> </div> 
                    <div className="div_background"> <p> {email} </p> </div>

                    <div className="div_background"> <h5> COMMENT </h5> </div>

                    <div className="div_background" > <textarea className="comment_box" 
                                placeholder="comment" 
                                onChange={(e) => {this.handleChange("comment", e.target.value)}}
                                type="text"
                                value={this.comments}
                                />  
                    </div>
                    <span> 
                        <button className="post_btn" onClick={this.postComment} > Post </button> 
                    </span>
                </div>
                <div> {post} </div>
            </div>
        )
    }
}


const mapStateToProps = reduxState => {
    const {username_id, email} = reduxState
    return {
        username_id,
        email
    }
}
const dispatchToProps = {
    gangMember
}

export default connect(mapStateToProps, dispatchToProps)(Contact)