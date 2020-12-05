import React, { Component } from "react";
import styles from './SignUp.module.scss'
import axios from 'axios'

export default class SignUpEmployer extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            organization: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async(e) => {
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

    handleChangeOrganization = (e) => {
        this.setState({
            organization: e.target.value
        })
    }

    render() {
        return (
            <div className={styles["form-page-wrapper"]}>
                <form>
                <h3>Sign Up</h3>

                    <input type="text" className={styles["form-control"]} placeholder="First name" onChange={(e) => this.handleChangeFirstName(e)}/>
                    <input type="text" className={styles["form-control"]} placeholder="Last name"  onChange={(e) => this.handleChangeLastName(e)}/>
                    <input type="email" className={styles["form-control"]} placeholder="Enter email" onChange={(e) => this.handleChangeEmail(e)}/>
                    <input type="text" className={styles["form-control"]} placeholder="Enter password" onChange={(e) => this.handleChangePassword(e)}/>
                    <input type="text" className={styles["form-control"]} placeholder="Enter name of your organization" onChange={(e) => this.handleChangeOrganization(e)}/>

                    <button onClick={(e) => this.handleSubmit(e)} className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}