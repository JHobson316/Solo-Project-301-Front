import React, { Component } from 'react'
import Event from './components/Event'
import Board from './components/Board'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eventName: "",
      eventDate: "",
      eventDescription: ""
    }
  }

  render() {
    return (
      <>
        <Header />
        <Event />
        <Board />
        <Footer />
      </>
    )
  }
}
