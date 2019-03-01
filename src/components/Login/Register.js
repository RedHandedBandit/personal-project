import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import {gangMember} from './../../ducks/reducer';
import './Register.css'

class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
        // console.log(this.state)
    }

    register = () => {
        const {first_name, last_name, email, password} = this.state
        axios.post('/auth/register', {first_name, last_name, email, password})
        .then( res => {
            console.log(res.data)
            this.props.gangMember(res.data)
            this.props.history.push('/')
        })
        .catch(error => {
            console.log(error, 'sorry cant register loser')
        })
    }

    render(){
        const {first_name, last_name, email, password} = this.state

        return(
            <div className="main_div"> 
                <div className="reg_div"> 
                    <div className="regInput"> 
                        <h1 className="h1_reg"> Create Account </h1>
                            <div className="all_reg"> 
                                <label className="all_labels_reg"> FIRST NAME </label>

                                <input  className="all_input_reg"
                                        onChange={(e) => this.handleChange('first_name', e.target.value)}
                                        type='text'
                                        value={first_name} />

                                <label className="all_labels_reg"> LAST NAME </label>

                                <input  className="all_input_reg"
                                        onChange={(e) => this.handleChange('last_name', e.target.value)}
                                        type='text'
                                        value={last_name} />

                                <label className="all_labels_reg"> EMAIL </label>

                                <input  className="all_input_reg"
                                        onChange={(e) => this.handleChange('email', e.target.value)}
                                        type='text'
                                        value={email} />

                                <label className="all_labels_reg"> PASSWORD </label>

                                <input  className="all_input_reg"
                                        onChange={(e) => this.handleChange('password', e.target.value)}
                                        type="password"
                                        value={password} />

                                <p> 
                                    <button className="create_btn"
                                            onClick={this.register}> Create </button> 
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {id: reduxState.id}
}

const mapDispatchToProps = {
    gangMember
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)