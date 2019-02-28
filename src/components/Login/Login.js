import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {gangMember} from './../../ducks/reducer';
import './Login.css'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    login = () => {
        const {email, password} = this.state;
        axios.post('/auth/login', {email,password})
        .then( res => {
            this.props.gangMember(res.data)
            this.props.history.push('/')
            console.log(res.data)
        }).catch(error => console.log('loser cant login', error))
    }

    logout = () => {
        axios.post('/auth/logout')
        .then(res => {
            this.props.gangMember({})
            this.props.history.push('/')
        })
        .catch(error => console.log(error))
    }


    render(){
        const {email, password} = this.state

        return(
            <div className="login" > 
                <div className="wrapping_red"> 
                    <h1 className="h1_login"> Login </h1>
                    <div className="all_input" > 
                        <label className="label_email" > EMAIL </label>

                        <div className="input_email" > 
                            <input  className="allInput_Login_register"
                                    onChange={(e) => this.handleChange('email', e.target.value)}
                                    type="text"
                                    value={email} 
                                    /> 
                        </div>

                        <label className="label_password" > PASSWORD </label>

                        <div className="input_pass" > 
                            <input  className="allInput_Login_register"
                                    onChange={(e) => this.handleChange('password', e.target.value)}
                                    type="password"
                                    value={password}
                                    /> 
                        </div>

                        <p className="wrapping_login_logout"> 
                            <button className="signIn_btn" onClick={this.login} > Sign In </button> 
                            <button className="logout_btn" onClick={this.logout}> Logout </button>
                        </p>

                        <p className="wrapping_createA"> 
                            <Link 
                                 className="createAcc_link"
                                 to="/register"> 
                                <button className="createAcc_btn"> Create Account </button> 
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        id: reduxState.id
    }
}

const dispatchToProps = {
    gangMember
}

export default connect(mapStateToProps, dispatchToProps)(Login)