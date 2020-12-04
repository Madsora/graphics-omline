import React, { Component } from "react";
import styles from './SignUp.module.scss'

export default class SignUpEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {};
     //   this.handleSubmit = this.handleSubmit.bind(this);
      }
    // handleSubmit=() =>{
    //     user.name = 
    //     this.props.history.push('/');
    // }
    // user = [{name: "", surname: "", email: "", password: ""}];
    render() {
        return (
            <div className={styles["form-page-wrapper"]}>
                <form>
                <h3>Sign Up</h3>

                    <input type="text" className={styles["form-control"]} value="" placeholder="First name" />
                    <input type="text" className={styles["form-control"]} value="" placeholder="Last name" />
                    <input type="email" className={styles["form-control"]} value="" placeholder="Enter email" />
                    <input type="password" className={styles["form-control"]} value="" placeholder="Enter password" />
                    <input type="text" className={styles["form-control"]} value="" placeholder="Enter work password" />

                    <button onClick={(e) => this.handleSubmit()} className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}