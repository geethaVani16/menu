import '../styles/styles.scss'
import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react'

import { Navbar, Nav } from 'react-bootstrap'


export default class index extends Component {
  render() {
    return (

      <div>
        
        <Head>
          <script src="https://kit.fontawesome.com/34b1c5b1c5.js"></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6thY8torbKUXm0TrqXC_2mQlkiBnOLQU&libraries=places"></script>
        </Head> 

        <Link href='/header'>
          <a> header ||</a>
        </Link>

        <Navbar bg="primary" variant="dark" fixed='top'>
          <Navbar.Brand href="/header">header</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/aprilMonth">Calander</Nav.Link>
            <Nav.Link href="/panchanga">panchanga</Nav.Link>
            <Nav.Link href="/form">form</Nav.Link>
            <Nav.Link href='/Location_search'>location_search</Nav.Link>
            
          </Nav>

        </Navbar>
       
      </div>
    )
  }
}
