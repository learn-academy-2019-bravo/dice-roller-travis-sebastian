import React, { Component } from 'react';


class Log extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {

        let { rollLog, logHandler, logandroll } = this.props
        let formattedLog =
        `${rollLog}, `
        return(
            <div>
                <div>
                    <h3>Past Rolls: {formattedLog}</h3>
                </div>
            </div>
        );
    }
}

export default Log
