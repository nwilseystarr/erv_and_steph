import React, { Component } from 'react';
import './style.css';

class ParkingAndTransport extends Component {
    render() {
        return (
            <div className="container8 p-3">
                <div className="row">
                    <div className="col auto">
                        <div className="sectionTitle mb-5">
                            Parking and Transportation
                        </div>
                    </div>
                </div>
                <div className="row auto">
                    <div className="col auto">
                        From the hotels please utilize Uber or Lyft to get to the venue. 
                        <br />
                        If driving to venue use street parking. Do NOT park in the lot across the street, it is not associated with the venue.
                    </div>
                </div>
            </div>
        )
    }
}

export default ParkingAndTransport;
