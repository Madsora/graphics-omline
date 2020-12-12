import React, { Component } from "react";
import styles from './GraphicsEmployee.module.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom";
import WeeklyGraphicEmployee from '../WeeklyGraphicEmployee/WeeklyGraphicEmployee'
import avatar from '../../img/def_profile.jpg'

export default class GraphicsEmployee extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className={styles["wrapper"]}>
                    <div className={styles.content}>
                        <img src={avatar} alt="profile photo" className={styles.avatar}/>
                        <div className={styles["name-block"]}>anton valetievich gogol - dolzhnost</div>
                        <WeeklyGraphicEmployee></WeeklyGraphicEmployee>
                        <Link to="/graphic-employer" className={styles.link}>see main graphic..</Link>
                    </div>
                </div>
            </div>
        )
    }
}