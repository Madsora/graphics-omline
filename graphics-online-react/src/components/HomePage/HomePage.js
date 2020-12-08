import React, { Component } from "react";
import Navbar from '../Navbar/Navbar'
import styles from './HomePage.module.scss'

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
            <div>
                <Navbar/>
            </div>
        );
    }
}