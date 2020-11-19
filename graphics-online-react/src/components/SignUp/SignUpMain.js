import React, { Component } from "react";
import styles from './SignUp.module.scss'

export default class SignUpMain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChooseButton = this.handleChooseButton.bind(this);
      }
      handleChooseButton = (btnName) => {
        if(btnName === "Employee")
        {

            this.props.history.push('/sign-up/employee');
        }
        else if(btnName === "Employer")
        {
            this.props.history.push('/sign-up/employer');
        }
    }
    render() {
        return (
            <div className={styles["form-page-wrapper"]}>
                <form>
                <h3>Sign Up</h3>
                <h4>Choose your position</h4>
                    <div className={styles["role-buttons"]}>
                        <button onClick={(e) => this.handleChooseButton("Employee")} className="btn btn-primary btn-block">Employee</button>
                        <button onClick={(e) =>this.handleChooseButton("Employer")} className="btn btn-primary btn-block">Employer</button> 
                    </div>
                </form>
            </div>
        );
    }
}