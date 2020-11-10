import React, { Component } from "react";
import styles from './SignUp.module.scss'

export default class SignUp extends Component {
    render() {
        return (
            <div className={styles["form-page-wrapper"]}>
                <form>
                <h3>Sign Up</h3>

                    <input type="text" className={styles["form-control"]} placeholder="First name" />
                    <input type="text" className={styles["form-control"]} placeholder="Last name" />
                    <input type="email" className={styles["form-control"]} placeholder="Enter email" />
                    <input type="password" className={styles["form-control"]} placeholder="Enter password" />

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        );
    }
}