import React, { Component } from 'react';
import './LotteryBall.css';

class LotteryBall extends Component {
    render () {
        return (
            <div className="LotteryBall">
                <h1>{this.props.num}</h1>
            </div>
        )
    }
}

export default LotteryBall;