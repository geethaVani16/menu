import React, { Component } from 'react'
import  Link  from 'next/link'
import '../styles/calander_styles.css'

export default class DayCalander extends Component {
    state={

        DaysInmonth:[
            {
                "day": 1,
                "location": "Bangalore",
                "date": "Jan 01 2020 11:00:42",
                "yearName":"Vikari",
                "hindu_month_name": "Mārkazhi",
                "hindu_days_number": 17,
                "sun_Rise": "1/1/2020, 6:47:42 AM",
                "sun_set": "1/1/2020, 6:02:08 PM",
                "vara": "Mercury-Wednesday",
                "vara_enter_time": "1/1/2020, 6:47:42 AM",
                "vara_exit_time": "2020-01-01T06:53:55.358Z",
                "shoolam_name": "North",
                "pariharam_name": "Milk",
                "travel_directions": "Mercury-Wednesday Avoid Travelling Towards North",
                "tithi_name": "Shukla Paksha Shasti 6",
                "tithi_enter_time": "12/31/2019, 3:58:34 PM",
                "tithi_exit_time": "1/1/2020, 6:30:33 PM",
                "nakshatra_name": "Purva Bhadrapad",
                "nakshatra_enter_time": "1/1/2020, 1:27:03 AM",
                "nakshatra_exit_time": "1/2/2020, 4:24:05 AM",
                "yoga_name": "Vyatipata",
                "yoga_enter_time": "12/31/2019, 9:01:04 PM",
                "yoga_exist_time": "1/1/2020, 9:50:16 PM",
                "karana_name": "Taitula-Me",
                "karana_enter_time": "1/1/2020, 5:14:34 AM",
                "karana_exit_time": "1/1/2020, 6:30:33 PM",
                "rahu_kalam_enter_time": "1/1/2020, 12:24:42 PM",
                "rahu_kalam_exit_time": "1/1/2020, 1:49:00 PM",
                "rahu_duration": "84 Minutes",
                "yama_kandam_time_enter": "1/1/2020, 8:12:12 AM",
                "yama_kandam_time_exit": "1/1/2020, 9:36:42 AM",
                "guligai_time_enter": "1/1/2020, 11:00:27 AM",
                "guligai_time_exit": "1/1/2020, 12:24:42 PM",
                "Ayanamsa": -24.132498797810836,
                "gagha_postion": [
                    {
                        "sun": "256.121",
                        "degree": "16 Sg 07' 15.60\""
                    },
                    {
                        "moon": "324.730",
                        "degree": "24 aq 43' 48.00\""
                    },
                    {
                        "mars": "214.422",
                        "degree": "04 Sc 25' 19.20\""
                    },
                    {
                        "mercury": "250.629",
                        "degree": "10 Sg 37' 44.40\""
                    },
                    {
                        "jupiter": "252.610",
                        "degree": "12 Sg 36' 36.00\""
                    },
                    {
                        "venus": "290.570",
                        "degree": "20 Cp 34' 12.00\""
                    },
                    {
                        "saturn": "267.373",
                        "degree": "27 Sg 22' 22.80\""
                    },
                    {
                        "rahu": "049.965",
                        "degree": "19 Ta 57' 54.00\""
                    },
                    {
                        "ketu": "229.965",
                        "degree": "19 Sc 57' 54.00\""
                    },
                    {
                        "Lagna": "336.431",
                        "degree": "06 Pi 25' 51.60\""
                    }
                ]
            },
            {
                "day": 2,
                "location": "Bangalore",
                "date": "Jan 02 2020 11:00:42",
                "yearName":"Vikari",
                "hindu_month_name": "Mārkazhi",
                "hindu_days_number": 17,
                "sun_Rise": "1/1/2020, 6:47:42 AM",
                "sun_set": "1/1/2020, 6:02:08 PM",
                "vara": "Mercury-Wednesday",
                "vara_enter_time": "1/1/2020, 6:47:42 AM",
                "vara_exit_time": "2020-01-01T06:53:55.358Z",
                "shoolam_name": "North",
                "pariharam_name": "Milk",
                "travel_directions": "Mercury-Wednesday Avoid Travelling Towards North",
                "tithi_name": "Shukla Paksha Shasti 6",
                "tithi_enter_time": "12/31/2019, 3:58:34 PM",
                "tithi_exit_time": "1/1/2020, 6:30:33 PM",
                "nakshatra_name": "Purva Bhadrapad",
                "nakshatra_enter_time": "1/1/2020, 1:27:03 AM",
                "nakshatra_exit_time": "1/2/2020, 4:24:05 AM",
                "yoga_name": "Vyatipata",
                "yoga_enter_time": "12/31/2019, 9:01:04 PM",
                "yoga_exist_time": "1/1/2020, 9:50:16 PM",
                "karana_name": "Taitula-Me",
                "karana_enter_time": "1/1/2020, 5:14:34 AM",
                "karana_exit_time": "1/1/2020, 6:30:33 PM",
                "rahu_kalam_enter_time": "1/1/2020, 12:24:42 PM",
                "rahu_kalam_exit_time": "1/1/2020, 1:49:00 PM",
                "rahu_duration": "84 Minutes",
                "yama_kandam_time_enter": "1/1/2020, 8:12:12 AM",
                "yama_kandam_time_exit": "1/1/2020, 9:36:42 AM",
                "guligai_time_enter": "1/1/2020, 11:00:27 AM",
                "guligai_time_exit": "1/1/2020, 12:24:42 PM",
                "Ayanamsa": -24.132498797810836,
                "gagha_postion": [
                    {
                        "sun": "256.121",
                        "degree": "16 Sg 07' 15.60\""
                    },
                    {
                        "moon": "324.730",
                        "degree": "24 aq 43' 48.00\""
                    },
                    {
                        "mars": "214.422",
                        "degree": "04 Sc 25' 19.20\""
                    },
                    {
                        "mercury": "250.629",
                        "degree": "10 Sg 37' 44.40\""
                    },
                    {
                        "jupiter": "252.610",
                        "degree": "12 Sg 36' 36.00\""
                    },
                    {
                        "venus": "290.570",
                        "degree": "20 Cp 34' 12.00\""
                    },
                    {
                        "saturn": "267.373",
                        "degree": "27 Sg 22' 22.80\""
                    },
                    {
                        "rahu": "049.965",
                        "degree": "19 Ta 57' 54.00\""
                    },
                    {
                        "ketu": "229.965",
                        "degree": "19 Sc 57' 54.00\""
                    },
                    {
                        "Lagna": "336.431",
                        "degree": "06 Pi 25' 51.60\""
                    }
                ]
            }
        ]
    }
    render() {
        
        // console.log(this.props,'props')
        // console.log(this.props.match.id,'sc')
        return (
            <div  className='container'>
                <div className='row'>
                <div className='col-sm-8 col-lg-8 col-md-8 '>   
                  {
                      this.state.DaysInmonth.map(obj =>  {
                          return (
                                
                    <div key ={obj.day} className='current-date-wrapper'>
                        <div className='current-date-header-wrapper'>
                            <div className='current-date-detail'>
                                    <span className='day-detail'>
                                        Day Details
                                        
                                    </span>

                                    <span className='day-close'>
                                        <Link href='/home'> 
                                            <a >x Close </a>
                                        </Link>
                                    </span>
                            </div>

                            <div className='row'>
                                <div className='col-sm-4 col-lg-4 col-md-4'>
                                
                                    <div className='calander-current-day-number'> {obj.day}  </div>
                                
                                </div>

                                <div className='col-sm-8 col-lg-8 col-md-8'>
                                    <div className='row'>
                                        <div className='col-sm-4 col-lg-4 col-md-4' >
                                            Amanta
                                        </div>
                                        <div className='col-sm-8 col-lg-8 col-md-8'></div>

                                    </div>
                                </div>


                            </div>

                        </div>

                            

                    </div>

                          )
                      })
                  }


                    
                </div>
                <div className='col-sm-4 col-lg-4 col-md-4 '>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 

                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                </div>


                </div>
                
            </div>
        )
    }
}
