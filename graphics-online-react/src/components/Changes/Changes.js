import React, { Component } from "react";
import Navbar from '../Navbar/Navbar'
import styles from './Changes.module.scss'

export default class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {}
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
                            <input type={Date}></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}