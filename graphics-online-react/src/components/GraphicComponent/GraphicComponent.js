import React, { Component } from "react";
import styles from './GraphicComponent.module.scss'

export default class Graphics extends Component{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render()
    {
        return(
            <div className={styles['graphic-component-wrapper']}>
                <h1 align="center">{this.props.day}</h1>
                <div className={styles['workers-list-block']}>
                    <ul>
                        <li>Alan Walker, 14:00-16:00</li>
                        <li>fghjl</li>
                        <li>fghjl</li>
                    </ul>
                </div>
            </div>
        )
    }
}