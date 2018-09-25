import React, { Component } from 'react';
import './App.css';
import Subheading from './Subheading/Subheading';
import Row from './Row/Row';
import Record from './Record/Record';

class App extends Component {
  render() {
    return (
      <div className="heading container-fluid">
        <div className="row headingRow">
          <div className="icon align-middle col-md-2">
            <br></br>
            <img className="iconImg img-fluid center-block" src="recordicon.png" alt="record icon"></img>
          </div>
          <div className="heading col-md-6 text-left">
            <br></br>
            <h1 className="title ">Top 5 Records</h1>
            <h3 className="subTitle">A Tribute to High Fidelity</h3>
            <h6 className="copyright"><i class="fas fa-copyright"></i> <a href="https://www.amazon.com/High-Fidelity-Nick-Hornby/dp/1573225517" target="_blank" rel="noopener noreferrer">High Fidelity</a>, 1996</h6>
            <h6 className="copyright"><i class="fas fa-copyright"></i> <a href="http://www.imdb.com/title/tt0146882/" target="_blank" rel="noopener noreferrer">High Fidelity</a>, 2000</h6>
            <br></br>
          </div>
        </div>
        <Subheading></Subheading>
        <Row>
          <Record image="stroke9Album.png" music="NotNothing.m4a" artist="Stroke 9" song="Not Nothin'" album="Nasty Little Thoughts"></Record>
          <Record image="eve6Album.png" music="amphetamines.m4a" artist="Eve 6" song="Amphetamines" album="Horrorscope"></Record>
          <Record image="refreshmentsAlbum.png" music="blueCOllarSuicide.mp4" artist="The Refreshments" song="Blue Collar Suicide" album="Horrorscope"></Record>
          <Record image="letterstocleoAlbum.png" music="peteBeat.m4a" artist="Letters to Cleo" song="Pete Beat" album="Sister"></Record>
          <Record image="emmetswimming.png" music="arlington.m4a" artist="Emmet Swimming" song="Arlington" album="Arlington to Boston"></Record>
        </Row>
      </div>
    );
  }
}

export default App;
