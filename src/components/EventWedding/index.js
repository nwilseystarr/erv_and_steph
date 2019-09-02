import React, { Component } from 'react';
import './style.css';
import googleMap from './googleMap.png';

class EventWedding extends Component {
    render() {
        return (
            <div className="container3">
                <div className="row">
                    <div className="col auto">
                        <div className="sectionTitle">
                            Show Up Here
                </div>
                    </div>
                </div>

                {/*Row Start*/}
                <div className="row">
                    {/*Col One*/}
                    <div className="col">
                        <div className="infoText">
                            Feb 29, 2020
                    <br />
                            6:00 PM
                    <br />
                        </div>
                        <div className="col">
                            City View Loft
                            <br />
                            324 North Leavitt Street
                            <br />

                        </div>
                    </div>


                    <div className="col">
                        <div className="googleMap">
                            <img className="mapImage" src={googleMap} alt=" " />
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}

export default EventWedding;
