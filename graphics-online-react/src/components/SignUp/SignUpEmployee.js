import React, { Component } from "react";
import styles from './SignUp.module.scss'
import axios from 'axios'

export default class SignUpEmployee extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        workPassword: ''
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async(e) =>{
        e.preventDefault()

        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }
        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlSVLApz_txiuExVxNIIcQJyshaL_7egY', authData)
        console.log(response.data)
        this.props.history.push('/');
    }

    handleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
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

    handleChangeWorkPassword = (e) => {
        this.setState({
            workPassword: e.target.value
        })
    }

    // user = [{name: "", surname: "", email: "", password: ""}];

    render() {
        return (
            <div className={styles["form-page-wrapper"]}>
                <form>
                <h3>Sign Up</h3>

                    <input type="text" className={styles["form-control"]} value="" placeholder="First name" onChange={(e) => this.handleChangeFirstName(e)}/>
                    <input type="text" className={styles["form-control"]} value="" placeholder="Last name" onChange={(e) => this.handleChangeLastName(e)}/>
                    <input type="email" className={styles["form-control"]} value="" placeholder="Enter email" onChange={(e) => this.handleChangeEmail(e)}/>
                    <input type="text" className={styles["form-control"]} value="" placeholder="Enter password" onChange={(e) => this.handleChangePassword(e)}/>
                    <input type="text" className={styles["form-control"]} value="" placeholder="Enter work password" onChange={(e) => this.handleChangeWorkPassword(e)}/>

                    <button onClick={(e) => this.handleSubmit(e)} className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}