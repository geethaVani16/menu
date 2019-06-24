import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios'
import '../styles/styles.scss'
import DayCalander from '../pages/dayDetails'
import imageNext from '../images/next.svg'
import imagePrev from '../images/prev.svg'
import { ButtonToolbar } from 'react-bootstrap'

export default class Month extends Component {
    state={
        modalShow:false,
        dateContext:moment(),
        panchagam:[],
        monthDays:[],
        dayDetails:{}

    }
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    year = () => {
        return this.state.dateContext.format('Y')
      }
    month = () => {
    return this.state.dateContext.format("MMMM");
    }
    prevMonth = () => {
        <Month/>
    }
    nextMonth = () => {
        console.log('next')

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
                this.setState( () => ({
                    panchagam:response.data.panchagam
                }), () => this.GenerateMonthCalander() )
               
        })
        .catch(err => console.log(err))

    }
    GenerateMonthCalander = () => {
        let blanks = [];
        for (let i = 0; i < this.firstDayofMonth(); i++) {
        blanks.push(<td key={i * 100}>{''}</td>)
        }
        var daysInMonth = [];
           console.log(this.daysInMonth())
        for(let d=0;d<=this.daysInMonth()-1;d++){
            daysInMonth.push(
                <td key={this.state.panchagam[d].day} className='day-td-item'>
                   <div className='table-td-item'>
                       
                        <div className='day-tithi'>
                            {this.state.panchagam[d].tithi_name }
                       </div>
                       <div 
                         className='table-day'
                            onClick={() => this.setState({ modalShow:true, dayDetails:this.state.panchagam[d]})}
                       >{this.state.panchagam[d].day}
                       </div>
                       <div>
                           {/* {this.state.panchagam[d].} */}
                       </div>
                      
                    </div> 
                </td>
            )

        }
        var totalSlots = [...blanks,...daysInMonth]
        // console.log(totalSlots,'totalSlots')
        let rows =[];
        let cells=[];
        totalSlots.forEach((row,i) => {
            if((i%7)!== 0) {
                cells.push(row)
            } else {
                let insertRow =cells.slice();
                rows.push(insertRow)
                cells=[];
                cells.push(row)
            }
            if(i==totalSlots.length - 1) {
                let insertRow = cells.slice()
                rows.push(insertRow)
            }
        })
        this.setState(() => ({monthDays:rows}))
    }
    

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        // console.log(this.state.monthDays,'monthDays')
         console.log('state panchanga',this.state)
        return (
            <div>
               <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-9 col-md-9 '>
                        <div className='  calander-wrapper'>

                            <div className='calander-header'>
                                <span className='calander-prev'
                                    onClick={(e) => { this.prevMonth() }}
                                >
                                <img src={imagePrev} className="image-prev-month" />
                                </span>
                                <h1> {this.month()}-{this.year()} </h1>
                                <span className='calander-next'
                                    onClick={(e) => { this.nextMonth() }}
                                >
                                <img src={imageNext} className="image-next-month" />
                                </span>
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

                                        {this.state.monthDays.map((day,i) => {
                                            return<tr key={i*0.1} className='calander-tr'>{day}</tr>
                                        })}

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
