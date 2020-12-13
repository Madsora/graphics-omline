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
                        <li>{this.props.workers[0]}</li>
                        <li>{this.props.workers[1]}</li>
                        <li>{this.props.workers[2]}</li>
                    </ul>
                </div>
            </div>
        )
    }
}