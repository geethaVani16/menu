import React, { Component } from 'react'
import moment from 'moment'
import Link  from 'next/link'
import '../styles/calander_styles.css'

export default class Calander extends Component {
    state = {
        dateContext: moment(),
        today: moment(),
        days: []

    }
    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();

    year = () => {
        return this.state.dateContext.format('Y')
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        // console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    firstDayofMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d') // Day of week 0...1..5...6 //0--sun 1--mon
        return firstDay; //output:6 // month is starting with saturday
    }
    componentDidMount() {
        let blanks = [];
        for (let i = 0; i < this.firstDayofMonth(); i++) {
            blanks.push(<td key={i * 100}>{''}</td>)
        }
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <td key={d}>
                    
                        <div className='table-td-item'>

                            {/* <Link href={`./day-info?id=${d}`} >
                                <a>{ <span className='table-day'>{d}</span>}</a>
                            </Link> */}

                            <span className='table-day'>{d}</span>
                        </div>
                   
                </td>
                    
            )
        }
        var totalSlots = [...blanks, ...daysInMonth] //combinning blanks and daysInMonth
        let rows = [];
        let cells = [];
        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row)
            }
            else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i == totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow)
            }
        })
        this.setState(() => ({ days: rows}))


    }




    render() {
        console.log(this.month(), 'month')

        return (
            <div className='container'>

                <div className="calander-main">
                    <div className="row">

                        <div className='col-sm-8 col-lg-8 col-md-8 '>

                        <div className='calander-wrapper'>
                            <div className='calander-header'>
                                <h1> {this.month()}-{this.year()} </h1>
                            </div>

                            <span>
                                <table className='main-table-wrapper' >
                                   
                                        <thead >
                                            <tr className='table-thead-item' >
                                                {this.weekdaysShort.map(weekday => {
                                                    return  <th key={weekday} className='th-item'>
                                                                <span className='weekday'>{weekday}</span>
                                                            </th>
                                                })}
                                            </tr>
                                        </thead>
                                   
                                    <tbody className='calander-body'>
                                        {this.state.days.map((day, i) => {
                                            return <tr key={i} className='calander-tr'> {day} </tr>
                                        })}

                                    </tbody>
                                </table>
                            </span>

                        </div>

                           

                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 

                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
