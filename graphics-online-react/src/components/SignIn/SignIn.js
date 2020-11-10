import React, { Component } from "react";
import './SignIn.scss'

export default class Login extends Component {
    render() {
        return (
            <div className="form-page-wrapper">
                <form>
                <h3>Sign In</h3>
                    <input type="email" className="email" placeholder="Enter email" />
                    <input type="password" className="password" placeholder="Enter password" />
                
                    <div className="custom-control-custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

                <div className="to-sign-up">
                    <p className="create-account-text-left">
                        Don't have an <a href="#">account?</a>
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