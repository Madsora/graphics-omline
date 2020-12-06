import React, { Component } from "react";
import styles from './ContentPage.module.scss'
import {Link} from 'react-router-dom'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles["wrapper"]}>
                <div className={styles.content}>
                    {this.props.text}
                    {(this.props.role == 1) ?
                    <div>
                    <Link to="/">Home</Link>
                    </div>
                    : <div></div>}
                </div>
                <hr/>
            </div>
        )
    }
}