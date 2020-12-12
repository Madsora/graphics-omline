import React, { Component } from "react";
import styles from './MainPage.module.scss'
import Navbar from '../Navbar/Navbar'
import ContentPage from '../ContentPage/ContentPage'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 1,
            email: 'izogid43@gmail.com',
            username: 'Nicole',
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
                {(this.state.role == 1) ?
                <div className={styles["block-create"]}>
                    <ContentPage text={'You can create a new graphic..'} role={this.state.role} nameOfLink={'Create..'} link={'/create'}></ContentPage>
                </div>
                : <div></div>}
                
                <div className={styles["block-graph"]}>
                    <ContentPage text={'Let\'s have a look at yours graphic..'} role={1} nameOfLink={'Look..'} link={'/graphic'}></ContentPage>
                </div>
                <div className={styles["block-bas"]}>
                    <ContentPage text={'What about Bonuses&Penalties? ;)'} role={1} nameOfLink={'B&P'} link={'/bas'}></ContentPage>
                </div>
                <div className={styles["block-us"]}>
                    <ContentPage text={'This website is designed to simplify and automate work with shift schedules for both employers and employees. Our team - Anna&Daryna.'} role={0} nameOfLink={''} link={''}></ContentPage>
                </div>
                               
            </div>
        )
    }
}