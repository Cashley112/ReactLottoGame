import React, { Component } from 'react'
import LotteryBall from './LotteryBall'
import './Lottery.css'

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = { num : 1 }
        
    }
    displayBalls() {
        for (let i = 0; i < this.props.numBalls; i++){
            <LotteryBall />
        }
    }
    render () {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div className="Lottery-Balls">
                    <LotteryBall />
                    <LotteryBall />
                    <LotteryBall />
                </div>
                <button>Generate</button>
            </div>
        )
    }
}

export default Lottery;