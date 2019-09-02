import React, { Component } from 'react';
import './style.css';

export class Footer extends Component {
    render() {
        return (
            <div className='footer mt-3'>
                Created with love by Nicole Wilsey Starr | <a className="footerLink"href="nicolewstarr.com" target="_blank">nicolewstarr.com</a>
            </div>
        )
    }
}

export default Footer;
