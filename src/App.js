import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Carousel from './components/Carousel';
import image2 from './components/Carousel/image2.png';
import Title from './components/Title';
import EventWedding from './components/EventWedding';
import Registry from './components/Registry';
// import WeddingPartyWrapper from './components/WeddingPartyWrapper';
// import WeddingParty from './components/WeddingParty';
import WeddingParty2 from './components/WeddingParty2';
import About from './components/About';
import stephPeople from './stephPeople';
import ervPeople from './ervPeople';
import Media from "react-media";
import Footer from './components/Footer';
// import logo from './logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stephPeople,
      ervPeople
    }
  };

  render() {
    return (
      <div className="App">
        <div className="mb-3"> <Navbar /> </div>
        {/* <img className="marginLogo" src={logo} alt="Logo" /> */}
        <Media query="(max-width: 500px)">
          {matches =>
            matches ? (
              <div className="col-md-3 carImage">
                <img src={image2} alt=" " />
              </div>
            ) : (
                <Carousel className="carousel" />
              )
          }
        </Media>
        <Title />
        <div className="details"> <EventWedding />  </div>
        <div className="registry"> <Registry /></div>
        <div className="p-2 people"> <WeddingParty2 /> </div>
        <div className="about"> <About /> </div>
        {/* <WeddingPartyWrapper>
          <div className="row justify-content-md-center weddingParty">
            <div className="col">
              {this.state.stephPeople.map(stephPeople => (
                <WeddingParty
                  key={stephPeople.id}
                  id={stephPeople.id}
                  name={stephPeople.name}
                  image={stephPeople.image} />
              ))}
            </div>
            <div className="col">
              {this.state.ervPeople.map(ervPeople => (
                <WeddingParty
                  key={ervPeople.id}
                  id={ervPeople.id}
                  name={ervPeople.name}
                  image={ervPeople.image} />
              ))}
            </div>
          </div>
        </WeddingPartyWrapper> */}
        <div className="pt-2"><Footer /></div>
      </div>
    );
  }
}

export default App;
