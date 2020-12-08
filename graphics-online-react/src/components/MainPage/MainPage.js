import React, { Component } from "react";
import styles from './MainPage.module.scss'
import Navbar from '../Navbar/Navbar'
import ContentPage from '../ContentPage/ContentPage'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 1,
            email: 'qwerty@gmail.com',
            username: 'Violet',
            organization: 'The SUN'
        }
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className={styles["block-hello"]}>
                    <ContentPage text={`Welcome, ${this.state.username}!`} role={0} nameOfLink={''} link={''}></ContentPage>
                </div>
                <div className={styles["block-create"]}>
                    <ContentPage text={'You can create a new graphic..'} role={this.state.role} nameOfLink={'Create..'} link={'/create'}></ContentPage>
                </div>
                <div className={styles["block-graph"]}>
                    <ContentPage text={'Let\'s have a look at yours graphic..'} role={this.state.role} nameOfLink={'Look..'} link={'/graph'}></ContentPage>
                </div>
                <div className={styles["block-bas"]}>
                    <ContentPage text={'What about Bonuses&Penalties? ;)'} role={this.state.role} nameOfLink={'B&P'} link={'/bas'}></ContentPage>
                </div>
                <div className={styles["block-us"]}>
                    <ContentPage text={'This website is designed to simplify and automate work with shift schedules for both employers and employees. Our team - Anna&Daryna.'} role={0} nameOfLink={''} link={''}></ContentPage>
                </div>
                               
            </div>
        )
    }
}