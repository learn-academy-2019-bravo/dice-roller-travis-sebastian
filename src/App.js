import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dice from './dice.js'
import Log from './dicelog.js'

class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                diceLogMaster: [[]],
                extraDice: [],
                diceNum: 1,
                diceId: 0,
                currentDiceId: 0,
                individualDiceLogs:[],
            }
    }
    logandroll = () => {
        this.rolldice()
        this.logHandlerMaster()
    }
    logHandlerMaster = () => {
        let {diceNum, diceLogMaster, currentDiceId, diceId} = this.state
        diceLogMaster[diceId].push(diceNum)
        this.setState({diceLogMaster: diceLogMaster})
        console.log(diceLogMaster);
        console.log(currentDiceId);

    }
    rolldice = () => {
        let { picInd, diceId, currentDiceId} = this.state
        this.setState({currentDiceId: diceId})
        let random = Math.floor(Math.random()*6+1)
        let picselect = random -1
        this.setState({diceNum: random})
        this.setState({picInd: picselect})


    }
    logHandler = () =>{
        let {individualDiceLogs, diceNum} = this.state
        individualDiceLogs.push(diceNum)
        this.setState({individualDiceLogs: individualDiceLogs})

    }
    refreshState = () =>{
        let { diceLogMaster ,diceId} = this.state
        this.setState ({ diceLogMaster : [[]] })
        this.setState({diceId: 0})

    }
    addDice = () => {
        let {extraDice, diceNum, picInd, picLog, diceId,  diceLogMaster, currentDiceId} = this.state
        let staticDiceId = {diceId}
        // let dicelogic = diceId < 0 ? 0 : diceId;
        this.setState({diceId: staticDiceId})
        extraDice.push(<Dice diceId={staticDiceId}
        logandroll = {this.logandroll}
        rolldice = {this.rolldice}
        diceNum= {diceNum}
        picInd = {picInd}
        picLog = {picLog}/>)
        let updatedArr = diceLogMaster.push([])
        this.setState({diceLogMaster: diceLogMaster})
        this.setState({extraDice: extraDice})
        this.setState({diceId: diceId +1})
}
    removeDice = () => {
        let { extraDice, diceId, currentDiceId } = this.state
            let dicelogic = diceId < 0 ? 0 : diceId;
            extraDice.pop()
            this.setState({extraDice: extraDice})
            this.setState({dicelogic: diceId -1})
        }
        //roll all dice
        // remove dice
        //add game
        //remove game

    render(){
        let { diceNum, diceLogMaster, picLog, picInd, extraDice, individualDiceLogs} = this.state
      return (
        <div className="App">
            <h1>DiceRoller</h1>
            <div className = "row">
              <div className = "card col-sm-6">
                  <Dice
                  logandroll = {this.logandroll}
                  rolldice = {this.rolldice}
                  diceNum= {diceNum}
                  picInd = {picInd}
                  picLog = {picLog}/>
                  <div>{extraDice}</div>
                  <button onClick= {this.addDice}>Add A Dice to Game</button>
                  <button onClick= {this.removeDice}>Remove A Dice from Game</button>
              </div>
              <div className = "card col-sm-6">
                  <Log
                  rollLog = {diceLogMaster}/>
                  <button className = "btn btn-primary" id = "refreshbtn"onClick = {this.refreshState}>Refresh Log</button>
                </div>
                <div>

                </div>

            </div>
        </div>
      );
    }
}
export default App;
