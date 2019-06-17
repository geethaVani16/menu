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
            <div className='container'>
                <div className='row'>
                    <div className="col-sm-2">hello 2</div>
                    <div className="col-sm-6 panchanga">
                        <form>
                           <div className='row dateWrapper ' >
                               <span className="col-sm-3 date-span-item"> Date </span>
                               <span className="col-sm-9">
                               
                                    <span className='select-items-wrapper'>
                                        <select className='date-select-items'>
                                            <option value=''>{this.state.currentYear}</option>
                                            {this.state.years.map(year => {
                                                return <option key={year}>{year}</option>
                                            })}
                                        </select>

                                        <select onChange={this.handleMonthChange} className='date-select-items'>
                                            <option value=''>{this.state.currentMonth}</option>
                                            {this.state.months.map(month => {
                                                return <option key={month.id} value={month.id}>{month.month}</option>
                                            })}
                                        </select>
                                        <select className='date-select-items' >
                                            <option value='' >{this.state.currentDay}</option>
                                            {this.state.days.map(day => {
                                                return <option key={day}>{day}</option>
                                            })}
                                        </select>
                                    </span>
                            
                               </span>
                           </div>
                           <div className='row'>
                               <div className="col-sm-3 location-span-item" >
                                   <span >Location</span>
                               </div>
                               <div className="col-sm-9" >
                                   <span >
                                        <label >
                                            <input type='text' value='' className='location-select-items'/>
                                        </label>
                                   </span>
                               </div>

                           </div>
                          <div className='row'>
                              <div className='col-sm-3'></div>
                                <div className='col-sm-9 get_punchanga'>
                                 <button type="button" className="btn btn-danger ">GET PANCHANG</button>
                                </div>

                          </div>

                        </form>
                    </div>
                    <div className="col-sm-4"> hello 4</div>

                </div>

            </div>
        )














        // return (
        //     <div className="row">
        //         <div className='col-md-2'></div>
        //         <div className='col-md-6 wrapper'>
        //             <form>
        //                 <div className='dateFormMain'>
        //                     <div className='row'>
        //                         <div className='col-md-4'>
        //                             {/* <div> */}
        //                             Date :
        //                        {/* </div> */}
        //                         </div>
        //                         <div className='col-md-8 dateForm'>
        //                             <div className='dateFormColum'>
        //                                 <select className="select-row-wrapper" >
        //                                     <option value=''>{this.state.currentYear}</option>
        //                                     {this.state.years.map(year => {
        //                                         return <option key={year}>{year}</option>
        //                                     })}
        //                                 </select>
        //                             </div>
        //                             <div className='dateFormColum'>
        //                                 <select className="select-row-wrapper" onChange={this.handleMonthChange}>
        //                                     <option value=''>{this.state.currentMonth}</option>
        //                                     {this.state.months.map(month => {
        //                                         return <option key={month.id} value={month.id}>{month.month}</option>
        //                                     })}
        //                                 </select>
        //                             </div>
        //                             <div className='dateFormColum'>
        //                                 <select className="select-row-wrapper" >
        //                                     <option value='' >{this.state.currentDay}</option>
        //                                     {this.state.days.map(day => {
        //                                         return <option key={day}>{day}</option>
        //                                     })}
        //                                 </select>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 </div>
        //                 <div className='locationMainForm'>
        //                     <div className='row'>
        //                         <div className='col-md-4'>
        //                            <div className='locationWrapper' > Location </div>
        //                         </div>
        //                         <div className='col-md-8 dateFormColum'>
        //                             <input type='text' className='inputLocationWrapper'/>

        //                         </div>

        //                     </div>
        //                 </div>
        //             </form>
        //         </div>
        //         <div className='col-md-4'></div>

        //     </div>
        // )
    }
}
