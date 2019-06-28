import React, { Component } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import axios from 'axios'
import '../styles/styles.scss'
import 'react-datepicker/dist/react-datepicker.css'
import LocationSearchInput from '../pages/Location_search'
import DayCalander from '../pages/dayDetails'

import { ButtonToolbar } from 'react-bootstrap'
import { stringify } from 'querystring';

export default class Month extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            dateContext: moment(),
            panchagam: [],
            monthDays: [],
            dayDetails: {},
            startDate: new Date(),
            latLong: [],
            selectLanguage: '',
            timeZoneName:'',
            city:''
    
        }
    }

    handleSelectPlace = (latLong) => {
        // console.log(place,'place')
        this.setState({ latLong })
        const latitude = this.state.latLong["lat"]
        const longitude = this.state.latLong["lng"]
        // console.log(latitude,longitude)
        axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=1561704054&key=AIzaSyD6thY8torbKUXm0TrqXC_2mQlkiBnOLQU&libraries=places`)
        .then(response => {
            // console.log(response.data)
            this.setState({timeZoneName:response.data.timeZoneId})
            console.log(this.state.timeZoneName,'timezone')
        })
        .catch(err => console.log(err))

        const formData={
            year:this.year(),
            month:moment(this.state.startDate).format('MM'),
            time:this.state.dateContext.format('hh:mm:ss'),
            timezonename:this.state.timeZoneName,
            timezone:"GMT+0530",
            language:"Telugu",
            city:this.state.city
        }
        console.log(formData,'formdata')
        axios.post('https://mytempletour.com/api/panchang',formData)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))

    }

    handleSelectCity = (city) => {
        console.log(city,"in aprilmonth")
        this.setState({city})
    }
   
    handleDateChange = (date) => {
        this.setState({ 
            startDate: date,
            dateContext:moment(date)
         })
         
       
        const formData = {
            year: this.year(),
            month: moment(this.month()).format('MM')
        }
        // console.log(formData, 'formdata')
    }

    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    year = () => {
        return this.state.dateContext.format('Y')
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).subtract(1, 'month')
        this.setState(() => ({ dateContext: dateContext }))
        // this.GenerateMonthCalander()

    }
    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext)
        dateContext = moment(dateContext).add(1, 'month')
        this.setState(() => ({ dateContext: dateContext }))
       

    }
    firstDayofMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d') // Day of week 0...1..5...6 //0--sun 1--mon
        return firstDay; //output:6 // month is starting with saturday
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }

    componentDidMount() {
        axios.get('https://harivara.staging.wpengine.com/asto_data.php')
            .then(response => {
                this.setState(() => ({
                    panchagam: response.data.panchagam
                }))

            })
            .catch(err => console.log(err))

    }



    render() {
        // console.log(moment("Fri Jun 29 2019 16:47:58 GMT+0530 (India Standard Time)"))
        // console.log(this.state.selectPlace,'state')
        // console.log(this.props,'props in aprilMonth')
        let modalClose = () => this.setState({ modalShow: false });
        

        let blanks = [];
        for (let i = 0; i < this.firstDayofMonth(); i++) {
            blanks.push(<td key={i * 100}>{''}</td>)
        }
        var daysInMonth = [];
        // console.log(this.daysInMonth())
        for (let d = 1; d <= this.daysInMonth(); d++) {
            daysInMonth.push(
                <td
                    // key={this.state.panchagam[d].day}
                    className='day-td-item'
                >
                    <div className='table-td-item'>




                        {d}


                        <div className='day-tithi'>
                            {/* {this.state.panchagam[d].tithi_name } */}
                        </div>
                        <span
                            className='table-day'
                            onClick={() => this.setState({ modalShow: true, dayDetails: this.state.panchagam[d] })}
                        >
                            {/* {this.state.panchagam[d].day} */}
                        </span>
                        <div className='font-awasome-sun'>
                            <div className='SunRise'>
                                <i className="fas fa-sun ">
                                    {/* {moment(this.state.panchagam[d].sun_Rise).format("HH:mm")} */}
                                </i>
                            </div>

                            <div className='Sunset'>

                                <i className="fas fa-sun ">
                                    {/* {moment(this.state.panchagam[d].sun_Set).format("HH:mm")} */}
                                </i>

                            </div>

                        </div>

                        <div className='font-awasome-moon-star'>

                            {/* <i class="far fa-star " >{this.state.panchagam[d].nakshatra_name} </i> */}
                            <i className="far fa-moon" ></i>
                        </div>

                    </div>
                </td>
            )

        }

        var totalSlots = [...blanks, ...daysInMonth]
        // console.log(totalSlots,'totalSlots')
        let rows = [];
        let cells = [];
        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row)
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow)
                cells = [];
                cells.push(row)
            }
            if (i == totalSlots.length - 1) {
                let insertRow = cells.slice()
                rows.push(insertRow)
            }
        })
        let trElements = rows.map((d, i) => {
            return (
                <tr key={i * 0.1} className='calander-tr'>
                    {d}
                </tr>
            )
        })

        return (

            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-9 col-md-9 '>
                            <div className='  calander-wrapper'>

                                <div className='calander-header-wrapper'>

                                    <form className='upPad-calander-header'>


                                        <div className='row '>

                                            <div className='col-sm-4 col-lg-4 col-md-4'>
                                                <span className='upPad-select'>Select Place</span>
                                                <div>


                                                    <LocationSearchInput handleSelectPlace= { this.handleSelectPlace }

                                                    handleSelectCity ={this.handleSelectCity }/>


                                                </div>
                                            </div>

                                            <div className='col-sm-4 col-lg-4 col-md-4 '>
                                                <span className='upPad-select'>Select Date</span>
                                                <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={this.handleDateChange}
                                                    className='form-control date-picker upPad-width'
                                                    popperPlacement={'bottom'}

                                                />

                                            </div>
                                            <div className='col-sm-4 col-lg-4 col-md-4'>

                                                <span className='upPad-select'>Select Language </span>
                                                <div>

                                                    <label>
                                                        <select className='form-control upPad-width'>
                                                            <option value=''>select Language</option>
                                                            <option value='telugu'>telugu</option>
                                                            <option value='tamil'>tamil</option>
                                                            <option value='hindi'>Hindi</option>
                                                            <option value='kanada'>kanada</option>
                                                            <option value='marathi'>Marathi</option>
                                                            <option value='malayalam'>malayalam</option>
                                                            <option value='english'>English</option>

                                                        </select>
                                                    </label>

                                                </div>
                                            </div>




                                        </div>


                                    </form>

                                    <div className='calander-header'>



                                        <span className='calander-prev'>
                                            <i className="fas fa-chevron-left fa-sm-font-awasome" onClick={(e) => { this.prevMonth() }}></i>
                                        </span>
                                        <h1> {this.month()}-{this.year()} </h1>
                                        <span className='calander-next'

                                        >
                                            <i className="fas fa-chevron-right arrow-right fa-sm-font-awasome" onClick={(e) => { this.nextMonth() }}></i>
                                        </span>
                                    </div>

                                </div>



                                <div className='main-calander'>
                                    <table className='main-table-wrapper'>
                                        <thead>
                                            <tr className='table-thead-item'>
                                                {this.weekdaysShort.map(weekday => {
                                                    return <th key={weekday} className='th-item'>
                                                        <span className='weekday'>{weekday}</span>
                                                    </th>
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody className='calander-body'>
                                            {trElements}

                                            {/* {this.state.monthDays.map((day, i) => {
                                                return <tr  className='calander-tr'>{day}</tr>
                                            })} */}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-lg-3 col-md-3 '>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.

                                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        </div>

                    </div>
                </div>
                <div>
                    <ButtonToolbar>
                        <DayCalander
                            show={this.state.modalShow}
                            onHide={modalClose}
                            day_details={this.state.dayDetails}
                        />
                    </ButtonToolbar>

                </div>
            </div>

        )
    }
}
