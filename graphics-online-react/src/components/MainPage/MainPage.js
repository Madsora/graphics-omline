import React, { Component } from "react";
import styles from './MainPage.module.scss'
import Navbar from '../Navbar/Navbar.js'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            organization: ''
        }
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div>Hello, @username!</div>
                <div>Create graph</div>
                <div>Look at graph</div>
                <div>shtrafuANDbonusy</div>
                <div>Obmen smenamu</div>
            </div>
        )
    }
}