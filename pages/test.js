import React, { Component } from 'react'
import moment from 'moment'

export default class test extends Component {
    state={
        date:moment()
    }
    dateContext='6 1 2019 01:00:42'
     date=moment(this.dateContext).format("MM-DD-YYYY")
    
    componentDidMount() {
        // let monthNo = this.months.indexOf(month);
        // console.log(monthNo,'monthNo')
        // let dateContext = Object.assign({}, this.state.dateContext);
        // dateContext = moment(dateContext).set("month", monthNo);
        // this.setState({
        //     dateContext: dateContext
        // });
    }
    render() {
        console.log(this.date,'thus.date')
        return (
            <div>
                
            </div>
        )
    }
}
