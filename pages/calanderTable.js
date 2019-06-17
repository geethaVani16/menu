import React, { Component } from 'react'
import '../styles/calander_styles.css'

export default class calanderTable extends Component {
    state={
        year:'',

    }

 myCalendar = (curr_month='curr') => {
    var tr_count = 1;
    var tbody_html = "";
    var weekday_count = 1;
    var counter = 1;
    
   
    var d = new Date();
    var year = d.getUTCFullYear();
    var day = d.getUTCDay();
    var date = d.getUTCDate();
    var month = d.getUTCMonth();
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
    }
    var month=master_data.months[curr_month]
    var start_of_curr = master_data.day_start[curr_month];
    console.log(start_of_curr,'start-of')

    // if (curr_month !== "curr") {

    //     if (master_data.months[curr_month] === 11 && curr_month === "prev") {
    //         year--;
    //     }

    //     if (master_data.months[curr_month] === 0 && curr_month === "next") {
    //         year++;
    //     }
    // }
    //Getting February Days Including The Leap Year
    if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
        var febDays = 29;
    } else {
        var febDays = 28;
    }
    // Getting The Months and Days of the Week
    var daysOfMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var months_full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //To build the calender body
    while(counter<= daysOfMonth[month]){
        if(weekday_count===8) {
            tbody_html += "</tr>";
            weekday_count = 1;
        }
        if (weekday_count === 1) {
            tbody_html += "<tr>";
            tr_count++;
        }

    }
 }
 componentWillMount() {
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
    }
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
                {this.myCalendar ()}
            </div>
        )
    }
}
