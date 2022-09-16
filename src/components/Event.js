import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         eName: React.createRef(),
         eDate: React.createRef(),
         eDescription: React.createRef()
      }
    }
    
    handleAddEvent = (e) => {
        e.preventDefault();
        // this.props.handleAddEvent();
        console.log(this.state.eName.current.value)
        console.log(this.state.eDate.current.value)
        console.log(this.state.eDescription.current.value)
    }
  render() {
    return (
      <div>
            <label for="eName">Event Name: </label>
            <input ref={this.state.eName} id='eName' type="text" />
            <br />
            <label for="eName">Event Date: </label>
            <input ref={this.state.eDate} id='eDate' type="date" placeholder={Date.now()}/>
            <br />
            <label for="eName">Event Description: </label>
            <input ref={this.state.eDescription} id="eDescription" type="text" placeholder="Event Description"/>
            <br />
            <button onClick={this.handleAddEvent}>Add Event</button>
      </div>
    )}}
