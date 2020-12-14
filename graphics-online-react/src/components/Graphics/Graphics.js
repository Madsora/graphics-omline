import React, { Component } from "react";
import styles from './Graphics.module.scss'
import Navbar from '../Navbar/Navbar'
import GraphicComponent from '../GraphicComponent/GraphicComponent'

export default class Graphics extends Component{
    constructor(props)
    {
        super(props);
        this.state = {dayArray: [{day:"MONDAY", workers:["1", "2", "3"]}, {day:"TUESDAY", workers:["4", "5", "6"]}, {day:"WEDNESDAY", workers:["7", "8", "9"]},
        {day:"THURSDAY", workers:["10", "11", "12"]},{day:"FRIDAY", workers:["13", "14", "15"]},{day:"SATURDAY", workers:["16", "17", "18"]},
        {day:"SUNDAY", workers:["19", "20", "21"]}]}
    }
    render()
    {
        return(
            <div className={styles.wrapper}>
                <Navbar/>
                <div className={styles["main-content-wrapper"]}>
                {
                    this.state.dayArray.map((val,i) =>{
                          return(
                              <GraphicComponent day={val.day} workers={val.workers}/>
                            )}
                    )}
                </div>
            </div>
        )
    }
}