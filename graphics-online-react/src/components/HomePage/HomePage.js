import React, { Component } from "react";
import Navbar from '../Navbar/Navbar'
import styles from './HomePage.module.scss'
import avatar from '../../img/new-profile.jpg'

export default class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            workPosition: "Doctor, therapist",
            email: 'qwerty@gmail.com',
            firstName: 'Victor',
            secondName: 'Ivanov',
            organization: 'The SUN'
        }
    }
    render()
    {
        return(
            <div className={styles.wrapper}>
                <Navbar/>
                <div className = {styles["wrapper-profile-card"]}>
                    <div className = {styles["profile-card"]}>
                        <div className = {styles["profile-image-block"]}>
                            <h1>YOUR PROFILE</h1>
                            <img className={styles['avatar']} src={avatar} alt="Your avatar" width="100%" height="60%"/>
                            <div className={styles["buttons-block"]}>
                                <button>Change photo</button>
                            </div>
                        </div>
                        <div className = {styles["profile-info-block"]}>
                            <div className={styles["info-block"]}>
                                <p className={styles["info-field"]}>FIRST NAME</p>
                                <p className={styles["info-field-value"]}>{this.state.firstName}</p>
                            </div>
                            <div className={styles["info-block"]}>
                                <p className={styles["info-field"]}>SECOND NAME</p>
                                <p className={styles["info-field-value"]}>{this.state.secondName}</p>
                            </div>
                            <div className={styles["info-block"]}>
                                <p className={styles["info-field"]}>EMAIL</p>
                                <p className={styles["info-field-value"]}>{this.state.email}</p>
                            </div>
                            <div className={styles["info-block"]}>
                                <p className={styles["info-field"]}>ORGANIZATION NAME</p>
                                <p className={styles["info-field-value"]}>{this.state.organization}</p>
                            </div>
                            <div className={styles["info-block"]}>
                                <p className={styles["info-field"]}>WORK POSITION</p>
                                <p className={styles["info-field-value"]}>{this.state.workPosition}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}