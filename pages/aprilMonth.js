import React, { Component } from 'react'
import '../styles/styles.scss'
import axios from 'axios'

export default class April extends Component {
    componentDidMount() {
        axios.get('https://harivara.staging.wpengine.com/asto_data.json')
        .then(response => {
            console.log(response.data)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
