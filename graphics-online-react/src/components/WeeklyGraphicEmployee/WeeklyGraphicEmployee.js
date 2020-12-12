import React, { Component } from "react";
import styles from './WeeklyGraphicEmployee.module.scss'
import { Link } from "react-router-dom";

export default class GraphicsEmployee extends Component {
    render() {
        return (
            <div className={styles["wrapper"]}>
                <div className={styles["date-block"]}>
                    <div className={styles.day}>monday (14.12.20)</div>
                    <div className={styles.time}>8 a.m. - 2 p.m.</div>
                </div>
                <div className={styles["date-block"]}>
                    <div className={styles.day}>wednesday (16.12.20)</div>
                    <div className={styles.time}>8 a.m. - 2 p.m.</div>
                </div>
                <div className={styles["date-block"]}>
                    <div className={styles.day}>saturday (19.12.20)</div>
                    <div className={styles.time}>11 a.m. - 4 p.m.</div>
                </div>
                <div className={styles["link-block"]}>
                    <Link to="/modify-employee" className={styles.link}>modify</Link>
                    <Link to="/graph-month" className={styles.link}>month...</Link>
                </div>
            </div>
        )
    }
}