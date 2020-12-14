import React, { Component } from "react";
import Navbar from '../Navbar/Navbar'
import styles from './Changes.module.scss' 
import { Alert, AlertTitle } from '@material-ui/lab';

export default class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            submitButtonClicked: false,
            isSent: false
        }
    }
    onSearchHandler = (e) =>{
        this.setState({
            submitButtonClicked: true
          })
    }
    onSendHandler = (e) =>{
        this.setState({
            isSent: true
          })
    }
    render()
    {
        return(
            <div className={styles["wrapper"]}>
                <Navbar/>
                <div className={styles["change-wrapper"]}>
                    <div className={styles["change-card"]}>
                        <h1 align="center">CHANGE YOUR WORK SHIFT</h1>
                        <div className={styles["content-changes"]}>
                            <input className={styles["datetime-field"]} type="datetime-local"></input>
                            <button onClick={this.onSearchHandler}>SEARCH</button>
                        </div>
                            {
                                this.state.submitButtonClicked &&
                                <div className={styles["choose-worker-and-submit"]}>
                                    <select className={styles["select-css"]}>
                                        <option value="Nicole">Nicole</option>
                                        <option value="Violet">Violet</option>
                                        <option defaultValue="Radion">Radion</option>
                                        <option value="Fred">Fred</option>
                                    </select>
                                    <button onClick={this.onSendHandler}>SEND</button>
                                    {this.state.isSent &&
                                        <Alert severity="success">
                                            Request sent successfully!
                                        </Alert>
                                    }
                                </div>
                            }
                    </div>
                </div>
            </div>
        );
    }
}