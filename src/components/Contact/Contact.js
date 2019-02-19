import React, {Component} from 'react';
import axios from 'axios';
import './Contact.css'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: []
        }
    }

    componentDidMount(){
        axios.get('/api/messages').then( res =>
            this.setState({comments: res.data})
        )
    }


    render(){
        let post = this.state.comments.map((post) => {
            return (
                <div key={post.cmnt_id}> 
                    <div> {post.comment} </div>
                </div>
            )
        })
        return(
            <div>
                <h5> NAME </h5>

                <p> <input placeholder="name" />  </p>

                <h5> EMAIL </h5> 

                <p> <input placeholder="email" />  </p>

                <h5> COMMENT </h5>

                <p> <input className="comment_box" 
                           placeholder="comment" 
                           />  
                </p>
                <span> <button> Post </button> </span>

                <span> {post} </span>
            </div>
        )
    }
}

export default Contact