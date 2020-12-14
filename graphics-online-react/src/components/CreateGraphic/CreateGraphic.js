import React, { Component } from "react";
import styles from './CreateGraphic.module.scss'
import Navbar from '../Navbar/Navbar'
import { Alert, AlertTitle } from '@material-ui/lab';

export default class CreateGraphic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantityOfShift: 0,
            created: false
        }
    }

    handleChangeQuantity = (e) => {
        this.setState({
            quantityOfShift: e.target.value
        })
    }

    handleOnCreateClick = (e) => {
        this.setState({
            created: true
        })
    }

    getInputs(amount) {
        let returningInput = []

        for(let i = 0; i < amount; i++) {
            returningInput.push(<div key={i} className={styles["date-block"]}>
                <input type="date"/>
                <input type="number" min="1" max="24"/>
                <input type="number" min="1" max="24"/>
            </div>)
        }

        return returningInput
    }

    render() {
        console.log(this.state.quantityOfShift)
        return (
            <div>
                <Navbar></Navbar>
                <div className={styles["wrapper"]}>
                    <div className={styles.content}>
                        Create graphic for..
                        <select className={styles["select-css"]}>
                            <option value="Nicole">Nicole</option>
                            <option value="Violet">Violet</option>
                            <option defaultValue="Radion">Radion</option>
                            <option value="Fred">Fred</option>
                        </select>
                        <div className={styles["calculate-block"]}>
                            <div>Enter quantity of shift -</div>
                            <input onChange={(e) => this.handleChangeQuantity(e)} value={this.state.quantityOfShift} type="number" min="0" max="7"/>
                        </div>
                        <div className={styles.info}>
                            <div>Date of shift</div>
                            <div>Start time</div>
                            <div>End time</div>
                        </div>
                        {this.getInputs(this.state.quantityOfShift).map((element) => element)}
                        <div className={styles["buttons-block"]}>
                                <button onClick={(e) => this.handleOnCreateClick(e)}>Create</button>
                        </div>
                        {this.state.created ?
                            <Alert severity="success">
                                Graphic Successfully creaeted!
                            </Alert>
                        : <div></div>}
                    </div>
                </div>
            </div>
        )
    }
}