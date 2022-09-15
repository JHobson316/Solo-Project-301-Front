import React, { Component } from 'react'

export default function Event() {
    function handleAddEvent(e) {
        e.preventDefault();
        console.log("Bop")
    }
    return (
        <>
            <label for="eName">Event Name: </label>
            <input id='eName' type="text" />
            <input id='eDate' type="date" placeholder="Event Date"/>
            <input id="eDescription" type="text" placeholder="Event Description"/>
            <button onClick={handleAddEvent}>Add Event</button>
        </>
    )

}
