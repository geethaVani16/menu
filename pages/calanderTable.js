import React, { Component } from 'react'
import '../styles/calander_styles.css'

export default class calanderTable extends Component {
    state={
        year:''
    }
     myCalender= (curr_month = "curr") => {
            
    }
    componentDidMount() {
        var d = new Date();
        var year = d.getUTCFullYear();
        var day = d.getUTCDay();
        var date = d.getUTCDate();
        var month = d.getUTCMonth();
        // our global object
        var master_data = {
            day_start: {
                prev: 0, 
                curr: day - (date % 7 - 1) + 7,
                next: 0
            },
            months: {
                prev: month - 1, 
                curr: month, 
                next: month + 1
            }
        };
        //Getting February Days Including The Leap Year
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            var febDays = 29;
        } else {
            var febDays = 28;
        }
        // Getting The Months and Days of the Week
        var daysOfMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var months_full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

       
    }

 

 
    render() {
        return (
            <div>
                calanderTable
            </div>
        )
    }
}
