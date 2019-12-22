import React, { Component } from 'react';
import './style.css';
import Iframe from 'react-iframe';

class Rsvp extends Component {
    render() {
        return (
            <div className="container7 p-3">
                <div className="row">
                    <div className="col">
                    <div className="sectionTitle mb-5">
                        <a className="btn btn-secondary btn-lg btn-block" href="http://ervandsteph.rsvpify.com">Click here to RSVP by Jan 15th</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rsvp;
