import React, { Component } from 'react';
import './RightSide.css';

class RightSide extends Component {

    constructor(props) {
        super(props);
    
        this.state = {

            //this is all for left-to-right interaction**
            // points: [
            //     {x: 740, y: 110},
            //     {x: 750, y: 120},
            //     {x: 660, y: 130},
            //     {x: 690, y: 190},
            //     {x: 630, y: 130}
            // ],

            //this sets the original styles for the divs

            styleLancaster: {
                // if I try calling this.props.json.locations.xLocation, nothing happens:(
                left: 740,
                top: 110,
                width: "40px",
                height: "40px",
                backgroundImage: "url(" + "./images/pin.png" +")",
                backgroundSize: "cover",
                backgroundRepeat: "noRepeat",
                backgroundPosition: "center",
                position: "absolute",
                cursor: "pointer"
            },

            styleHockessin: {
                left: 750,
                top: 120,
                width: "40px",
                height: "40px",
                backgroundImage: "url(" + "./images/pin.png" +")",
                backgroundSize: "cover",
                backgroundRepeat: "noRepeat",
                backgroundPosition: "center",
                position: "absolute",
                cursor: "pointer"
            },

            styleCincinnati: {
                left: 660,
                top: 130,
                width: "40px",
                height: "40px",
                backgroundImage: "url(" + "./images/pin.png" +")",
                backgroundSize: "cover",
                backgroundRepeat: "noRepeat",
                backgroundPosition: "center",
                position: "absolute",
                cursor: "pointer"
            },

            styleCharlotte: {
                left: 690,
                top: 190,
                width: "40px",
                height: "40px",
                backgroundImage: "url(" + "./images/pin.png" +")",
                backgroundSize: "cover",
                backgroundRepeat: "noRepeat",
                backgroundPosition: "center",
                position: "absolute",
                cursor: "pointer"
            },

            styleIndianapolis: {
                left: 630,
                top: 130,
                width: "40px",
                height: "40px",
                backgroundImage: "url(" + "./images/pin.png" +")",
                backgroundSize: "cover",
                backgroundRepeat: "noRepeat",
                backgroundPosition: "center",
                position: "absolute",
                cursor: "pointer"
            },

            //this is for left-to-right interaction AND left-to-left**
            //this intitializes the popup div
            popup: {},

            //this is all for right-to-left interaction**
            //this stores the state of the pin so when clicked, it sends this value to the left side
            pin1: "Lancaster",
            pin2: "Hockessin",
            pin3: "Cincinnati",
            pin4: "Charlotte",
            pin5: "Indianapolis"
        }
    }

    //this is all for left-to-right interaction**
    //this updates the component after the first option is clicked when the original 
    //value is an empty string
    componentWillUpdate(nextProps, nextState) {
        if (this.props.location === ""){
            var e = this.props.location
            setTimeout( () => { this.changeClass(e) }, 10);
        }
    }

    // this updates the component if another option is clicked
    componentDidUpdate(prevProps) {
        if(this.props.location !== prevProps.location) {
            var e = this.props.location
            setTimeout( () => { this.changeClass(e) }, 10);

            // how do I change the other classes back when one is highlighted?
            // var x = prevProps.location
            // setTimeout( () => { this.changeClassBack(e, x) }, 10);
        }
    }

    //this function is called when the props from the left changes
    //this resets the pin styles as well as the popup styles
    changeClass(e) {
        if (e === "Lancaster") {
            this.setState({
                styleLancaster: {
                    left: 740,
                    top: 110,
                    width: "40px",
                    height: "40px",
                    backgroundImage: "url(" + "./images/pinRed.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute",
                    cursor: "pointer"
                }
            })

            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/lancaster.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if (e === "Hockessin") {
            this.setState({
                styleHockessin: {
                    left: 750,
                    top: 120,
                    width: "40px",
                    height: "40px",
                    backgroundImage: "url(" + "./images/pinRed.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute",
                    cursor: "pointer"
                }
            })

            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/hockessin.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if (e === "Cincinnati") {
            this.setState({
                styleCincinnati: {
                    left: 660,
                    top: 130,
                    width: "40px",
                    height: "40px",
                    backgroundImage: "url(" + "./images/pinRed.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute",
                    cursor: "pointer"
                }
            })

            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/cincinnati.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if (e === "Charlotte") {
            this.setState({
                styleCharlotte: {
                    left: 690,
                    top: 190,
                    width: "40px",
                    height: "40px",
                    backgroundImage: "url(" + "./images/pinRed.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute",
                    cursor: "pointer"
                }
            })

            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/charlotte.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if (e === "Indianapolis") {
            this.setState({
                styleIndianapolis: {
                    left: 630,
                    top: 130,
                    width: "40px",
                    height: "40px",
                    backgroundImage: "url(" + "./images/pinRed.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute",
                    cursor: "pointer"
                }
            })

            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/indianapolis.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        }        
    }
    //this is all for left-to-right interaction**

    

    render() {
        // console.log(this.props.location);
        console.log(this.props.json);

        return (
            <div className="rightSide">
                {/* how do I store these points in something like a PointStore
                and automatically load them?? */}
                {/* <div className="points"> */}
                    <div style={this.state.styleLancaster} onClick={() => { this.mapClick(this.state.pin1) }}></div>
                    <div style={this.state.styleHockessin} onClick={() => { this.mapClick(this.state.pin2) }}></div>
                    <div style={this.state.styleCincinnati} onClick={() => { this.mapClick(this.state.pin3) }}></div>
                    <div style={this.state.styleCharlotte} onClick={() => { this.mapClick(this.state.pin4) }}></div>
                    <div style={this.state.styleIndianapolis} onClick={() => { this.mapClick(this.state.pin5) }}></div>
                    <div style={this.state.popup}></div>
                {/* </div> */}
            </div>
        );
      }

      //this is all for right-to-left interaction AND left-to-left for popup**
      mapClick(locationNew) {
        this.props.clickedNew(locationNew);
        var i = locationNew;

        if ( i === "Lancaster") {
            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/lancaster.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if ( i === "Hockessin") {
            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/hockessin.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if ( i === "Cincinnati") {
            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/cincinnati.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if ( i === "Charlotte") {
            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/charlotte.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        } else if ( i === "Indianapolis") {
            this.setState({
                popup: {
                    left: 5,
                    top: 5,
                    width: "50%",
                    height: "90%",
                    backgroundImage: "url(" + "./images/indianapolis.png" +")",
                    backgroundSize: "cover",
                    backgroundRepeat: "noRepeat",
                    backgroundPosition: "center",
                    position: "absolute"
                }
            })
        }
    }
}

export default RightSide;