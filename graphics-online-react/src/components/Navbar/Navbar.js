import React, { Component } from "react";
import styles from './Navbar.module.scss'
import {Link} from "react-router-dom"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles["navbar-wrapper"]}>
                <div className={styles.name}>GraphicsOnline</div>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/profile">Profile</Link>
                <Link className={styles.link} to="/graphic">Graphic</Link>
                <Link className={styles.link} to="/bas">BonusesANDPenalties</Link>
            </div>
        )
    }
}