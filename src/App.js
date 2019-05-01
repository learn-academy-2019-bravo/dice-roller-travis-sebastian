import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dice from './dice.js'
import Log from './dicelog.js'

class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                diceLog: [],
                diceNum: 1,
                picLog: ["dice1.jpg", "dice2.jpg",
                    "dice3.jpg", "dice4.jpg",
                    "dice5.jpg", "dice6.jpg"]
            }
    }
    logandroll = () => {
        this.rolldice()
        this.logHandler()
    }
    logHandler = () => {
        let {diceLog, diceNum} = this.state
        let newRandom = diceLog.push(diceNum)
        this.setState({diceLog: diceLog})

    }
    rolldice = () => {
        // let { } = this.state
        let random = Math.floor(Math.random()*6+1)
        this.setState({diceNum: random})
    }
    render(){
        let { diceNum, diceLog} = this.state
      return (
        <div className="App">
            <h1>DiceRoller</h1>
            <div className = "row">
              <div className = "card col-sm-6">
                  <Dice
                  rollFunction = {this.rolldice}
                  randomNum = {diceNum}/>
                  <button id= "diceButton" onClick = {this.logandroll}></button>
              </div>
              <div className = "card col-sm-6">
                  <Log
                  rollLog = {diceLog}/>
                </div>
            </div>
        </div>
      );
    }
}
export default App;
