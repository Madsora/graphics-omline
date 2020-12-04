import React, { Component } from "react";
import styles from './SignUp.module.scss'
export default class SignUpEmployer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleSubmit=() =>{
        this.setState({users: [{}]})
        this.props.history.push('/');
    }
    render() {
        return (
            <div className={styles["form-page-wrapper"]}>
                <form>
                <h3>Sign Up</h3>

                    <input type="text" className={styles["form-control"]} placeholder="First name" />
                    <input type="text" className={styles["form-control"]} placeholder="Last name" />
                    <input type="email" className={styles["form-control"]} placeholder="Enter email" />
                    <input type="password" className={styles["form-control"]} placeholder="Enter password" />
                    <input type="text" className={styles["form-control"]} placeholder="Enter name of your organization" />

                    <button onClick={(e) => this.handleSubmit()} className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}