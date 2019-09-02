import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './style.css';

export class Navbar extends Component {
    render() {
        return (
            <div>
                        <nav className="navbar navbar-expand-md navbar-light fixed-top border-bottom p-1 pr-3">
                        <a className="navbar-brand py-0" href="/">
                        <div className="sectionTitle">
                            Erv & Steph
                </div>
                            {/* <img src={logo} width="70" height="70" className="d-inline-block align-top" alt="S&amp;E" /> */}
                        </a>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav ml-2">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="details"
                                        smooth={true}
                                        spy={true}
                                        offset={-120}
                                        duration={500}
                                    >
                                        Show Up Here
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="registry"
                                        smooth={true}
                                        spy={true}
                                        offset={-80}
                                        duration={500}
                                    >
                                        Stuff We Want
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="people"
                                        smooth={true}
                                        spy={true}
                                        offset={-80}
                                        duration={500}
                                    >
                                        People We Like
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="weddingParty"
                                        smooth={true}
                                        spy={true}
                                        offset={-80}
                                        duration={500}
                                    >
                                        Where To Stay
                                    </Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="about"
                                        smooth={true}
                                        spy={true}
                                        offset={-80}
                                        duration={500}
                                    >
                                        How We Met
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link
                                        className="nav-link mr-3"
                                        activeClass="active-link"
                                        to="weddingParty"
                                        smooth={true}
                                        spy={true}
                                        offset={-80}
                                        duration={500}
                                    >
                                        RSVP
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
            </div>
        )
    }
}

export default Navbar
