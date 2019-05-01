import React, { Component } from 'react';


class Dice extends Component{
    constructor(props){
        super(props)
        this.state = {
            // diceNum: 1
        }
    }


    // rolldice = () => {
    //     let { diceNum } = this.state
    //     let random = Math.floor(Math.random()*6+1)
    //     this.setState({diceNum: random})
    // }


    render() {
        let { rollFunction, randomNum} = this.props
        return(
            <div>
                <div>
                    <h3>{randomNum}</h3>
                </div>
            </div>
        );
    }
}

export default Dice
