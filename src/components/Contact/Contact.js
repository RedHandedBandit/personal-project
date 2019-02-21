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
    }

    componentDidMount(){
        axios.get('/api/messages').then( res =>
            this.setState({comments: res.data})
        )
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


    render(){
        // console.log(this.props)
        const {email} = this.props
        // console.log('email', email)
        let post = this.state.comments.map((post) => {
            return (
                <CmntBoard key={post.cmnt_id} info={post} />
                // <div key={post.cmnt_id}> 
                //     <div> {post.first_name} {post.last_name} </div>
                //     <div> {post.comment} </div>
                //     <div> {post.date} </div>
                // </div>
            )
        })
        return(
            <div>
                <h5> EMAIL </h5> 
                <p> {email} </p>

                <h5> COMMENT </h5>

                <p> <textarea className="comment_box" 
                              placeholder="comment" 
                              onChange={(e) => {this.handleChange("comment", e.target.value)}}
                              type="text"
                              value={this.comments}
                           />  
                </p>
                <span> 
                    <button onClick={this.postComment} > Post </button> 
                </span>

                <span> {post} </span>
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