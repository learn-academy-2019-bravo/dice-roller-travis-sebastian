import React, { Component } from 'react';


class Dice extends Component{
    constructor(props){
        super(props)
        this.state = {
            picLog: ["url('dice1.jpg')", "url('dice2.jpg')",
                "url('dice3.jpg')", "url('dice4.jpg')",
                "url('dice5.jpg')", "url('dice6.jpg')"],
            picInd:0,

        }
    }


    render() {
        let {  picInd,logandroll, diceNum, diceId} = this.props
        let {   picLog } = this.state
        return(
            <div>
                <div>
                    <h3>{diceNum}</h3>
                    <button id={diceId} class = "diceButton" value ={diceId} style = {{backgroundImage:picLog[picInd]}}  onClick = {this.props.logandroll}></button>
                </div>
            </div>
        );
    }
}

export default Dice
