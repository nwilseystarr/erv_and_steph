import React, { Component } from 'react';
import './style.css';
import kindergarten from './kindergarten.png';

export class About extends Component {
    render() {
        return (
            <div>
                <div className='sectionTitle'>
                    How We Met
            </div>
                {/* <div className='aboutUs'>
                    In Kindergarten...
            </div> */}
                <div>
                    <img className="aboutPic" src={kindergarten} alt="Steph and Erv as childern with classmates" />
                </div>
            </div>
        )
    }
}

export default About;
