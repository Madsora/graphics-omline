import React, { Component } from "react";
import styles from './Graphics.module.scss'
import Navbar from '../Navbar/Navbar'
import GraphicComponent from '../GraphicComponent/GraphicComponent'

export default class Graphics extends Component{
    constructor(props)
    {
        super(props);
        this.state = {weekArray:['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
        workersArray: [{worker:"First",time:"00:00-00:00"},{worker:"Second",time:"00:00-00:00"},{worker:"Third",time:"00:00-00:00"}]}
    }
    render()
    {
        return(
            <div className={styles.wrapper}>
                <Navbar/>
                <div className={styles["main-content-wrapper"]}>
                {
                    this.state.weekArray.map((val,i) =>{
                          return(
                              <GraphicComponent  day={val} />
                            )}
                    )}
                </div>
            </div>
        )
    }
}