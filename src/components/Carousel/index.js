import React, { Component } from 'react';
import './style.css';
// import image1 from './image1.jpg';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';

export class Carousel extends Component {
    render() {
        return (
            <div className="container p-3">
                <div className="row blog">
                    <div className="col-md-12">
                        <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                            {/* <ol className="carousel-indicators">
                                <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#blogCarousel" data-slide-to="1"></li>
                            </ol> */}

                            {/* <!-- Carousel items --> */}
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        {/* <div className="col-md-3">
                                            <img src={image1} alt=" " />
                                        </div> */}
                                        <div className="col-md-3">
                                            <img className="carPic" src={image1} alt=" " />
                                        </div>
                                        <div className="col-md-3 cute image3">
                                            <img className="carPic" src={image2} alt=" " />
                                        </div>
                                        <div className="col-md-3 cute">
                                            <img className="carPic" src={image3} alt=" " />
                                        </div>
                                        <div className="col-md-3 cute">
                                            <img className="carPic" src={image4} alt=" " />
                                        </div>
                                    </div>
                                    {/* <!--.row--> */}
                                </div>

                                {/* <!--.item--> */}
                                {/* <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src={image1} alt=" " />
                                        </div>
                                        <div className="col-md-3">
                                            <img src={image2} alt=" " />
                                        </div>
                                        <div className="col-md-3">
                                            <img src={image3} alt=" " />
                                        </div>
                                        <div className="col-md-3">
                                            <img src={image4} alt=" " />
                                        </div>
                                    </div> */}
                                    {/* <!--.row--> */}
                                {/* </div> */}
                                {/* <!--.item--> */}


                            </div>
                            {/* <!--.carousel-inner--> */}
                        </div>
                        {/* <!--.Carousel--> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;
