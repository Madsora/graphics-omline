import React, { Component } from "react";
import styles from './SignIn.module.scss'
import {Link} from "react-router-dom"
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            organization: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async(e) => {
        e.preventDefault()

        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlSVLApz_txiuExVxNIIcQJyshaL_7egY', authData)
        console.log(response.data)
        this.props.history.push('/');
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className={styles["form-page-wrapper"]}>
                <form>
                <h3>Sign In</h3>
                    <input type="email" className={styles.email} placeholder="Enter email" onChange={(e) => this.handleChangeEmail(e)}/>
                    <input type="text" className={styles.email} placeholder="Enter password" onChange={(e) => this.handleChangePassword(e)}/>
                
                    <div className={styles["custom-control-custom-checkbox"]}>
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>

                <button onClick={(e) => this.handleSubmit(e)} type="submit" className="btn btn-primary btn-block">Submit</button>

                <div className={styles["to-sign-up"]}>
                    <p className="create-account-text-left">
                        Don't have an <Link to="/sign-up">account?</Link>
                    </p>
                    <p className="forgot-password-text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
            </div>
        );
    }
}