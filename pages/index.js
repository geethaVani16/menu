
import '../styles/styles.scss'
import { Button } from 'reactstrap'
import  Link  from 'next/link'
import React, { Component } from 'react'
import Head from 'next/head';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap'


export default class index extends Component {
    render() {
        return (
            <div>
            <Link href='/header'> 
                 <a> header ||</a>
            </Link>

            <Navbar bg="primary" variant="dark" fixed='top'>
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/aprilMonth" activeClassName="active" eventKey="/aprilMonth">Calander</Nav.Link>
      <Nav.Link href="/panchanga">panchanga</Nav.Link>
      <Nav.Link href="/form">form</Nav.Link>
     
    </Nav>
    
  </Navbar>

        </div>
        )
    }
}
