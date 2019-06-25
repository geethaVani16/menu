import React, { Component } from 'react'
import '../styles/styles.scss'
import axios from 'axios'

export default class Form extends Component {
    state = {
        years: [],
        currentYear: new Date().getUTCFullYear(),
        currentMonth: new Date().toDateString().split(' ')[1],
        currentDay: new Date().getDate(),
        currentLocation: {},
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

    handleLocationChange = (e) => {
        const enteredCurrentLocation = e.target.value
        // console.log(enteredCurrentLocation,'enteredlocation')
        this.setState(() => ({ currentLocation: enteredCurrentLocation }))
    }
    componentWillMount() {
        let years = []
        let output = 0
        for (let i = 0; i < 200; i++) {
            output = 1901 + i
            years.push(output)
        }
        this.setState(() => ({ years: years }))

        axios.get('https://mytempletour.com/api/ipdata')
            .then(response => axios.get(`https://api.ipdata.co/${response.data}?api-key=d489ad57d4edb57b484e01061037935c40a49bedfbcbf01f5aa85271`))
            .then(response => {
                console.log(response.data, 'res.data')
                this.setState(() => ({ currentLocation: response.data }))
            })
            .catch(err => console.log(err))
    }

    render() {
        //    console.log( this.state)
        return (



            <form className='panchanga-form'>

                <div className='date-wrapper'>

                    <div className='row each-item'>
                        <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>
                            <span >Date</span>
                        </div>
                        <div className='col-md-9 col-sm-9 col-lg-9 '>

                            <div className='query-item'>

                                <span className='select-item'>

                                    <select className='select-items form-control'>
                                        <option value=''>{this.state.currentYear}</option>
                                        {this.state.years.map(year => {
                                            return <option key={year}>{year}</option>
                                        })}
                                    </select>

                                </span>

                                <span className='select-item'>
                                    <select onChange={this.handleMonthChange} className='form-control select-items'>
                                        <option value=''>{this.state.currentMonth}</option>
                                        {this.state.months.map(month => {
                                            return <option key={month.id} value={month.id}>{month.month}</option>
                                        })}
                                    </select>

                                </span>
                                <span className='select-item'>

                                    <select className='select-items form-control' >
                                        <option value=''>{this.state.currentDay}</option>
                                        {this.state.days.map(day => {
                                            return <option key={day}>{day}</option>
                                        })}
                                    </select>

                                </span>

                            </div>

                        </div>



                    </div>

                </div>
                <div className='row each-item'>
                    <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>

                        <span>Location</span>

                    </div>

                    <div className='col-md-9 col-sm-9 col-lg-9'>

                        <div className='query-item'>
                            
                                <label>

                                    <input type='text'
                                        value={this.state.currentLocation.city}
                                        onChange={this.handleLocationChange}
                                        className='form-control text-long-pad'
                                    />

                                </label>
                            
                        </div>
                    </div>
                </div>

                <div className='row each-item'>
                    <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>

                        <span>Curr Location</span>

                    </div>

                    <div className='col-md-9 col-sm-9 col-lg-9 location-items-wrapper'>

                        <div className='query-item'>
                            <div className='location-details'>
                                <span >{this.state.currentLocation.emoji_flag}</span>
                                <span >{this.state.currentLocation.city}</span>
                                <span >{this.state.currentLocation.region}</span>
                                <span >{this.state.currentLocation.country_name}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row each-item'>
                    <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>

                        <span>Latitude</span>

                    </div>

                    <div className='col-md-9 col-sm-9 col-lg-9'>
                        <div className='row geo-items'>
                            <div className='col-md-6 col-sm-6 col-lg-6 '>
                                <span className='geo-each-item form-control'>{this.state.currentLocation.latitude}</span>
                            </div>
                            <div className='col-md-6 col-sm-6 col-lg-6 '>
                                <span className='geo-each-item form-control'>North</span>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='row each-item'>
                    <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>

                        <span>Longitude</span>

                    </div>

                    <div className='col-md-9 col-sm-9 col-lg-9'>
                        <div className='row geo-items'>
                            <div className='col-md-6 col-sm-6 col-lg-6 '>
                                <span className='geo-each-item form-control'>{this.state.currentLocation.longitude}</span>
                            </div>
                            <div className='col-md-6 col-sm-6 col-lg-6 '>
                                <span className='geo-each-item form-control'>North</span>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='row each-item'>
                    <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>

                        <span>Timezone</span>

                    </div>

                    <div className='col-md-9 col-sm-9 col-lg-9'>
                        <div className='form-control text-long-pad'>
                            {this.state.currentLocation.time_zone && this.state.currentLocation.time_zone.name }
                        </div>

                    </div>
                </div>

                <div className='row each-item'>
                    <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>

                        <span>offset</span>

                    </div>

                    <div className='col-md-9 col-sm-9 col-lg-9'>
                        <div className='form-control text-long-pad'>
                            {this.state.currentLocation.time_zone && this.state.currentLocation.time_zone.offset }
                        </div>

                    </div>
                </div>


                <div className='row each-item'>
                    <div className='col-md-3 col-sm-3 col-lg-3 form-heading'>

                        <span>Ayanamsa</span>

                    </div>

                    <div className='col-md-9 col-sm-9 col-lg-9'>
                        <div className='form-control text-long-pad'>
                            
                        </div>

                    </div>
                </div>



            <div  className='get-panchang'>
                <input type="submit" value='get panchang' className='btn btn-danger'/>
            </div>
            </form>





        )


    }
}
