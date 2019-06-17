import React, { Component } from 'react'
import '../styles/styles.scss'

export default class form extends Component {
    state = {
        years: [],
        currentYear: new Date().getUTCFullYear(),
        currentMonth: new Date().toDateString().split(' ')[1],
        currentDay: new Date().getDate(),
        months: [
            { id: 1, month: 'Jan' },
            { id: 2, month: 'feb' },
            { id: 3, month: 'Mar' },
            { id: 4, month: 'Apr' },
            { id: 5, month: 'May' },
            { id: 6, month: 'June' },
            { id: 7, month: 'July' },
            { id: 8, month: 'Aug' },
            { id: 9, month: 'Sept' },
            { id: 10, month: 'Oct' },
            { id: 11, month: 'Nov' },
            { id: 12, month: 'Dec' },

        ],
        days: []
    }
    handleMonthChange = (e) => {
        console.log(e.target.value)
        var d = new Date();
        var year = d.getUTCFullYear(); //current year 2019
        var month = d.getUTCMonth() + 1; //current month in form of number
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) // tells where it is leap year or not
        {
            var febDays = 29;
        }
        else {
            var febDays = 28;
        }
        var daysOfMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let selectedMonth = e.target.value
        let monthDates = []
        for (let i = 0; i <= daysOfMonth[selectedMonth - 1]; i++) {
            monthDates.push(i)
        }
        this.setState(() => ({ days: monthDates }))

    }
    componentWillMount() {
        let years = []
        let output = 0
        for (let i = 0; i < 200; i++) {
            output = 1901 + i
            years.push(output)
        }
        this.setState(() => ({ years: years }))
    }

    render() {
        //    console.log( this.state)
        return (
            <div className='row panchanga_main'>
                <div className="col-md-2"><div>qwwww wwwww wwwwwwww wwww ww wwwww</div></div>
                <div className='col-md-6 wrapper'>
                    <div className='row'>
                    
                        <div className='col-md-4 datecall'>
                            <strong>Date:</strong>
                        </div>
                        <div className='col-md-8'>
                            <form >
                                <div className="first-row-form">
                                    <select className="select-row-wrapper" >
                                        <option value=''>{this.state.currentYear}</option>
                                        {this.state.years.map(year => {
                                            return <option key={year}>{year}</option>
                                        })}
                                    </select>

                                    <select className="select-row-wrapper" onChange={this.handleMonthChange}>
                                        <option value=''>{this.state.currentMonth}</option>
                                        {this.state.months.map(month => {
                                            return <option key={month.id} value={month.id}>{month.month}</option>
                                        })}
                                    </select>
                                    <select className="select-row-wrapper" >
                                        <option value='' >{this.state.currentDay}</option>
                                        {this.state.days.map(day => {
                                            return <option key={day}>{day}</option>
                                        })}
                                    </select>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">qwertyuiopASDFGHJKLZXCVBNM,</div>
            </div>
        )
    }
}
