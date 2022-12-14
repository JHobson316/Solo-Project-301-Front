import React, { Component } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';

export default class Board extends Component {
  render() {
    return (
      <div>
        <div class="card">
                <MDBCard alignment='center'>
                    <MDBCardHeader>Featured</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Special title treatment</MDBCardTitle>
                        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                </MDBCard>
            </div>
      </div>
    )
  }
}
