import React, { Component } from 'react';
import './style.css';
import Iframe from 'react-iframe'

class EventWedding extends Component {
    render() {
        const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

        return (
            <div className="container3 p-3">
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
                        <Iframe url={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJceAywUgtDogRcQNBaHctHf0&key=${API_KEY}`}
                        width='350'
                        height='250'
                        id='gmaps'
                        className='googleMap'
                        display='initial'
                        position='relative'/>
                    </div>

                </div>

            </div>
        )
    }

}

export default EventWedding;
