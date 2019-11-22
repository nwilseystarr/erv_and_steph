import React, { Component } from 'react';
import './style.css';
import jw from './jwmarriott.jpeg';
import wcc from './wcitycenter.jpeg';

class WhereToStay extends Component {
    render() {
        return (
            <div className="container6 p-3">
                <div className="row">
                    <div className="col auto">
                        <div className="sectionTitle mb-5">
                            Where To Stay
                        </div>
                    </div>
                </div>
                <div className="row auto">
                    <div className="col auto">
                        We have secured special rates at the following hotels.
                        <br />
                        The last day to book rooms is February 7th, 2020. 
                    </div>
                </div>
                {/*Row One*/}
                <div className="row auto">
                    {/*Col One*/}
                    <div className="col auto">
                            JW Marriott
                    </div>
                    {/*Col Two*/}
                    <div className="col auto">
                            W City Center
                    </div>
                </div>
                {/*Row Two*/}
                <div className="row auto">
                    {/*Col One*/}
                    <div className="col auto">
                        <a href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1570827683289&key=GRP&app=resvlink" target="_blank" rel="noopener noreferrer">
                            <img className= 'regPic' src={jw} alt=" " />
                        </a>
                    </div>
                    {/*Col Two*/}
                    <div className="col auto">
                            <a href="https://book.passkey.com/gt/217714787?gtid=850ab8b8c4dabbe423d4dd21a94a99e7" target="_blank" rel="noopener noreferrer">
                                <img className= 'regPic' src={wcc} alt=" " />
                            </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhereToStay;
