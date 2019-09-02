import React, { Component } from 'react';
import './LeftSide.css';

class LeftSide extends Component {

    constructor(props) {
        super(props);
    
        this.state = {

            //this is for left-to-right interaction**
            //this stores the value to send to the right side when clicked
            location1: "Lancaster",
            location2: "Hockessin",
            location3: "Cincinnati",
            location4: "Charlotte",
            location5: "Indianapolis",

            //this is for right-to-left interaction**
            // how do I set the same values for different states?
            //this sets the original styles for the buttons
            styleLancaster: {
                backgroundColor: "black",
                padding: "15px",
                borderRadius: "50%",
                border: "2px solid gray",
                width: "30%",
                cursor: "pointer",
                display: "block",
                margin: "0 auto",
                color: "white"
            },

            styleHockessin: {
                backgroundColor: "black",
                padding: "15px",
                borderRadius: "50%",
                border: "2px solid gray",
                width: "30%",
                cursor: "pointer",
                display: "block",
                margin: "0 auto",
                color: "white"
            },

            styleCincinnati: {
                backgroundColor: "black",
                padding: "15px",
                borderRadius: "50%",
                border: "2px solid gray",
                width: "30%",
                cursor: "pointer",
                display: "block",
                margin: "0 auto",
                color: "white"
            },

            styleCharlotte: {
                backgroundColor: "black",
                padding: "15px",
                borderRadius: "50%",
                border: "2px solid gray",
                width: "30%",
                cursor: "pointer",
                display: "block",
                margin: "0 auto",
                color: "white"
            },

            styleIndianapolis: {
                backgroundColor: "black",
                padding: "15px",
                borderRadius: "50%",
                border: "2px solid gray",
                width: "30%",
                cursor: "pointer",
                display: "block",
                margin: "0 auto",
                color: "white"
            }
        }
    }

    //this is for left-to-right interaction**
    //this sends the clicked option to the right side
    sidebarClick(location) {
        this.props.clicked(location);
    }

    //this is for right-to-left interaction**
    //this updates the component after the first option is clicked when the original 
    // value is an empty string then calls the same functions as the last
    componentWillUpdate(nextProps, nextState) {
        if (this.props.locationNew === ""){
            var e = this.props.locationNew
            setTimeout( () => { this.changeClass(e) }, 10);
        }
    }

    // this updates the component if another option is clicked
    componentDidUpdate(prevProps) {
        if(this.props.locationNew !== prevProps.locationNew) {
            var e = this.props.locationNew
            setTimeout( () => { this.changeClass(e) }, 10);
        }
    }

    //this changes the styles for the buttons when the pin on the right side is clicked
    changeClass(e) {
        if (e === "Lancaster") {
            this.setState({
                styleLancaster: {
                    backgroundColor: "red",
                    padding: "15px",
                    borderRadius: "50%",
                    border: "2px solid gray",
                    width: "30%",
                    cursor: "pointer",
                    display: "block",
                    margin: "0 auto",
                    color: "black"
                }
            })
        } else if (e === "Hockessin") {
            this.setState({
                styleHockessin: {
                    backgroundColor: "red",
                    padding: "15px",
                    borderRadius: "50%",
                    border: "2px solid gray",
                    width: "30%",
                    cursor: "pointer",
                    display: "block",
                    margin: "0 auto",
                    color: "black"
                }
            })
        } else if (e === "Cincinnati") {
            this.setState({
                styleCincinnati: {
                    backgroundColor: "red",
                    padding: "15px",
                    borderRadius: "50%",
                    border: "2px solid gray",
                    width: "30%",
                    cursor: "pointer",
                    display: "block",
                    margin: "0 auto",
                    color: "black"
                }
            })
        } else if (e === "Charlotte") {
            this.setState({
                styleCharlotte: {
                    backgroundColor: "red",
                    padding: "15px",
                    borderRadius: "50%",
                    border: "2px solid gray",
                    width: "30%",
                    cursor: "pointer",
                    display: "block",
                    margin: "0 auto",
                    color: "black"
                }
            })
        } else if (e === "Indianapolis") {
            this.setState({
                styleIndianapolis: {
                    backgroundColor: "red",
                    padding: "15px",
                    borderRadius: "50%",
                    border: "2px solid gray",
                    width: "30%",
                    cursor: "pointer",
                    display: "block",
                    margin: "0 auto",
                    color: "black"
                }
            })
        }        
    }

    render() {

        return (
            <div className="leftSide">

                <h2>Places I've Lived</h2>
                
                    <button style={this.state.styleLancaster} onClick={() => { this.sidebarClick(this.state.location1) }}>{ this.state.location1 }</button>
                    <button style={this.state.styleHockessin} onClick={() => { this.sidebarClick(this.state.location2) }}>{ this.state.location2 }</button>
                    <button style={this.state.styleCincinnati} onClick={() => { this.sidebarClick(this.state.location3) }}>{ this.state.location3 }</button>
                    <button style={this.state.styleCharlotte} onClick={() => { this.sidebarClick(this.state.location4) }}>{ this.state.location4 }</button>
                    <button style={this.state.styleIndianapolis} onClick={() => { this.sidebarClick(this.state.location5) }}>{ this.state.location5 }</button>
                
            </div>
        );
      }
}

export default LeftSide;