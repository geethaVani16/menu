import '../styles/styles.scss'
import Link from 'next/link'
import React, { Component } from 'react'

import { Navbar, Nav } from 'react-bootstrap'


export default class index extends Component {
  render() {
    return (

      <div>

        <head>
          <script src="https://kit.fontawesome.com/34b1c5b1c5.js"></script>
        </head>

        <Link href='/header'>
          <a> header ||</a>
        </Link>

        <Navbar bg="primary" variant="dark" fixed='top'>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/aprilMonth">Calander</Nav.Link>
            <Nav.Link href="/panchanga">panchanga</Nav.Link>
            <Nav.Link href="/form">form
            <i class="fas fa-sun">heee</i>

            </Nav.Link>

          </Nav>

        </Navbar>
       
      </div>
    )
  }
}
