
import '../styles/styles.scss'
import { Button } from 'reactstrap'
import  Link  from 'next/link'
import React, { Component } from 'react'
import Head from 'next/head';

export default class index extends Component {
    render() {
        return (
            <div className="abc">
            <h1>welcome</h1>
            <Link href='/header'> 
                 <a > header ||</a>
            </Link>
            <Link href='/form'> 
                 <a > form ||</a>
            </Link>
            <Link href='/calanderTable'> 
                 <a > calander ||</a>
            </Link>
            <Link href='/home'> 
                 <a > calander in home ||</a>
            </Link>

            
        </div>
        )
    }
}
