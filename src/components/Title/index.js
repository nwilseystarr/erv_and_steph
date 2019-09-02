import React, { Component } from 'react';
import Countdown from '../Countdown';
import './style.css';

class Title extends Component {
    render() {
        return (
            <div className="container2">
                <br />
                <div className="countdown">
                <Countdown date={`2020-02-29T17:00:00`} />
                <br />
                </div>
            </div>
        )
    }
}

export default Title;
