import React, { Component } from 'react';
import './App.css';
import LeftSide from './LeftSide.js';
import RightSide from './RightSide.js';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      //this is for left-to-right interaction**
      location: "",

      //this is for right-to-left interaction**
      locationNew: "",

      //initialize JSON data
      locations: {
        lancaster: "",
        hockessin: "",
        cincinnati: "",
        charlotte: "",
        indianapolis: ""
      }
    }

    // NEED TO GET JSON TO LOAD
        //load in the JSON
        //called JSON promise, takes result and turns into JSON
        fetch("data/locations.json")
          .then((result) => result.json())
          .then((data) => {
            //can get to JSON entry by calling data.name.value or data.name[array#]
            console.log(data.cincinnati.name);

            //rendering twice once without, once with values then pass to left and right side components
            this.setState({ locations: data });
          })
  }

  //this is for left-to-right interaction**
  sendLocation(location) {
    console.log(location);

    this.setState({
      location: location
    })
  }

  //this is for right-to-left interaction**
  sendLocationNew(locationNew) {
    console.log(locationNew);

    this.setState({
      locationNew: locationNew
    })
  }

  render() {
    console.log(this.state.locations.lancaster.xLocation)

    return (
      <div className="App">
        <LeftSide json = { this.state.locations } locationNew = { this.state.locationNew } clicked = { (location) => {this.sendLocation(location)}}/>

        <RightSide json = { this.state.locations } location = { this.state.location } clickedNew = { (locationNew) => {this.sendLocationNew(locationNew)} }/>

      </div>
    );
  }
}

export default App;
